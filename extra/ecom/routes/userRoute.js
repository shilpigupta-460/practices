const express = require('express')
const User = require("../models/User")
const router = express.Router()


const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];


router.get("/", (req, res) => {

    // console.log(req.header())

    // const { name } = products
    res.json({ products })

    // User.find({})
    //     .then((users) => res.json(users))
    //     .catch(err => console.log(err))
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    console.log(req.header());
    const item = products.find(product => product.id === id)
    if (item) { res.status(200).json(item) }
    else {
        res.status(404).send(" user delete")
    }

    //     // User.findById({ _id: req.params.id })
    //     //     .then((users) => res.json(users))
    //     //     .catch(err => console.log(err))
})

router.post("/user", (req, res) => {
    // const username = req.body.name


    // res.status(200).send({ username, id })

})
router.put("/:id", (req, res) => {
    const id = req.params.id
    res.status(200).send(` user put ${id}`)
})
router.delete("/user", (req, res) => {
    res.status(200).send(" user delete")
})

module.exports = router