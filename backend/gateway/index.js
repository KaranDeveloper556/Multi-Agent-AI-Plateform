import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.get("", (req, res) => {
    res.json({ message: "Welcome to Gateway Server" });
})

app.listen(port, () => {
    console.log(`Gateway Server is running in port ${port}`);
})