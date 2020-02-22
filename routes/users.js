const express = require("express")
const router = express.Router()
const User = require("../models/user")

// Index Router
router.get("/register", async (req, res) => {
    res.render("users/register", { user: new User()})
})


// Create Book
router.post("/", async (req, res) => {
    let fileName = req.file != null ? req.file.filename : null

    const user = new User({
        name: req.body.name,    
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        gender: req.body.gender,
    })

    try {   
        const newUser = await user.save()    
        //res.redirect(`users/${newUsers.id}`)
        res.redirect(`users`)
    } catch {
        res.render("register", {
            user: user,
            errorMessage: "Error creating User"
        })
    }
})

module.exports = router