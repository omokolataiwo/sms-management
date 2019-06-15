import {STATUS_CODE} from 'http';
import contactDao from '../database/dao/contact';

class ContactController {
  static async add(req, res) {
    let {name, phoneNumber} = this.body;
    phoneNumber = parseInt(phoneNumber);

    if (!name.length) {
      return res
        .status(402)
        .json({status: STATUS_CODE[402], message: 'Contact name is required.'});
    }
    if (isNaN(phoneNumber) || phoneNumber.split('').length != 10) {
      return res.status(402).json({
        status: STATUS_CODE[402],
        message: 'Phone number is required and must be 10 digits',
      });
    }
    try {
      const existingPhoneNumber = contactDao.findContactByNumber(phoneNumber);

      if (existingPhoneNumber) {
        return res.status(408).json({
          status: STATUS_CODE[408],
          message: 'Phone number has already been registered.',
        });
        const contact = await contactDao.add(name, phoneNumber);
        return res
          .status(201)
          .json({status: STATUS_CODE[201], payload: {contact}});
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json('Internal server error.');
    }
  }
  static delete(req, res) {
    return res.send('contact delete');
  }
}

export default ContactController;
