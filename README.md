## User Authentication System

A backend implementation for user authentication, including user registration, login, email verification, and multi-factor authentication (MFA) using One-Time Passwords (OTP). The system utilizes various libraries and technologies to ensure secure user management and efficient request handling.

## Libraries Used
bcrypt: For password hashing and verification.

dotenv: For loading environment variables from a .env file.

body-parser: For parsing incoming request bodies.

#nodemailer: For sending emails (e.g., for email verification and password resets).

express-validator: For validating incoming data.

sequelize: ORM for database interaction.

mysql2: MySQL database driver.

express-rate-limit: To apply rate limiting to routes (e.g., login attempts).

otp-generator: For generating one-time passwords (OTP) for MFA.

winston: For logging system events to both the console and a log file.

Setup and Installation

1. Clone this repository using:
    git clone https://github.com/Ayan-Ejaz/User_Authentication_System
2. Navigate to directory using:
    cd User_Authentication_System
3. Run the project using:
     node server.js


## ENVIRONMENT FILE
Create a .env file in the root directory with the following environment variables:

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=password

DB_DIALECT=mysql

DB_NAME = User_Authentication_System

EMAIL = you@email.com

EMAIL_PASSWORD=yourpassword

# THE NODE MAILER FUNCTIONALTIY
In order to send emails using Node Mailer, You need to:
1. Sign in to your gmail account
2. Go to the Security Tab
3. Enable MFA
4. Go to App passwords
5. Include Mail
6. Google will provide you with a 16 character password
7. You need to enter that password in EMAIL_PASSWORD variable

# Features
Password Hashing: Utilizes bcrypt to securely hash passwords before storing them in the database.

Email Verification: Sends a verification email to users during registration.

OTP for Password Reset: Provides an OTP mechanism for securely resetting passwords.

Rate Limiting: Limits the number of requests to prevent brute force attacks, especially on login.

Logging: Uses Winston for logging user actions to events.log

# Security
Password Security: Passwords are hashed using bcrypt before storage.
Rate Limiting: Rate limiting is implemented to protect against brute-force login attempts.


Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request with your changes. Make sure to follow the code style and write tests for new features.

License
This project is licensed under the MIT License.
