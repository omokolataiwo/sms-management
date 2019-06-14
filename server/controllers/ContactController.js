class ContactController {
  static add(req, res) {
    return res.send('contact add');
  }
  static delete(req, res) {
    return res.send('contact delete');
  }
}

export default ContactController;
