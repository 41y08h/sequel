import Knex from "knex";

const knex = Knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
});

export default knex;
