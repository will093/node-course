const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
    id: 9
}

const token = jwt.sign(data, '123abc');

console.log(`Token: ${token}`);

const decoded = jwt.verify(token , '123abc');

console.log('Decoded: ',decoded);