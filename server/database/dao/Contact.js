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
}
