require('dotenv').config()
const fs = require('fs').promises;
const emailHandler = require('./emailHandler');
const mail = require('./mailConfig')



async function send() {
 const html = await fs.readFile('./promotional_no_notifications.html', 'utf-8');
 mail.sendMail(
  {
   from: process.env.EMAIL_FROM,
   to: ['t@t.com'],
   subject: 'Your weekly competitor updates',
   html,
  },
  emailHandler
 )
}

send()
