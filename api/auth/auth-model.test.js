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

describe('getByUsername', () => {
  it('responds with the user with the given username', async () => {
    const expected = {id: 1, username: 'Ethan', password: 'changeMe'};
    const actual = await Users.getByUsername('Ethan');
    expect(actual).toMatchObject(expected);
  });
});

describe('add', () => {
  it('adds the supplied user to the users table', async () => {
    const before = await db('users');
    expect(before).toMatchObject([
      {id: 1, username: 'Ethan', password: 'changeMe'},
      {id: 2, username: 'Mike', password: 'changeMe'},
      {id: 3, username: 'Sri', password: 'changeMe'}
    ]);
    await Users.add({
      username: 'Bryan',
      password: '1234'
    });
    const after = await db('users');
    expect(after).toMatchObject([
      {id: 1, username: 'Ethan', password: 'changeMe'},
      {id: 2, username: 'Mike', password: 'changeMe'},
      {id: 3, username: 'Sri', password: 'changeMe'},
      {id: 4, username: 'Bryan', password: '1234'}
    ]);
  });

  it('responds with the added user', async () => {
    const expected = {
      id: 4,
      username: 'Bryan',
      password: '1234'
    };
    const actual = await Users.add({
      username: 'Bryan',
      password: '1234'
    });
    expect(actual).toMatchObject(expected);
  });
});
