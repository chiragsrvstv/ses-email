function email(err, info) {
 console.log('Email status', info);
 if (err) {
   console.log('email status error', err);
 }
}

module.exports = email;
