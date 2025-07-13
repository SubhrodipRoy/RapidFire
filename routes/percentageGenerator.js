    // build your bases and percents array once
  const roundHundreds = Array.from({length: 1000}, (_, i) => (i + 1) * 100);
  const extras        = [120, 150, 180, 240, 360, 480, 540, 640, 720];
  const bases         = Array.from(new Set([...roundHundreds, ...extras]));
  const percents= [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100];

  // multiple templates
  const templates = [
    "What is {percent}% of {base}?",
    "Calculate {percent}% of {base}.",
    "How much is {percent}% of {base}?",
    "Find the value of {percent}% of {base}.",
    "If you take {percent}% of {base}, how much do you get?",
    "{percent}% of {base} is how much?",
    "If your salary increases by {percent}%, how much additional income would you receive based on a base amount of {base}?",
    "If you plan to leave a {percent}% tip on a bill totaling {base}, what is the exact tip amount?",
    "If taxation authorities impose a {percent}% tax on your income of {base}, how much would you be required to pay?",
    "With an annual interest rate of {percent}% on a principal of {base}, what amount would you earn in interest?",
    "Given a sample with a mass of {base} grams, what is the mass equivalent to {percent}% of it?",
    "If a certain chemical makes up {percent}% of a {base}-gram mixture, how many grams of the chemical are present?",
    "If a radioactive material decays at a rate of {percent}% from an initial count of {base} counts per minute, what is the quantity of decay?",
    "If the total cost of items in your shopping cart is {base} and a {percent}% discount is applied, how much is deducted from the total?",
    "If a food item contains {base} calories, what amount corresponds to {percent}% of its total caloric content?",
    "If you consume {percent}% of a {base}-ml beverage, how much have you consumed?",
    "If a recipe originally calls for {base} grams of sugar, what is the revised quantity after reducing it by {percent}%?",
    "If a jacket originally priced at {base} is offered at a {percent}% discount, what is the amount saved on the purchase?",
    "If customs apply a {percent}% duty on a purchase worth {base}, what is the total import duty payable?",
    "If a garment shrinks by {percent}% from its original length of {base} cm, what is the new length?",
    "If an individual loses {percent}% of their initial body weight of {base} kg, how many kilograms were lost?",
    "If you reduce your daily caloric intake from {base} by {percent}%, what is the new caloric intake?",
    "If a medical procedure requires {percent}% of a {base}-ml vial, how much should be extracted?",
    "Given a total of {base}, what quantity represents {percent}% of it?",
    "If a whole quantity of {base} is divided and you are to calculate a segment that is {percent}%, what is the size of that segment?",
    "What is the equivalent value of {percent}% of {base} in numerical terms?",
    "If a population consists of {base} individuals and {percent}% are assumed to possess a specific trait, how many individuals does this represent?",
    "If you are utilizing {percent}% of your total cognitive potential quantified as {base}, what is the actual utilized capacity?"
  ];

function generatePercentageQuestion() {

  // pick base and percent
  const base    = bases[Math.floor(Math.random() * bases.length)];
  const percent = percents[Math.floor(Math.random() * percents.length)];

 // pick a random template and frame the question
  const raw = templates[Math.floor(Math.random() * templates.length)];
  const question = raw
    .replace(/{base}/g,    base)
    .replace(/{percent}/g, percent);

// calculate the answer
  const answer   = (base * percent) / 100;

  return { type: "percentage", question, answer };
}

module.exports = generatePercentageQuestion;
