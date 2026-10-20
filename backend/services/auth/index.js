import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Auth Server" });
});

app.listen(port, () => {
    console.log(`Auth Server in running in port ${port}`);
    connectdb();
});