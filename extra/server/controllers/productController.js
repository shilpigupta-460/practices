import Product from "../Models/productModel.js";


const addProduct = async (req, res) => {
    const product = new Product(req.body)
    const result = await product.save()
    res.status(200).send(result)

}

export default addProduct