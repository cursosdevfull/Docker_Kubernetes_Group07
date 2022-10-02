const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/", express.static("./public"));

app.get("/healthcheck", (req, res) => res.send("That's ok"));

app.get("/api/config", (req, res) =>
  res.json({
    backend1:
      process.env.SERVICE_BACKEND1 || "http://localhost:19010/api/message",
  })
);

const PORT = process.env.PORT || 19000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
