const db = require('../data/dbConfig');
const request = require('supertest');
const server = require('./server');

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

describe('[POST] /api/outreach', () => {
  it('adds to db', async () => {
    await request(server)
      .post('/api/outreach')
      .send({
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
  it.todo('resolves to 201');
  it.todo('returns added outreach target');
});

describe('[DELETE] /api/outreach/:id', () => {
  it.todo('deletes from db');
  it.todo('resolves to 200');
  it.todo('returns deleted outreach target');
});
