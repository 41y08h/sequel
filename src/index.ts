import "dotenv/config";
import db from "./db";

async function main() {
  const users = await db.select("*").from("users");
  console.table(users);
}

main();
