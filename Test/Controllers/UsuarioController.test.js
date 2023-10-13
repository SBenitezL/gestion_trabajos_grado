const supertest = require('supertest')
const { app, server } = require('../../build/index')
const { beforeEach } = require('node:test')
const api = supertest(app)

beforeEach

test('users are returned as json', async () => {
    await api
        .get('/api/usuarios')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})