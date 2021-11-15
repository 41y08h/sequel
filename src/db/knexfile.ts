import { Knex } from "knex";

const config: Knex.Config = {
  client: "postgresql",
  connection: { uri: process.env.DATABASE_URL, ssl: false },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "migrations",
  },
};

export default config;
