const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getOneWorkout,
  deleteWorkout,
  updateWorkout,
} = require("./workouts.controller");

const requireAuth = require('../../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth)

router.get("/", getWorkouts);

router.get("/:id", getOneWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.put("/:id", updateWorkout);

module.exports = router;
