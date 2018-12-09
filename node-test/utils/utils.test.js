const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(15, 10);
    
    if (res !== 25) {
        throw new Error('Expected 25 but got ' + res);
    }
});

it('should square a number', () => {
    const res = utils.square(15);
    
    if (res !== 225) {
        throw new Error('Expected 225 but got ' + res);
    }
});