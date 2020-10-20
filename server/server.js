const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    next();
  });

app.get('/api/mail', (req, res) => {
    const msg = {
        to: process.env.PERSONAL_EMAIL,
        from: process.env.PERSONAL_EMAIL,
        cc: process.env.ALTERNATE_EMAIL,
        subject: req.query.name + " viewed your personal website",
        html: `<b>${ req.query.name }</b> with email <b>${ req.query.email }</b> viewed your personal website.<br />
                Remarks: ${ req.query.remarks }`,
    };
    sgMail.send(msg);
});

app.listen(port, () => console.log(`Listening on port ${port}`));