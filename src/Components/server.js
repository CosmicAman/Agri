// server.js
const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Twilio credentials
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(bodyParser.json());

app.post('/send-sms', (req, res) => {
  const { message, to } = req.body;

  client.messages
    .create({
      body: message,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to: to
    })
    .then(message => res.status(200).send(`Message sent: ${message.sid}`))
    .catch(error => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
