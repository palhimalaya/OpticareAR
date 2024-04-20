const express = require('express');
const { upload } = require('../config/fileConfig');
const { isAuthenticated } = require('../controllers/userController');
const {
  uploadFileResult,
} = require('../controllers/uploadfile_controller');
const { getUserById } = require('../controllers/userController');
const router = express.Router();

router.param('userId', getUserById)

//Post
router.post(
  '/:userId',
  isAuthenticated,
  upload.single('file'),
  uploadFileResult
);

module.exports = router;