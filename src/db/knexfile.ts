import { Knex } from "knex";

const config: Knex.Config = {
  client: "postgresql",
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "migrations",
  },
};

export default config;
