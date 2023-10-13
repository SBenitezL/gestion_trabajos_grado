const supertest = require('supertest')
const app = require('../../build/index')
const api = supertest(app)

test('users are returned as json', async () => {
    await api
        .get('/api/usuarios')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})