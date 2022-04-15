const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Get Goals" });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ message: "Set Goals" });
// });

// router.put("/:id", (req, res) => {
//   res.status(200).json({ message: `Update goal ${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({ message: `Delete goal ${req.params.id}` });
// });

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);
