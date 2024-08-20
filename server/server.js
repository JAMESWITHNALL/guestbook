import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How rude!");
});

app.get("/guestbook", async function (request, response) {
  const data = await db.query("SELECT * FROM guestbook");
  response.json(data.rows);
});

app.post("/guestbook", async function (request, response) {
  const { first_name, last_name, comments, topic } = request.body;

  try {
    const result = await db.query(
      "INSERT INTO guestbook (first_name, last_name, comments, topic) VALUES ($1, $2, $3, $4) RETURNING *",
      [first_name, last_name, comments, topic]
    );

    response.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to add entry to guestbook" });
  }
});

app.listen(8080, () => console.log("Server is running on port 8080"));
