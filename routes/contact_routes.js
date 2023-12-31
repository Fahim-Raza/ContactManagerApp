const express = require("express")
const router = express.Router()
const { getContacts, createContact, getContact, updateContact, delContact } = require("../controllers/contact_controller")

router.
    route("/")
    .get(getContacts)

router.
    route("/")
    .post(createContact)

router.
    route("/:id")
    .get(getContact)

router.
    route("/:id")
    .put(updateContact)

router.
    route("/:id")
    .delete(delContact)

module.exports = router; 