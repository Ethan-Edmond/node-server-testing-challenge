const Users = require('./auth-model');
const db = require('../../data/dbConfig');

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

describe('getAll', () => {
  it.todo('responds with all users');
});

describe('getById', () => {
  it.todo('responds with the user with given id');
});

describe('add', () => {
  it.todo('adds the supplied user to the users table');
  it.todo('responds with the added user');
});
