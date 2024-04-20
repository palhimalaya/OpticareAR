const express = require('express');
const router = express.Router();
const { createNotification, getUserNotifications, markNotificationAsRead, deleteNotification } = require('../controllers/notificationController');

router.route('/').post(createNotification);
router.route('/:userId').get(getUserNotifications);
router.route('/:id').put(markNotificationAsRead).delete(deleteNotification);

module.exports = router;