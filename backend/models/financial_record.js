const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  review_comment: {
    type: Date,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_CODE, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().required().label("first_name"),
    last_name: Joi.string().required().label("last_name"),
    age: Joi.number().required().label("age"),
    phone_number: Joi.number().required().label("phone_number"),
    address: Joi.string().required().label("address"),
    email: Joi.string().required().label("email"),
    review_comment: Joi.date().required().label("review_comment"),
    rating: Joi.string().required().label("rating"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
