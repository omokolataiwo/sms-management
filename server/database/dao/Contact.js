import db from '../index';

export default class {
  static findContact(contactId) {
    const {connection} = db;
    const contactQuery = `SELECT * FROM contact WHERE id = ?`;
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
      connection.run(addContactQuery, [name, phoneNumber], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  }
}
