const nodemailer = require('nodemailer')

// transporter object with smtp server details
let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAIL_TRAP_USER,
        pass: process.env.MAIL_TRAP_PASS
    }
});


// function to send email
const sendMail = async (req, password) => {
    const {email} = req.body
    // Destructuring email from req.body

    // info object with transporter details
    let info = await transport.sendMail({from: 'nomanabid3557@gmail.com', to: email, subject: "Manage Cars Website", text: `Your Password for login is ${password}`})

    // check if email is sent
    if (info) {
        console.log("Email sent", info)
    }
}

module.exports = sendMail;
