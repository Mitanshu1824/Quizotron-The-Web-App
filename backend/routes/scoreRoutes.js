const express = require("express");
const Score = require("../models/Score");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { userId, category, score, total } = req.body;

    const newScore = await Score.create({
      userId,
      category,
      score,
      total
    });

    res.json({ message: "Score saved successfully", success: true, newScore });
  } catch (err) {
    res.json({ message: "Failed to save score", error: err, success: false });
  }
});

module.exports = router;
