const request = require('supertest');
const server = require('../api/server');

describe('server.js', () => {
  describe('/ route', () => {
    it('sends a 200 status on get / endpoint', async () => { // kinda just a sanity check
      const expectedStatus = 200;
      const response = await request(server).get('/');
      expect(response.status).toBe(expectedStatus);
    });
  });
});
