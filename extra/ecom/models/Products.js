const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        product: {
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            require: true,
        },

        img: {
            type: String,
            require: true,
            unique: true,
        },
        price: {
            type: Number,
            require: true,
        },
        categories: {
            type: Array,
            require: true,
        },
        size: {
            type: String,

        },
        color: {
            type: String,

        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
