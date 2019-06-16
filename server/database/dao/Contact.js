import db from '../index';

export default class {
  static findContact(contactId) {
    const {connection} = db;
    const contactQuery = `SELECT * FROM contact WHERE id=?`;
    return new Promise((resolve, reject) => {
      connection.get(contactQuery, [contactId], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  }

  static findContactByNumber(phoneNumber) {
    const {connection} = db;
    const contactQuery = `SELECT * FROM contact WHERE phoneNumber = ?`;
    return new Promise((resolve, reject) => {
      connection.get(contactQuery, [phoneNumber], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  }

  static add(name, phoneNumber) {
    const {connection} = db;
    const addContactQuery = 'INSERT INTO contact VALUES (null, ?, ?)';
    return new Promise((resolve, reject) => {
      connection.run(addContactQuery, [name, phoneNumber], function(err) {
        if (err) reject(err);
        resolve(this.lastID);
      });
    });
  }

  static delete(contactId) {
    const {connection} = db;
    const removeContactQuery = 'DELETE FROM contact WHERE contact.id=?';
    const removeSmsQuery = 'DELETE FROM sms WHERE senderId=?';
    const updateSmsQuery = 'UPDATE sms SET receiverId=? WHERE receiverId=?';
    return new Promise((resolve, reject) => {
      connection.run(removeContactQuery, [contactId], (err, row) => {
        if (err) reject(err);
      });
      connection.run(removeSmsQuery, [contactId], (err, row) => {
        if (err) reject(err);
      });
      connection.run(updateSmsQuery, [0, contactId], (err, row) => {
        if (err) reject(err);
      });
      resolve();
    });
  }
}
