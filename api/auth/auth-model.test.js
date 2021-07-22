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
  it('responds with all users', async () => {
    const expected = [
      {id: 1, username: 'Ethan', password: 'changeMe'},
      {id: 2, username: 'Mike', password: 'changeMe'},
      {id: 3, username: 'Sri', password: 'changeMe'}
    ];
    expect(await Users.getAll()).toMatchObject(expected);
  });
});

describe('getById', () => {
  it('responds with the user with given id', async () => {
    const expected = {id: 1, username: 'Ethan', password: 'changeMe'};
    const actual = await Users.getById(1);
    expect(actual).toMatchObject(expected);
  });
});

describe('add', () => {
  it.todo('adds the supplied user to the users table');
  it.todo('responds with the added user');
});
