
const Order = require("../models/orderModel");
const { khaltiPayment } = require("../config/payment");

// Create order
const createOrder = async (req, res) => {
    let body = { ...req.body }; 
    try {
        const products = req.body.products; 
        const order = await new Order({ ...body }).save(); 
    
        if (body.paymentType === "Khalti") {
          const requestPayload = {
            return_url: `http://localhost:8000/api/khalti/callback`,
            website_url: `http://localhost:8000`,
            amount: req.body.totalPrice * 100,
            purchase_order_id: order._id,
            purchase_order_name: "Order " + order.user,
          };
    
          const khalti = await khaltiPayment(requestPayload); 
          res.status(200).send({
            data: khalti,
            order_id: order._id,
            type: "khalti",
            message: "Redirecting to khalti.",
          });
        } else {
          res.status(200).send({
            data: order,
            type: "cash",
            message: "Order placed successfully.",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error." });
      }
};

// Get all orders
const getOrders = async (req, res) => {
    const id = req.params.id;
    try {
        const orders = await Order.find({ userId: id });
        res.status(200).send(orders);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error." });
    }
};


module.exports = {
    createOrder,
    getOrders
};