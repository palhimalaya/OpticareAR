const { handleUserSignup } = require("../controllers/userController");
const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/register").post(registerUser)
router.post("/login", authUser);

module.exports = router;