const axios = require("axios");

//khalti payment
const khaltiPayment = async (payload) => {
  try {
    const response = await axios.post(
      `${process.env.KHALTI_URL}/epayment/initiate/`,
      payload,
      {
        headers: {
          Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// khalti callback
const khaltiCallback = async (req, res) => {
  try {
    const { pidx } = req.query;
    const frontendUrl = "http://localhost:5173/cart/";
    const response = await axios.post(
      `${process.env.KHALTI_URL}/epayment/lookup/`,
      { pidx: pidx },
      {
        headers: {
          Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.redirect(
      `${frontendUrl}?status=${response.data.status}&transaction_id=${response.data.transaction_id}`
    );
  } catch (error) {
    res.send(error.response.data);
    console.log(error);
  }
};

module.exports = {
  khaltiPayment,
  khaltiCallback,
};