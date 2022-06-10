const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MAIN_URL;

mongoose.connect(url).then(() => {
  console.log("database is now connected...!");
});

module.exports = mongoose;
