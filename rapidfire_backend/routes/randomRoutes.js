// routes/randomRoutes.js
const express = require("express");
const router  = express.Router();

// import each generator
const generatePercentageQuestion = require("./percentageGenerator");
const generateFractionQuestion = require("./fractionGenerator");
// …add more as you create them…

// 2)put them in an array
const generators = [
  generatePercentageQuestion, generateFractionQuestion,
  // …etc…
];

// define the random dispatcher route
router.get('/generate-random-question', (req, res) => {
  const fn = generators[Math.floor(Math.random() * generators.length)];
  const qa = fn();   // { type, question, answer }
  res.json(qa);
});

module.exports = router;
