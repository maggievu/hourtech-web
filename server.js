const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080
require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const path = require('path')

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// }

let server = app.listen(port, () => {
	console.log('Server ready', server.address().port);
});

const nodemailer = require('nodemailer')

app.post('/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
        <div>
        <p>Name: ${req.body.userName}</p>
        <p>Email: ${req.body.userEmail}</p>
        <p>Message: ${req.body.userMessage}</p>
        </div>
        `

		let transporter = nodemailer.createTransport({
			host: 'smtp.mailgun.org',
			port: 587,
			auth: {
				user: process.env.REACT_APP_USER,
				pass: process.env.REACT_APP_PASS
			}
		});

		let mailOptions = {
			from: req.body.userEmail,
			to: 'maggievu91@gmail.com',
			replyTo: req.body.userEmail,
			subject: 'Message submitted from hourtech.ca',
			text: req.body.userMessage,
			html: htmlEmail
		}

		transporter.sendMail(mailOptions, (error, success) => {
			if (err) {
				console.log('ERROR: ' + error);
				res.json({
					message: 'fail'
				});
			} else {
				console.log('SUCCESS: ' + JSON.stringify(success));
				res.json({
					message: 'success'
				});
			}
		});
	})
});