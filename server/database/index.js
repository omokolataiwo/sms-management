import sqlite3 from 'sqlite3';

class Database {
  constructor() {
    this.connection = new sqlite3.Database('./sms.sqlite');
  }

  init() {
    const smsTable = `CREATE TABLE if not exists sms(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  senderId INTEGER,
  receiverId INTEGER,
  message TEXT,
  status INTEGER
  )`;
    const contactTable = `CREATE TABLE if not exists contact(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  phoneNumber INTEGER
  )`;

    this.connection.run(smsTable);
    this.connection.run(contactTable);
  }
}

const db = new Database();
export default db;
