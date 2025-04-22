const bcrypt = require('bcrypt')
const User = require('../model/User')
const { logUserAction } = require('../../utils/logEvents')

const LoginUser = async (request, response) => {
   
    const {email, password} = request.body
    
    try{
        
        const user = await User.findOne({
            where: {email}
        })
    
        if (!user) {
            return response.status(404).json({error: "User doesn't exist"})
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid){
            return response.status(401).json({error: "Email or password Incorrect!"})
        }
        
        return response.status(200).json({success: "Login successful!"})
        logUserAction('Logged in', email)
    }
    catch(error) {
        return response.status(500).json({error: error.message})
    }

}

module.exports = LoginUser