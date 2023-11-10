const supertest = require('supertest')
const app = require('../../build/index')
const { describe } = require('node:test')
const api = supertest(app)
const testUsers = [
    {
        _id: 0,
        _nombre: 'prueba',
        _login: 'user',
        _password: 'password',
        _rol: [{_id: 10, _nombre: 'testRol'}],
        _correo: 'user@test.com'
    }
]
const listUsers = [
    {
        _id: 1,
        _nombre: 'Juan',
        _login: 'Juan',
        _password: 'password',
        _rol: [{_id: 10, _nombre: 'testRol'}],
        _correo: 'juan@example.com'
    },
    {
        _id: 2,
        _nombre: 'Juan Ante',
        _login: 'juanantec',
        _password: 'password',
        _rol: [{_id: 10, _nombre: 'testRol'}],
        _correo: 'juanantec@example.com'
    },
    {
        _id: 1,
        _nombre: 'Juan Colina',
        _login: 'juancolina',
        _password: 'password',
        _rol: [{_id: 10, _nombre: 'testRol'}],
        _correo: 'juancolina@example.com'
    }
]
let contUsers = testUsers.length;

describe('Users', async () => {
    test('Users are returned as json', async () => {
        await api
            .get('/api/usuarios')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
    test('Test user is returned', async () => {
        const response = await api.get('/api/usuarios')
            .expect(200)
            .expect('Content-Type', /application\/json/)
        //expect(response.body).toHaveLength(contUsers)

        const listedUser = response.body.find(user => user._id === testUsers[0]._id.toString());
        expect(listedUser).toBeDefined();
        expect(listedUser._id).toBe(testUsers[0]._id.toString());
        expect(listedUser._login).toBe(testUsers[0]._login);
        expect(listedUser._password).toBe(testUsers[0]._password);
        expect(listedUser._rol[0]._id).toBe(testUsers[0]._rol[0]._id.toString());
        expect(listedUser._rol[0]._nombre).toBe(testUsers[0]._rol[0]._nombre);
        expect(listedUser._correo).toBe(testUsers[0]._correo);
    })
    test('Juan user is created', async () => {
        const before = await api.get('/api/usuarios')
            .expect(200)
            .expect('Content-Type', /application\/json/)
        //expect(before.body).toHaveLength(contUsers)

        await api
            .post('/api/usuarios')
            .send(listUsers[0])
            .expect(201)
            .expect('Content-Type', /application\/json/)
        contUsers ++;

        const response = await api.get('/api/usuarios')
        //expect(response.body).toHaveLength(contUsers)

        const createdUser = response.body.find(user => user._id === listUsers[0]._id.toString());
        expect(createdUser).toBeDefined();
        expect(createdUser._id).toBe(listUsers[0]._id.toString());
        expect(createdUser._login).toBe(listUsers[0]._login);
        expect(createdUser._password).toBe(listUsers[0]._password);
        expect(createdUser._rol[0]._id).toBe(listUsers[0]._rol[0]._id.toString());
        expect(createdUser._rol[0]._nombre).toBe(listUsers[0]._rol[0]._nombre);
        expect(createdUser._correo).toBe(listUsers[0]._correo);
    })
    test('Juan user is already created', async () => {
        const before = await api.get('/api/usuarios')
            .expect(200)
            .expect('Content-Type', /application\/json/)
        //expect(before.body).toHaveLength(contUsers)

        await api
            .post('/api/usuarios')
            .send(listUsers[0])
            .expect(401)
            .expect('Content-Type', /application\/json/)

        const response = await api.get('/api/usuarios')
        //expect(response.body).toHaveLength(contUsers)
    })
    test('Juan Ante user is created', async () => {
        const before = await api.get('/api/usuarios')
            .expect(200)
            .expect('Content-Type', /application\/json/)
        //expect(before.body).toHaveLength(contUsers)

        await api
            .post('/api/usuarios')
            .send(listUsers[1])
            .expect(201)
            .expect('Content-Type', /application\/json/)
        contUsers ++;

        const response = await api.get('/api/usuarios')
        //expect(response.body).toHaveLength(contUsers)

        const createdUser = response.body.find(user => user._id === listUsers[1]._id.toString());
        expect(createdUser).toBeDefined();
        expect(createdUser._id).toBe(listUsers[1]._id.toString());
        expect(createdUser._login).toBe(listUsers[1]._login);
        expect(createdUser._password).toBe(listUsers[1]._password);
        expect(createdUser._rol[0]._id).toBe(listUsers[1]._rol[0]._id.toString());
        expect(createdUser._rol[0]._nombre).toBe(listUsers[1]._rol[0]._nombre);
        expect(createdUser._correo).toBe(listUsers[1]._correo);
    })
    test('Get user Juan by ID = 1', async () => {
        const userIdToRetrieve = listUsers[0]._id;
        const response = await api
            .get(`/api/usuarios/${userIdToRetrieve}`)
            .expect(200)
    
        const retrievedUser = response.body;
    
        expect(retrievedUser._id).toBe(userIdToRetrieve.toString());
        expect(retrievedUser._nombre).toBe(listUsers[0]._nombre);
        expect(retrievedUser._login).toBe(listUsers[0]._login);
        expect(retrievedUser._password).toBe(listUsers[0]._password);
        expect(retrievedUser._rol[0]._id).toBe(listUsers[0]._rol[0]._id.toString());
        expect(retrievedUser._rol[0]._nombre).toBe(listUsers[0]._rol[0]._nombre);
        expect(retrievedUser._correo).toBe(listUsers[0]._correo);
    })
    test('Get user Juan Ante by ID = 2', async () => {
        const userIdToRetrieve = listUsers[1]._id;
        const response = await api
            .get(`/api/usuarios/${userIdToRetrieve}`)
            .expect(200)
    
        const retrievedUser = response.body;
    
        expect(retrievedUser._id).toBe(userIdToRetrieve.toString());
        expect(retrievedUser._nombre).toBe(listUsers[1]._nombre);
        expect(retrievedUser._login).toBe(listUsers[1]._login);
        expect(retrievedUser._password).toBe(listUsers[1]._password);
        expect(retrievedUser._rol[0]._id).toBe(listUsers[1]._rol[0]._id.toString());
        expect(retrievedUser._rol[0]._nombre).toBe(listUsers[1]._rol[0]._nombre);
        expect(retrievedUser._correo).toBe(listUsers[1]._correo);
    })
    test('Get user nonexistent by ID = 99', async () => {
        const userIdToRetrieve = 99;
        await api
            .get(`/api/usuarios/${userIdToRetrieve}`)
            .expect(401)
    })
    test('Update user Juan to Juan Colina by ID = 1', async () => {
        const userIdToUpdate = listUsers[0]._id;

        await api
            .put(`/api/usuarios/${userIdToUpdate}`)
            .send(listUsers[2])
            .expect(200)
        
        const response = await api.get(`/api/usuarios/${userIdToUpdate}`)
            .expect(200)
    
        const updatedUser = response.body;
    
        expect(updatedUser._id).toBe(userIdToUpdate.toString());
        expect(updatedUser._nombre).toBe(listUsers[2]._nombre);
        expect(updatedUser._login).toBe(listUsers[2]._login);
        expect(updatedUser._password).toBe(listUsers[2]._password);
        expect(updatedUser._rol[0]._id).toBe(listUsers[2]._rol[0]._id.toString());
        expect(updatedUser._rol[0]._nombre).toBe(listUsers[2]._rol[0]._nombre);
        expect(updatedUser._correo).toBe(listUsers[2]._correo);
        
    })
    test('Update user nonexistent to Juan by ID = 99', async () => {
        const userIdToUpdate = 99;

        await api
            .put(`/api/usuarios/${userIdToUpdate}`)
            .send(listUsers[2])
            .expect(401)
        
        await api.get(`/api/usuarios/${userIdToUpdate}`)
            .expect(401)
    })
    test('Delete user Juan by ID = 1', async () => {
        const before = await api.get('/api/usuarios');
        //expect(before.body).toHaveLength(contUsers);

        const userIdToDelete = listUsers[0]._id;

        await api
            .delete(`/api/usuarios/${userIdToDelete}`)
            .expect(200)
        contUsers --;

        const response = await api.get('/api/usuarios');
        //expect(response.body).toHaveLength(contUsers);

        const deletedUser = response.body.find(user => user._id === userIdToDelete);
        expect(deletedUser).toBeUndefined();
    })
    test('Delete user Juan Ante by ID = 2', async () => {
        const before = await api.get('/api/usuarios');
        //expect(before.body).toHaveLength(contUsers);

        const userIdToDelete = listUsers[1]._id;

        await api
            .delete(`/api/usuarios/${userIdToDelete}`)
            .expect(200)
        contUsers --;

        const response = await api.get('/api/usuarios');
        //expect(response.body).toHaveLength(contUsers);

        const deletedUser = response.body.find(user => user._id === userIdToDelete);
        expect(deletedUser).toBeUndefined();
    })
    test('Delete user nonexistent by ID = 99', async () => {
        const before = await api.get('/api/usuarios');
        //expect(before.body).toHaveLength(contUsers);

        const userIdToDelete = 99;

        await api
            .delete(`/api/usuarios/${userIdToDelete}`)
            .expect(401)

        const response = await api.get('/api/usuarios');
        //expect(response.body).toHaveLength(contUsers);
    })
})