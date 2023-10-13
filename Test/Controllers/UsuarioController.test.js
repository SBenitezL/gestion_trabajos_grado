const supertest = require('supertest')
const app = require('../../build/index')
const { describe } = require('node:test')
const api = supertest(app)
const listUsers = [
    {
        _id: 1,
        _nombre: 'Juan',
        _login: 'Juan',
        _password: 'password',
        _rol: [{_id: 10, _nombre: 'testRol'}],
        _correo: 'juan@example.com',
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

describe('Users', async () => {
    test('Users are returned as json', async () => {
        await api
            .get('/api/usuarios')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
    test('All users are returned', async () => {
        const response = await api.get('/api/usuarios')
        expect(response.body).toHaveLength(1)
    })
    test('Juan user is created', async () => {
        const response1 = await api.get('/api/usuarios')
        expect(response1.body).toHaveLength(1)

        await api
            .post('/api/usuarios')
            .send(listUsers[0])
            //.expect(201)
            .expect('Content-Type', /application\/json/)

        const response2 = await api.get('/api/usuarios')

        // Check all fields of the created user
        const createdUser = response2.body.find(user => user.usr_nombre === listUsers[0].usr_nombre);
        expect(createdUser).toBeDefined();
        expect(createdUser.usr_codigo).toBe(listUsers[0].usr_codigo);
        expect(createdUser.usr_login).toBe(listUsers[0].usr_login);
        expect(createdUser.usr_password).toBe(listUsers[0].usr_password);
        expect(createdUser.rol).toEqual(listUsers[0].rol);
        expect(createdUser.usr_correo).toBe(listUsers[0].usr_correo);
    })
    test('Juan Ante user is created', async () => {
        const response1 = await api.get('/api/usuarios')
        expect(response1.body).toHaveLength(2)

        await api
            .post('/api/usuarios')
            .send(listUsers[1])
            //.expect(201)
            .expect('Content-Type', /application\/json/)

        const response2 = await api.get('/api/usuarios')

        // Check all fields of the created user
        const createdUser = response2.body.find(user => user.usr_nombre === listUsers[1].usr_nombre);
        expect(createdUser).toBeDefined();
        expect(createdUser.usr_codigo).toBe(listUsers[1].usr_codigo);
        expect(createdUser.usr_login).toBe(listUsers[1].usr_login);
        expect(createdUser.usr_password).toBe(listUsers[1].usr_password);
        expect(createdUser.rol).toEqual(listUsers[1].rol);
        expect(createdUser.usr_correo).toBe(listUsers[1].usr_correo);
    })
    test('Get user Juan by ID = 1', async () => {
        const userIdToRetrieve = listUsers[0]._id;
    
        const response = await api
            .get(`/api/usuarios/${userIdToRetrieve}`)
            //.expect(200)
    
        const retrievedUser = response.body;
    
        expect(retrievedUser._id).toBe(userIdToRetrieve.toString());
        expect(retrievedUser._nombre).toBe(listUsers[0]._nombre);
        expect(retrievedUser._login).toBe(listUsers[0]._login);
        expect(retrievedUser._password).toBe(listUsers[0]._password);
        expect(retrievedUser._rol._id).toBe(listUsers[0]._rol._id);
        expect(retrievedUser._rol._nombre).toBe(listUsers[0]._rol._nombre);
        expect(retrievedUser._correo).toBe(listUsers[0]._correo);
    })
    test('Get user Juan Ante by ID = 2', async () => {
        const userIdToRetrieve = listUsers[1]._id;
    
        const response = await api.get(`/api/usuarios/${userIdToRetrieve}`)
            //.expect(200)
    
        const retrievedUser = response.body;
    
        expect(retrievedUser._id).toBe(userIdToRetrieve.toString());
        expect(retrievedUser._nombre).toBe(listUsers[1]._nombre);
        expect(retrievedUser._login).toBe(listUsers[1]._login);
        expect(retrievedUser._password).toBe(listUsers[1]._password);
        expect(retrievedUser._rol._id).toBe(listUsers[1]._rol._id);
        expect(retrievedUser._rol._nombre).toBe(listUsers[1]._rol._nombre);
        expect(retrievedUser._correo).toBe(listUsers[1]._correo);
    })
    test('Update user Juan to Juan Colina by ID = 1', async () => {
        const userIdToUpdate = listUsers[0]._id;

        const response = await api
          .put(`/api/usuarios/${userIdToUpdate}`)
          .send(listUsers[2]);
        
        const response2 = await api.get(`/api/usuarios/${userIdToUpdate}`)
            //.expect(200)
    
        const updatedUser = response2.body;
    
        expect(updatedUser._id).toBe(userIdToUpdate.toString());
        expect(updatedUser._nombre).toBe(listUsers[2]._nombre);
        expect(updatedUser._login).toBe(listUsers[2]._login);
        expect(updatedUser._password).toBe(listUsers[2]._password);
        expect(updatedUser._rol._id).toBe(listUsers[2]._rol._id);
        expect(updatedUser._rol._nombre).toBe(listUsers[2]._rol._nombre);
        expect(updatedUser._correo).toBe(listUsers[2]._correo);
        
      })
    test('Delete user Juan by ID = 1', async () => {
        const response1 = await api.get('/api/usuarios');
        expect(response1.body).toHaveLength(3);

        const userIdToDelete = listUsers[0]._id;

        await api
            .delete(`/api/usuarios/${userIdToDelete}`)
            .expect(200)

        const response2 = await api.get('/api/usuarios');

        const deletedUser = response2.body.find(user => user.usr_codigo === userIdToDelete);
        expect(deletedUser).toBeUndefined();
    })
    test('Delete user Juan Ante by ID = 2', async () => {
        const response1 = await api.get('/api/usuarios');
        expect(response1.body).toHaveLength(2);

        const userIdToDelete = listUsers[1]._id;

        await api
            .delete(`/api/usuarios/${userIdToDelete}`)
            .expect(200)

        const response2 = await api.get('/api/usuarios');

        const deletedUser = response2.body.find(user => user.usr_codigo === userIdToDelete);
        expect(deletedUser).toBeUndefined();
    })
})