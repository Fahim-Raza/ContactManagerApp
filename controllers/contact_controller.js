const asyncHandler = require("express-async-handler")
//@desc GET all contacts
//@ route GET/api/contacts
//@accesspublic

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": "get all contacts" })
})

//@desc create new contact
//@ route POST/api/contacts
//@accesspublic

const createContact = asyncHandler(async (req, res) => {
    console.log("the request body is :", req.body)
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("ALL fields are mandatory")
    }
    res.status(201).json({ "message": "create contact" })
})

//@desc GET contact
//@ route GET/api/contacts/:id
//@accesspublic

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": `get contact for ${req.params.id} ` })
})

//@desc update contact
//@ route put/api/contacts/:id
//@accesspublic

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": `update contact for ${req.params.id} ` })
})



//@desc del contact
//@ route delete/api/contacts/:id
//@accesspublic

const delContact = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": `delete contact for ${req.params.id}` })
})






module.exports = { getContacts, createContact, getContact, updateContact, delContact }