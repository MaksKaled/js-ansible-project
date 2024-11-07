const request = require('supertest');
const app = require('./app');

test('GET / should return hello,jenkins and ansible!', async () => { 
    const res = await request(app).get('/');
    expect(res.text).toBe('hello,jenkins and ansible!')
})