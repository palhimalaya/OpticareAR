const User = require("../models/user");
const { generateToken } = require("../config/generateToken");

const registerUser = async(req, res) => {
  let body = req.body;
  if (!body.role) body = { ...body, role: "user" };

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
      res.status(400).json({ message: "Failed to create user" });
    }
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
        res.status(400).json({ message: "Failed to create user" });
      }
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
    res.status(401).json({ message: "Invalid email or password" });
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

const getUserById = async (req, res, next, id) => {
  try {
      const user = await User.findById(id)
      if (!user) {
          return res.status(400).json({ error: 'No User found' });
      }
      req.user = user;
      next();
  } catch (err) {
      return res.status(400).json({ error: err?.message || 'No User found' });
  }
};

// const isSignedIn = expressjwt({
//   secret: process.env.SECRET,
//   requestProperty: 'auth',
//   algorithms: ["HS256"]
// });

const isAuthenticated = (req, res, next) => {
  console.log(req.auth, req.user)
  let checker = req.auth && req.user && req.auth._id == req.user._id
  if (!checker) {
      return res.status(403).json({
          error: 'Authenticated Access Denied',
      });
  }
  next()
}

const isAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
      next();
  } else {
      return res.status(403).json({
          error: 'Admin Access Denied',
      });
  }
}

const getAllDoctors = async (req, res) => {
  const doctors = await User.find({ role: "doctor" });
  res.send(doctors);
};

const updateUsers = async (req, res) => {
  try {
      // update password, photo 
      const {userId} = req.params;
      const filename = req.file.filename;
      const url = `${req.protocol}://${req.get('host')}/images/${filename}`;
      const user = await User.findById(userId);
      if (!user) {
          return res.status(400).json({ error: 'User not found' });
      }
      user.image_url = url || user.image_url;
      const updatedUser = await user.save();
      res.json(updatedUser);
  } catch (err) {
      return res.status(400).json({ error: err?.message || 'User Update Failed' });
  }
}

module.exports = {
    registerUser,
    authUser,
    allUsers,
    isAuthenticated,
    isAdmin,
    getUserById,
    getAllDoctors,
    updateUsers
}