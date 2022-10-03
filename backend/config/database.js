const mongoose = require("mongoose");
const dotenv = require("dotenv");

// config
dotenv.config({ path: "./config.env" });

const connectDatabase = () => {
  mongoose
    .connect(`${process.env.DATABASE_URI}/${process.env.DATABASE_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    });
};

module.exports = connectDatabase;
