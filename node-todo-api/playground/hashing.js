const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123bc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// })

let hashedPassword = '$2a$10$f3gX4A6iSUzpx9n.9iyCCO/NitHxbgUu6COdcObHwpReZSUnIP8Zu';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});