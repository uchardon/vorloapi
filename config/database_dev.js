module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'development') {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'mysql',
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'vorloapi'),
            username: env('DATABASE_USERNAME', 'root'),
            password: env('DATABASE_PASSWORD', ''),
            ssl: env.bool('DATABASE_SSL', false),
          },
          options: {}
        },
      },
    }
  } else {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'mysql',
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'vorloapi'),
            username: env('DATABASE_USERNAME', 'root'),
            password: env('DATABASE_PASSWORD', ''),
            ssl: env.bool('DATABASE_SSL', false),
          },
          options: {}
        },
      },
    }
  }
};
