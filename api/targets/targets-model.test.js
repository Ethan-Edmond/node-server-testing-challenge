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
  it('responds with all targets related to user', async () => {
    const expected = [
      { id: 1, name: 'Gabe', linkedIn_profile: 'gabe-linkedin' },
      { id: 2, name: 'Warren', linkedIn_profile: 'warren-linkedin' }
    ];
    const actual = await Targets.getAll(1);
    expect(actual).toMatchObject(expected);
  });
});

describe('getById', () => {
  it('responds with the target with given id related to user', async () => {
    const expected = { id: 2, name: 'Warren', linkedIn_profile: 'warren-linkedin' };
    const actual = await Targets.getById(1,2);
    expect(actual).toMatchObject(expected);
  });
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
  it('deletes connection between user and target in users_targets table', async () => {
    const before = await db('users_targets');
    expect(before).toMatchObject([
      {id: 1, user_id: 1, target_id: 1},
      {id: 2, user_id: 1, target_id: 2},
      {id: 3, user_id: 2, target_id: 3}
    ]);
    await Targets.remove(1,2);
    const after = await db('users_targets');
    expect(after).toMatchObject([
      {id: 1, user_id: 1, target_id: 1},
      {id: 3, user_id: 2, target_id: 3}
    ]);
  });
  it('deletes target from targets table if target has no more connections', async () => {
    const before = await db('targets');
    expect(before).toMatchObject([
      { id: 1, name: 'Gabe', linkedIn_profile: 'gabe-linkedin'},
      { id: 2, name: 'Warren', linkedIn_profile: 'warren-linkedin'},
      { id: 3, name: 'Dominick', linkedIn_profile: 'dominick-linkedin'}
    ]);
    await Targets.remove(1,2);
    const after = await db('targets');
    expect(after).toMatchObject([
      { id: 1, name: 'Gabe', linkedIn_profile: 'gabe-linkedin'},
      { id: 3, name: 'Dominick', linkedIn_profile: 'dominick-linkedin'}
    ]);
  });
  it.todo('responds with the deleted target');
});
