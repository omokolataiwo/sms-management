import db from '../index';

export default class {
  static send(senderId, receiverId, message) {
    const {connection} = db;

    return new Promise((resolve, reject) => {
      const insertSmsQuery = 'INSERT INTO sms VALUES(null, ?, ?, ?, 0)';
      connection.run(insertSmsQuery, [senderId, receiverId, message], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  }

  static getAllSms(contactId) {
    return [];
  }
}
