const mongoose = require("mongoose");
mongoose.set("debug", true);

const uri = "mongodb://db:27017/getdb";

const connect = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB server");
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error:`);
});

module.exports = { connect };
