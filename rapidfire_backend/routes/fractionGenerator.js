const wholeNumbers = Array.from({ length: 1000 }, (_, i) => (i + 1) * 30);
const numerators = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20];
const denominators = [2, 3, 4, 5, 6];

function generateFractionQuestion() {
  const numerators = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20];
  const denominators = [2, 3, 4, 5, 6];

  const numerator = numerators[Math.floor(Math.random() * numerators.length)];
  const denominator = denominators[Math.floor(Math.random() * denominators.length)];

  const whole = wholeNumbers[Math.floor(Math.random() * wholeNumbers.length)];

  const fractionValue = numerator / denominator;
  const answer = fractionValue * whole;

  const question = `What is ${numerator}/${denominator} of ${whole}?`;

  return {
    type: "fraction",
    question,
    answer
  };
}

module.exports = generateFractionQuestion;
