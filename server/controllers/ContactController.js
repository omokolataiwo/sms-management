import STATUS_CODE from 'http';
import contactDao from '../database/dao/Contact';

class ContactController {
  static async add(req, res) {
    let {name, phoneNumber} = req.body;
    phoneNumber = parseInt(phoneNumber);
    name = name || '';

    if (!name.length) {
      return res
        .status(402)
        .json({status: STATUS_CODE[402], message: 'Contact name is required.'});
    }
    if (isNaN(phoneNumber) || phoneNumber.toString().split('').length != 10) {
      return res.status(402).json({
        status: STATUS_CODE[402],
        message: 'Phone number is required and must be 10 digits',
      });
    }
    try {
      const existingPhoneNumber = await contactDao.findContactByNumber(
        phoneNumber,
      );

      if (existingPhoneNumber) {
        return res.status(408).json({
          status: STATUS_CODE[408],
          message: 'Phone number has already been registered.',
        });
      }

      const contact = await contactDao.add(name, phoneNumber);
      return res
        .status(201)
        .json({status: STATUS_CODE[201], payload: {contact}});
    } catch (error) {
      console.log(error);
      return res.status(500).json('Internal server error.');
    }
  }
  static async delete(req, res) {
    const {contactId} = req.params;

    try {
      const existingContact = contactDao.findContact(contactId);

      if (!existingContact) {
        return res
          .status(404)
          .json({status: STATUS_CODE[404], message: 'Contact does not exist.'});
      }
      const contact = await contactDao.delete(contactId);
      return res
        .status(200)
        .json({status: STATUS_CODE[200], payload: {contact}});
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error.'});
    }
  }
}
export default ContactController;
