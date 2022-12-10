const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://heyaman:Aman%40123@cluster0.79nwn9p.mongodb.net/?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

require("./userModel");
