const User = require('../model/User');
const sendOTP = require('../../utils/mailSender'); 
const OTP = require('../model/OTP')
const otpGenerator = require('otp-generator')

const ForgotPassword = async (request, response) => {
    const { email } = request.body;
    try {
        // Verifying if the user exists
        const user = await User.findOne({ where: { email } });
        console.log(user)
        if (!user) {
            return response.status(404).json({ error: "User doesn't exist" });
        }
        
        // Generating OTP
        const otp = otpGenerator.generate(6, {
            digits:false,
            upperCaseAlphabets: true,
            lowerCaseAlphabets: false
        })

    
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000)
        
        await OTP.create({
            email,
            otp,
            expiresAt
        })
    
        sendOTP(user.email, otp)
        
        return response.status(200).json({success: "OTP sent successfully to your Email!"});
        
    } catch (error) {
        return response.status(500).json({ error: error.message});
    }
};

module.exports = ForgotPassword;
