const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
// const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const path = require('path')

// if (process.env.NODE_ENV === 'production') {
// Serve any static files
app.use(express.static(path.join(__dirname, '/build')));
// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// }

// app.listen(process.env.PORT, '0.0.0.0', () => console.log(`Listening on port ${port}`))
// app.listen(process.env.PORT, '0.0.0.0', () => console.log(`Listening on port ${server.address().port}`))

let server = app.listen(8080, () => {
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
				user: "postmaster@sandbox3d5d1673a19941b6bad15f59c7585e15.mailgun.org",
				pass: "123456aS"
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