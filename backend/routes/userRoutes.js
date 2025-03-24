const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Đăng nhập người dùng
router.post('/login', userController.loginUser);

// Đăng ký người dùng
router.post('/register', userController.registerUser);

module.exports = router;
