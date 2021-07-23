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

  it('resolves to 201', async () => {
    const res = await request(server)
          .post('/api/outreach')
          .send({
            name: 'Brit',
            linkedin: 'britslinkedin'
          });
    expect(res.status).toBe(201);
  });

  it('returns added outreach target', async () => {
    const res = await request(server)
          .post('/api/outreach')
          .send({
            name: 'Brit',
            linkedin: 'britslinkedin'
          });
    expect(res.body).toMatchObject({
      name: 'Brit',
      linkedin: 'britslinkedin'
    });
  });
});

describe('[DELETE] /api/outreach/:id', () => {
  it('deletes from db', async () => {
    await request(server)
      .delete('/api/outreach/2');
    const after = await db('outreach');
    expect(after).toMatchObject([
      {id: 1, name: 'Gabe', linkedin: 'gabeslinkedin'},
      {id: 3, name: 'Dominick', linkedin: 'dominickslinkedin'},
    ]);
  });
  it.todo('resolves to 200');
  it.todo('returns deleted outreach target');
});
