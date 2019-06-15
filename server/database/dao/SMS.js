import db from '../index';

export default class {
  static send(senderId, receiverId, message) {
    const {connection} = db;

    return new Promise((resolve, reject) => {
      const insertSmsQuery = 'INSERT INTO sms VALUES(null, ?, ?, ?, 0)';
      connection.run(
        insertSmsQuery,
        [senderId, receiverId, message],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        },
      );
    });
  }

  static getAllSms(contactId, sent) {
    const flow = sent ? 'senderId' : 'receiverId';
    const {connection} = db;
    return new Promise((resolve, reject) => {
      const getAllQuery = `SELECT * FROM sms WHERE ${flow}=?`;
      connection.all(getAllQuery, [contactId], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    }).then(row => {
      if (sent) {
        return row;
      }

      const updateSmsStatusQuery = 'UPDATE sms SET status=? WHERE receiverId=? ';
      connection.run(updateSmsStatusQuery, [1, contactId], (err, row) => {
        if (err) {
          new Error('Can not update message status.');
        }
      });
      return row;
    });
  }
}
