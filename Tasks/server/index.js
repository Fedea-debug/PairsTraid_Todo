require("dotenv").config();
const express = require("express");
const sequelize = require("./db/db.js");
const route = require("./routes/index.js");
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api", route);

//
app.use(errorHandler);

async function startApp() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("SERVER IS WORKING ON PORT" + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
