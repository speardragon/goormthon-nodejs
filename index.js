const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT) || 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const router = express.Router();

app.use("/api", router);

router.get("/", (req, res) => {
  res.json({ message: "Hello from NodeJS!" });
});

// router.get("/health/db", async (req, res) => {
//   try {
//     const conn = await pool.getConnection();
//     await conn.ping();
//     conn.release();
//     res.json({ status: "ok", message: "DB connection successful" });
//   } catch (error) {
//     res.status(500).json({ status: "error", message: error.message });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
