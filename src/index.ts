import "dotenv/config";
import db from "./db";
import express from "express";
import createDebug from "debug";
import asyncHandler from "express-async-handler";

async function main() {
  const app = express();
  const debug = createDebug("app");

  app.use(express.json());

  app.get(
    "/users",
    asyncHandler(async (req, res) => {
      const users = await db.select("*").from("users");
      res.json(users);
    })
  );

  app.post(
    "/users",
    asyncHandler(async (req, res) => {
      const { username, password } = req.body;

      const [newUser] = await db("users")
        .insert({ username, password })
        .returning("*");
      res.status(201).json(newUser);
    })
  );

  app.patch(
    "/users/:id",
    asyncHandler(async (req, res) => {
      const userId = req.params.id;
      const { username, password } = req.body;
      const [updatedUser] = await db("users")
        .where({ id: userId })
        .update({ username, password, updatedAt: db.fn.now() })
        .returning("*");

      res.json(updatedUser);
    })
  );

  app.delete(
    "/users/:id",
    asyncHandler(async (req, res) => {
      const userId = req.params.id;
      await db("users").where({ id: userId }).del();

      res.sendStatus(200);
    })
  );

  app.use((err, req, res, next) => {
    console.log("error - ", err.message);
    res.status(400).json({
      error: {
        code: 400,
        message: "There was a problem",
      },
    });
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => debug(`started on ${PORT}`));
}

main();
