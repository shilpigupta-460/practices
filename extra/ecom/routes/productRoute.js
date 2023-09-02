const express = require(express)

const router = express.Router()

router.get("/products", (req, res) => {
    console.log(req.header());
})
router.get("/products/:id", (req, res) => {

})
// router.get("/products" , (req,res)=>{

// })
module.export = router