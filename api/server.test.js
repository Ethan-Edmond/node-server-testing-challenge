const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig');

test('DB_ENV is set to "testing"', () => {
  expect(process.env.DB_ENV).toBe('testing');
});

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe('[GET] /', () => {
  it.todo('resolves to 200');
  it.todo('responds with react app');
});

describe('/api/auth', () => {

  describe('[POST] /login', () => {
    it.todo('responds with 404 when username does not exist');
    it.todo('responds with 401 when password is invalid');
    it.todo('responds with 200 on good login');
    it.todo('Sets session in cookie on good login');
  });

  describe('[POST] /register', () => {
    it.todo('responds with 400 when username exists');
    it.todo('responds with 400 when password is invalid');
    it.todo('responds with 201 on good register');
    it.todo('adds user on good register');
    it.todo('responds with new user without password');
  });

  describe('[GET] /logout', () => {
    it.todo('responds with 403 when session is invalid');
    it.todo('responds with 200 on good logout');
    it.todo('responds with message');
  });

});

describe('/api/targets', () => {

  describe('[GET] /', () => {
    it.todo('is correctly restricted');
    it.todo('responds with 200 on good request');
    it.todo('responds with all targets related to user');
  });

  describe('[GET] /:id', () => {
    it.todo('is correctly restricted');
    it.todo('responds with 200 on good request');
    it.todo('responds with target related to user with given id');
  });

  describe('[POST] /', () => {
    it.todo('is correctly restricted');
    it.todo('adds new target');
    it.todo('adds new connection between target and user');
    it.todo('responds with 201 on good request');
    it.todo('responds with new target');
  });

  describe('[PUT] /:id', () => {
    it.todo('is correctly restricted');
    it.todo('updates target with given id');
    it.todo('responds with 200 on good request');
    it.todo('responds with target related to user with given id');
  });

  describe('[DELETE] /:id', () => {
    it.todo('is correctly restricted');
    it.todo('deletes connection between user and target with given id');
    it.todo('deletes target if target has no other connections');
    it.todo('responds with 200 on good request');
    it.todo('responds with deleted target');
  });

});
