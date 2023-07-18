require("./Database/Connection");
require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

  app.listen(PORT, () => {
    console.log(`Server listening on : http://localhost:${PORT}`);
  });