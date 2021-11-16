import { Model } from "objection";
import db from "../db";

Model.knex(db);

export default class User extends Model {
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["username", "password"],
      properties: {
        id: { type: "integer" },
        username: { type: "string" },
        password: { type: "string" },
        createdAt: { type: "string", format: "date" },
      },
    };
  }
}
