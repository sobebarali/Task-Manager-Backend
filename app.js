const express = require("express");
const connectDatabase = require("./database/connectDatabase");

require("dotenv").config();

const app = express();

//middleware
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const startAPP = async () => {
  try {
    await connectDatabase();
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

startAPP();
