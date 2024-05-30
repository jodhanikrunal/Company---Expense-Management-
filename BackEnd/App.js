require("./Database/Connection");
require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const express = require("express");
const path = require("path");

const logger = require("morgan");
var bodyParser = require('body-parser');
const { urlencoded } = require("express");

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: 'http://localhost:3000',
    credentials: true,
  }));
  
  // limit: "100mb"  
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true }));
app.use(express.json());


app.use(logger("dev"));

require("./Routes/AuthRoutes.js")(app);
require("./Routes/ProjectRoutes.js")(app);
// require("./Routes/getallprojects")(app);
require("./Routes/ExpenseRoute.js")(app);

app.listen(PORT, () => {
  console.log(`Server listening on : http://localhost:${PORT}`);
});