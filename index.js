const express = require('express')
const sgMail = require('@sendgrid/mail')

const app = express()

const domain="http://smartwasher.tk"

app.use(express.static('public'))


app.get('/', function(req,res){
    res.render('public/index')
})

app.post('/contact', function(req,res){

    res.redirect('/')
})

app.listen(process.env.PORT, function(){
    console.log('Server listening on port '+process.env.PORT)
})

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendContact = (name, email, phone, quantity, address) => {
    const msg = {
        to: 'jayandn1999@gmail.com',
        from: 'no-reply-Smart-Washer@smartwasher.tk',
        subject: `${name} - Booking - Phone: ${phone}`,
        html: `
        <center><a href="${domain}"><img src="" alt="" width="360"></a>
        <h1> Smart Washer </h1>
        
        </center>`
    }
    return sgMail.send(msg)
}