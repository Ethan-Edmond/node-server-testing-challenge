// Update with your config settings.
const shared = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  pool : {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    }
  }
};

module.exports = {

  development: {
    ...shared,
    connection: {
      filename: './data/development.db3'
    }
  },

  testing: {
    ...shared,
    connection: {
      filename: './data/testing.db3'
    }
  }
};
