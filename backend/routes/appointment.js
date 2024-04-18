const router = require("express").Router();
const { User, validate } = require("../../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  
});
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;