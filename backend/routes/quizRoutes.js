const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();

// Get questions by category
router.get("/:category", async (req, res) => {
  const { category } = req.params;

  try {
    const questions = await Quiz.find({ category });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a quiz
router.post("/add", async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.json({ message: "Quiz added", quiz });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
