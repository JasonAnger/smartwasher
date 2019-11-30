const express = require('express')
const sgMail = require('@sendgrid/mail')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const domain="http://smartwasher.tk"

app.use(express.static('public'))


app.get('/', function(req,res){
    res.render('public/index')
})

app.post('/contact', function(req,res){
    //sendContact(req.body.name, req.body.email, req.body.phone, req.body.quantity, req.body.address)
    console.log(req.body)
    res.redirect('/')
})

app.listen(process.env.PORT, function(){
    console.log('Server listening on port '+process.env.PORT)
})


//------- Mail
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendContact = (name, email, phone, quantity, address) => {
    const msg = {
        to: 'jayandn1999@gmail.com',
        from: 'no-reply-Smart-Washer@smartwasher.tk',
        subject: `${name} - Booking - Phone: ${phone}`,
        html: `
        <center><a href="${domain}/images/logo.png"><img src="" alt="" width="360"></a>
        <h1> Smart Washer </h1>
        <h2>Tên khách hàng  : ${name}</h2>
        <h2>Email           : ${email}</h2>
        <h2>Số điện thoại   : ${phone}</h2>
        <h2>Số lượng        : ${quantity}</h2>
        <h2>Địa chỉ         : ${address}</h2>
        </center>`
    }
    sgMail.send(msg)
}