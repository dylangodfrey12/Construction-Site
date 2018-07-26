const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
var port = process.env.PORT;
var helmet = require('helmet');
require('dotenv').config();
// View engine setup
app.engine('html', exphbs());
app.set('view engine', 'html');

// Static folder
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());
app.get('/', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('index',);
});
app.get('/index.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('index',);
});
app.get('/windows.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('windows',);
});
app.get('/about.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('about',);
});

app.get('/doors.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('doors',);
});
app.get('/guide.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('guide',);
});
app.get('/restorations.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('restorations',);
});
app.get('/roofing.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('roofing',);
});
app.get('/siding.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('siding',);
});
app.get('/solar.html', (req, res) => {
    //Retrieve the template data from the HTML .
    
    
    res.render('solar',);
});
app.post('/send', (req, res)=> {
    console.log(req.body);
    const output = `
    <p>Quote Request for Martellini</p>
    <h3> Contact Details </h3>
    <ul>
        <li> Name: ${req.body.name}</li>
        <li> email: ${req.body.email}</li>
        <li> city: ${req.body.city}</li>
        <li> address: ${req.body.address}</li>
        <li> zip: ${req.body.zip}</li>
        <li> windows: ${req.body.inlinecheckbock1}</li>
        <li> doors: ${req.body.inlinecheckbock2}</li>
        <li> roofing: ${req.body.inlinecheckbock3}</li>
        <li> siding: ${req.body.inlinecheckbock4}</li>
        <li> residential: ${req.body.residential}</li>
        <li> commercial: ${req.body.commercial}</li>
        <li> message: ${req.body.message}</li>

    </ul>
    <h3> Message by Potential Client </h3>
    <p>${req.body.message}</p>
    `;
       // create reusable transporter object using the default SMTP transport
       let transporter = nodemailer.createTransport({
        service: 'gmail',
        
        auth: {
            user: 'dylangodfrey123@gmail.com', // generated ethereal user
            pass: 'fearmes12' // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Martellini Construction " <dylangodfrey123@gmail.com>', // sender address
        to: 'dylangodfrey12@gmail.com, joseph.damiba@martelliniconstruction.com,Sasha@martelliniconstruction.com,Aaron.kramer@martelliniconstruction.com', // list of receivers
        subject: ' Quote', // Subject line
        text: ' Quote', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('confirmation');
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

app.post('/email', (req, res)=> {
    console.log(req.body);
    const output = `
    <p>Quote Request for Martellini</p>
    <h3> Contact Details </h3>
    <ul>
        <li> Name: ${req.body.name}</li>
        <li> email: ${req.body.email}</li>
        <li> number: ${req.body.number}</li>
        <li> number: ${req.body.number}</li>
        <li> number: ${req.body.number}</li>
        <li> number: ${req.body.number}</li>
        <li> number: ${req.body.number}</li>
        <li> number: ${req.body.number}</li>
    </ul>
    <h3> Message by Potential Client: </h3>
    <p>${req.body.message}</p>
    `;
       // create reusable transporter object using the default SMTP transport
       let transporter = nodemailer.createTransport({
        service: 'gmail',
        
        auth: {
            user: 'dylangodfrey123@gmail.com', // generated ethereal user
            pass: 'fearmes12' // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Martellini Construction" <dylangodfrey123@gmail.com>', // sender address
        to: 'dylangodfrey123@gmail.com, joseph.damiba@martelliniconstruction.com,Sasha@martelliniconstruction.com,Aaron.kramer@martelliniconstruction.com', // list of receivers joseph.damiba@martelliniconstruction.com,Sasha@martelliniconstruction.com,Aaron.kramer@martelliniconstruction.com
        subject: 'Quote Request', // Subject line
        text: 'View Details', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('confirmation');
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});


app.listen(port || 5000, function(){
    console.log(`running on port 5000`);
});
   