const {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require("../controllers/tasks");

const express = require("express");
const router = express.Router();

router.route("/").get(getAllTasks);
router.route("/").post(createTask);

router.route("/:id").get(getTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);

module.exports = router;
