const { Contact } = require("../../models/contact");

const { ctrlWrapper, HttpError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findOne({ _id: contactId });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = ctrlWrapper(getById);
