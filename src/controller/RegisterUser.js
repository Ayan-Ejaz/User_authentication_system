const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const User = require('../model/User')
const { logUserAction } = require('../../utils/logEvents')

const RegisterUser = async (request,response) => {

    // Validating Email and Password
    const errors = validationResult(request)

    if (!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()})
    }


    const {email, password, confirmPassword} = request.body

    if (password != confirmPassword) {
        return response.status(400).json({msg: "Passwords donot match"})
    }

    // Checking password

    const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!pattern.test(password)){
        return response.status(400)
        .json({error: "Password must be atleast 8 characters, including 1 special and 1 Uppercase letter"})
    }
    try {

        // Checking for existing User
        const existingUser = await User.findOne({where: {email}})

        if (existingUser){
            return response.status(400).json({msg: "User already exists"})

        }
        // Hashing Password and Creating User
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            email,
            password: hashedPassword,
        });

        response.status(201).json({
            message: 'User Registered successfully!',
            user:{
                id: newUser.id,
                email: newUser.email
            }
        })

        logUserAction('User Registered', email);
    }
    catch(error) {
        response.status(500).json({error: error.message})
    }

}

module.exports = RegisterUser;



