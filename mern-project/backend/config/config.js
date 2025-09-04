require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
        "host":  process.env.DB_HOST,
        "port" : process.env.DB_PORT,
    "dialect": "postgres",
    "logging": false,
    "dialectOptions": {
      "ssl": {
        "require": false,
        "rejectUnauthorized": false
      }
    }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
        "host":  process.env.DB_HOST,
    "dialect": "postgres",
    "logging": false,
    "dialectOptions": {
      "ssl": {
        "require": false,
        "rejectUnauthorized": false
      }
    }
  },
  "staging": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
        "host":  process.env.DB_HOST,
    "dialect": "postgres",
    "logging": false,
    "dialectOptions": {
      "ssl": {
        "require": false,
        "rejectUnauthorized": false
      }
    }
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
        "host":  process.env.DB_HOST,
    "dialect": "postgres",
    "logging": false,
    "dialectOptions": {
      "ssl": {
        "require": false,
        "rejectUnauthorized": false
      }
    }
  }
}
