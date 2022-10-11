const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// config
dotenv.config({ path: "./config/config.env" });

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(
    "Shutting down the server due to the Unhandled Promise Rejection"
  );

  server.close(() => {
    process.exit(1);
  });
});
