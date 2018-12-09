const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('app', () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    
    it('should call the saveUser with user object', () => {
        const email = 'test email';
        const password = 'test password';
        app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});