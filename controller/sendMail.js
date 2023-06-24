 const nodemailer = require('nodemailer')
const generator = require('generate-password');

 

let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "050e1f3710b0fa",
        pass: "41f289ff064a7b"
    }
});


let password = generator.generate({length: 10, numbers: true});

 const sendMail = async (req)=>{

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
    return password;
 }

 module.exports = sendMail;