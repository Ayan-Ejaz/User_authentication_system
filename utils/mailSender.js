const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

const sendOTP = (email, OTP) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'OTP FOR PASSWORD RESET',
        text: `Your OTP is ${OTP}. It is valid for 5 minutes`
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending OTP')
        }
        else {
            console.log('OTP sent successfully!');
        }
    })
}


module.exports = sendOTP;
