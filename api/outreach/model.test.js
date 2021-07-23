const db = require('../../data/dbConfig');
const Outreach = require('./model');

test('DB_ENV is set to testing', () => {
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

describe('add', () => {
  it('adds a outreach target to the database', async () => {
    await Outreach.add({
      name: 'Brit',
      linkedin: 'britslinkedin'
    });
    const after = await db('outreach');
    expect(after).toMatchObject([
      {id: 1, name: 'Gabe', linkedin: 'gabeslinkedin'},
      {id: 2, name: 'Warren', linkedin: 'warrenslinkedin'},
      {id: 3, name: 'Dominick', linkedin: 'dominickslinkedin'},
      {id: 4, name: 'Brit', linkedin: 'britslinkedin'}
    ]);
  });
  it('returns the added outreach target', async () => {
    const added = await Outreach.add({
      name: 'Brit',
      linkedin: 'britslinkedin'
    });
    expect(added).toMatchObject({
      id: 4,
      name: 'Brit',
      linkedin: 'britslinkedin'
    });
  });
});

describe('remove', () => {
  it('removes outreach target from database', async () => {
    await Outreach.remove(2);
    const after = await db('outreach');
    expect(after).toMatchObject([
      {id: 1, name: 'Gabe', linkedin: 'gabeslinkedin'},
      {id: 3, name: 'Dominick', linkedin: 'dominickslinkedin'}
    ]);
  });
  it('returns the deleted outreach target', async () => {
    const deleted = await Outreach.remove(2);
    expect(deleted).toMatchObject({
      id: 2, name: 'Warren', linkedin: 'warrenslinkedin'
    });
  });
});
