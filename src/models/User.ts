import { Model } from "objection";
import db from "../db";

Model.knex(db);

export default class User extends Model {
  static tableName = "users";
  static jsonSchema = {
    type: "object",
    required: ["username", "password"],
    properties: {
      id: { type: "integer" },
      username: { type: "string" },
      password: { type: "string" },
      createdAt: { type: "string" },
    },
  };

  id: number;
  username: string;
  password: string;
  createdAt: string;
}
