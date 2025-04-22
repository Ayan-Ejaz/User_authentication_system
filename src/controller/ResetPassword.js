const bcrypt = require('bcrypt')
const User = require('../model/User')
const OTP = require('../model/OTP')

const ResetPassword = async (request, response) => {
    const {email, newPassword} = request.body

    try {

        const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (!pattern.test(newPassword)){
            return response.status(400)
            .json({error: "Password must be atleast 8 characters, including 1 special and 1 Uppercase letter"})
        }


        const hashedPassword = await bcrypt.hash(newPassword,10)

        await User.update({password: newPassword}, {where : {email}})

        await OTP.destroy({where : {email}})

        return response.status(200).json({success: "Password reset successfully!"});
    }
    catch(error) {
        return response.status(500).json({error : error.message})
    }

}

module.exports = ResetPassword;