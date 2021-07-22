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
  
});

describe('/api/auth', () => {

  describe('[POST] /login', () => {

  });

  describe('[POST] /register', () => {

  });

  describe('[GET] /logout', () => {

  });

});

describe('/api/targets', () => {

  describe('[GET] /', () => {

  });

  describe('[GET] /:id', () => {

  });

  describe('[POST] /', () => {

  });

  describe('[PUT] /:id', () => {

  });

  describe('[DELETE] /:id', () => {

  });

});
