'use strict';

const env = {
  DATABASE_NAME: process.env.DATABASE_NAME || 'SeniorDesignDatabase',
  DATABASE_HOST: process.env.DATABASE_HOST || 'seniordesignserver.database.windows.net',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'admin20',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'Gr0up20$',
  DATABASE_PORT: process.env.DATABASE_PORT || 1433,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mssql',
  DATABASE_INSTANCE: 'SQLExpress',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;