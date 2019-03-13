const express = require('express');
const Contact = require('../models/contacts');

const router = express.Router();

//retrieving contacts
router.get('/contacts', (req, res, next)=>{
    Contact.find((err, contacts)=>{

        if(err) res.json({ message: "No contacts"});
        else res.json(contacts)
    })
});

//add contacts.
router.post('/contact', (req, res, next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({ message: "Failed to add contact"});
        }
        else res.json(contact);
    });
});

//delete contacts
router.delete('/contact/:id', (req, res, next)=>{
    Contact.deleteOne( { "_id": req.params.id}, (err, result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;