const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/healthcheck", (req, res) => res.send("That's ok"));

app.get("/api/message", (req, res) => res.send("Hola desde backend2"));

const PORT = process.env.PORT || 19020;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
