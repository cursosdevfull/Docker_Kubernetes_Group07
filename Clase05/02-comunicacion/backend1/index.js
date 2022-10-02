const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/healthcheck", (req, res) => res.send("That's ok"));

app.get("/api/message", async (req, res) => {
  const responseBackend2 = await axios.get(
    process.env.SERVICE_BACKEND2 || "http://localhost:19020/api/message"
  );

  res.json({
    msgBackend1: "Hello from backend1",
    msgBackend2: responseBackend2.data,
  });
});

const PORT = process.env.PORT || 19010;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
