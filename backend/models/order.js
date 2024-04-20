const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: String,
    },
    items: [{
        productId: {
            type: String,
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price: Number
    }],
    paymentType: {
        type: String,
        default: "Cash On Delivery",
      },
    bill: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        default: "Pending",
      },
    transactionId: {
        type: String,
      },
    status: {
        type: "string",
        default: "Received",
      },
},
{
    timestamps: true
}
)

module.exports = Order = mongoose.model('order',OrderSchema);