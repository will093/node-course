const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('server', () => {

    describe('/', () => {
        it('should return hello world response.', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello world!')
                .end(done);
        });
    })

    describe('/users', () => {
        it('should return my user', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Will',
                    age: 27,
                })
            })
            .end(done);
        })
    })
})