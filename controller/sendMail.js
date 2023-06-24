const nodemailer = require('nodemailer')

 

let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "050e1f3710b0fa",
        pass: "41f289ff064a7b"
    }
});




 const sendMail = async (req,password)=>{

    const {name,email} = req.body

    let info = await transport.sendMail({
        from: 'nomanabid3557@gmail.com',
        to: email,
        subject: "Welcome to our website",
        text: `Your Password for login is ${password}`
    })

    if(info){
        console.log("Email sent",info)
    }
 }

 module.exports = sendMail;