import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,

    },
    userId: {
        type: String,
        required: true,


    },
    quantity: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },


}, { timestamps: true })



export default mongoose.model('cart', cartSchema)