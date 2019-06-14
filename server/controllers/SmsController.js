import STATUS_CODES from 'http';
import contactDao from '../database/dao/Contact';
import smsDao from '../database/dao/SMS';

class SmsController {
  static async send(req, res) {
    const senderId = req.params.senderId;
    let {receiverId, message} = req.body;
    message = message || '';
    try {
    const senderContact = await contactDao.findContact(senderId);
    const receiverContact = await contactDao.findContact(receiverId);


    if (!receiverContact) {
      return res
        .status(404)
        .json({status: STATUS_CODES[404], message: 'Invalid receiver id'});
    }
    if (!senderContact) {
      return res
        .status(404)
        .json({status: STATUS_CODES[404], message: 'Invalid sender id'});
    }
    if (!message.length) {
      return res
        .status(403)
        .json({status: STATUS_CODES[403], message: 'SMS can not be empty.'});
    }
    const sms = await smsDao.send(senderId, receiverId, message);
    return res.status(201).json({
      status: STATUS_CODES[201],
      message: `SMS sent to ${receiverContact.phoneNumber}`,
    });
    }catch (error) {
      console.error(error);
      return res.status(500).json({status: STATUS_CODES[500], message: 'Internal server error.'});
    }
  }
}
export default SmsController;
