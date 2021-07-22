const request = require('supertest');
const server = require('../api/server');

describe('server.js', () => {
  it('sends a 200 status on get / endpoint', async () => {
    const expectedStatus = 200;
    const response = await request(server).get('/');
    expect(response.status).toBe(expectedStatus);
  });
});
