const express = require("express")
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const cors = require("cors")
const ClientModel = require('./models/Client')
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/client") //changed from localhost to 127.0.0.1, localhost doesnt work sometimes

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    ClientModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Invalid password")
            }
        } else {
            res.json("No record exists")
        }
    })
})

app.post('/register', (req, res) => {
    ClientModel.create(req.body)
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log("server is running")
})