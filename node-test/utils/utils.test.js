const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(15, 10);
    
    expect(res).toBe(25).toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    const res = utils.square(15);
    
    expect(res).toBe(225).toBeA('number');;
});

it('should include firstName and lastName with proper values', () => {
    const user = {};
    const result = utils.setName(user, 'Will ST');

    expect(result).toInclude({
        firstName: 'Will',
        lastName: 'ST',
    });
})
