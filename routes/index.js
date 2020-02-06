const express = require("express")
const router = express.Router()
const Book = require("../models/book")

router.get("/", async (req, res) => {
    let books
    try {
        books = await Book.find().sort({ createAt: "desc"}).limit(10).exec()
    } catch {
        books = []
    }
    res.render("index", {books: books})
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/register", (req, res) => {
    res.render("register")
})

module.exports = router