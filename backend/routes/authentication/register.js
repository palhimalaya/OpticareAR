const router = require("express").Router();
const { User, validate } = require("../../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  let body = req.body;
  try {
    if (!body.role) body = { ...body, role: "user" };
    const user = await User.findOne({ email: body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: { email: "User already registered." } });
    }
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    await new User({ ...body, password: hashedPassword }).save();
    newUser = await User.findOne({ email: body.email });

    res
      .status(201)
      .send({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
