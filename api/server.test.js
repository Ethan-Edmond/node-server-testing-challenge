const db = require('../data/dbConfig');

test('DB_ENV is set to testing', () => {
  expect(process.env.DB_ENV).toBe('testing');
});
