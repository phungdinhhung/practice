const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
function initLibraries() {
   const app = express();
   app.use(cors());

   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   dotenv.config();
   return app;
}

module.exports = initLibraries;
