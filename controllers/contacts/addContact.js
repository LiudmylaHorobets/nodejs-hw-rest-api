const { Contact } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const contactData = { ...req.body, owner };
  const result = await Contact.create(contactData);
  res.status(201).json(result);
};

module.exports = ctrlWrapper(addContact);
