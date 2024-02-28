const express = require("express");
const workoutRoutes = require("./src/routes/workouts");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((error) => console.log(error));
