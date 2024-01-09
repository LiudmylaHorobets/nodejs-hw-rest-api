const express = require("express");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const { getAllContacts, getById, addContact, updateById, updateStatusContact, deleteById } = require("../../controllers/contacts");
// console.log(ctrl);

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), addContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateStatusSchema),
  updateStatusContact
);

router.delete("/:contactId", isValidId, deleteById);

module.exports = router;
