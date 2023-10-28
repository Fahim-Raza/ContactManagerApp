const asyncHandler = require("express-async-handler")
const Contact = require("../models/contact_model")

//@desc GET all contacts
//@ route GET/api/contacts
//@accesspublic

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//@desc create new contact
//@ route POST/api/contacts
//@accesspublic

const createContact = asyncHandler(async (req, res) => {
    console.log("the request body is :", req.body)
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("ALL fields are mandatory !")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })


    res.status(201).json(contact)
})

//@desc GET contact
//@ route GET/api/contacts/:id
//@accesspublic

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})

//@desc update contact
//@ route put/api/contacts/:id
//@accesspublic

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,
     req.body,
    { new: true }
    )

    res.status(200).json(updatedContact)
})



//@desc del contact
//@ route delete/api/contacts/:id
//@accesspublic
    //TODO:fix it del function is not working
const delContact = asyncHandler(async (req, res) => {
   // console.log(req.params.id)
   const {id} = req.params
    const contact = await Contact.findById(id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    //console.log(contact)
    const deletedContact = await Contact.deleteOne({_id:id})
    res.status(200).json(deletedContact)
})






module.exports = { getContacts, createContact, getContact, updateContact, delContact }