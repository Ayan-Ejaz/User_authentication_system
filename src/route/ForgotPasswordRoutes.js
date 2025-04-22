const express = require('express');
const router = express.Router();

const ForgotPassword = require("../controller/ForgotPassword")
const VerifyOTP = require("../controller/VerifyOTP")
const ResetPassword = require("../controller/ResetPassword")

router.post('/forgot-password', ForgotPassword)
router.post('/verify-otp', VerifyOTP)
router.post('/reset-password', ResetPassword)

module.exports = router;