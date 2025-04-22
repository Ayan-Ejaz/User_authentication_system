const User = require('../model/User')
const OTP = require('../model/OTP')

const VerifyOTP = async (request, response) => {
    const {email, otp} = request.body;

    try {
        const OTPRecord = await OTP.findOne({
            where: {email},
            // order: [['createdAt', 'DESC']]
        })

        if (!OTPRecord) {
            return response.status(400).json({error: "OTP Not Found"});
        }

        if (new Date() > new Date(OTPRecord.Date)) {
            return response.status(400).json({error: "OTP Expired"})
        }

        if (OTPRecord.otp !== otp) {
            return response.status(400).json({error: "Invalid OTP"});
        }

        return response.status(200).json({success: "OTP Verified successfully!"});
    }

    catch (error) {
        return response.status(500).json({error: error.message})
    }
}

module.exports = VerifyOTP;