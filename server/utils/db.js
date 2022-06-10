const mongoose = require("mongoose");
// require("dotenv").config();
const url =
  "mongodb+srv://idrisolas:Kendrick12@cluster0.ustoh.mongodb.net/dairy?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("database is now connected...!");
});

module.exports = mongoose;
