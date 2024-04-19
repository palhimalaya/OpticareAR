const User = require("../models/user");
const { generateToken } = require("../config/generateToken");

const createUserBasedOnRole = async (body) => {
  if(body.role === "doctor") {
    const { firstName, lastName, email, password, role, medicalLicense, specialization } = body;

    if (!firstName || !lastName || !email || !password || !medicalLicense || !specialization) {
      res.status(400);
      throw new Error("Please enter all required fields");
    }

    const userExits = await User.findOne({ email });
    if (userExits) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
      medicalLicense,
      specialization
    });
    return user;
  }else{
    const { firstName, lastName, email, password, role } = body;

      if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error("Please enter all required fields");
      }

      const userExits = await User.findOne({ email });
      if (userExits) {
        res.status(400);
        throw new Error("User already exists");
      }

      const user = await User.create({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        role,
      });

      return user;
  }
}
const registerUser =(req, res) => {
  let body = req.body;
  if (!body.role) body = { ...body, role: "user" };

  const user = createUserBasedOnRole(body)
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      password: user.password,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
};
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      password: user.password,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
};

const allUsers = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
};

module.exports = {
    registerUser,
    authUser,
    allUsers
}