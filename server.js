const express = require('express')
require('dotenv').config();
const authRoutes = require('./src/route/authRoutes')
const ForgotPasswordRoutes = require('./src/route/ForgotPasswordRoutes')
const rateLimit = require('express-rate-limit')
const app = express()
const PORT = 3000   

app.use(express.json())
// Implementing Rate limits 
const limiter = rateLimit({
    windowMs: 15*60*1000,
    limit: 5,
    message: 'Too many requests, please try again after 15 minutes'
})

app.use('/api/register', limiter)
app.use('/api/login',limiter)
app.use('/api',authRoutes, ForgotPasswordRoutes)
app.listen(PORT, () => {
    console.log('Server is listening on PORT 3000')
})
