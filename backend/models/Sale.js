const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({

    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },

            quantity: Number,

            subtotal: Number
        }
    ],

    total: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        default: "cash"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Sale", saleSchema);