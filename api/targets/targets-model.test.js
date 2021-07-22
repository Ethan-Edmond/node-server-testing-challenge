const Targets = require('./targets-model');
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
  it.todo('responds with all targets related to user');
});

describe('getById', () => {
  it.todo('responds with the target with given id related to user');
});

describe('add', () => {
  it.todo('adds connection between target and user to the users_targets table');
  it.todo('adds the supplied target to the targets table if the target doesn\'t exist');
  it.todo('responds with the added target');
});

describe('update', () => {
  it.todo('updates target in targets table');
  it.todo('responds with the updated target');
});

describe('remove', () => {
  it.todo('deletes connection between user and target in users_targets table');
  it.todo('deletes target from targets tableif target has no more connections');
  it.todo('responds with the deleted target');
});
