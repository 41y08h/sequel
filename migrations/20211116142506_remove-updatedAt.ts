import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table("users", (table) => {
    table.dropColumn("updatedAt");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table("users", (table) => {
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}
