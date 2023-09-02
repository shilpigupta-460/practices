import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    "product": {
        type: String,
    },
    "catergory": {
        type: String,
    },
    "price": {
        type: String,
    },
    "productImg": {
        type: Buffer,
    }

})


export default mongoose.model("product", productSchema)