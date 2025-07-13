// index.js
const express = require("express");
const app     = express();

// 1) Mount JSON body‑parsing (if you need POST later)
app.use(express.json());

// 2) Import and mount your randomRoutes
const randomRoutes = require("./routes/randomRoutes");
app.use("/", randomRoutes);

// 3) (Optional) your health‑check or home route
app.get("/", (req, res) => {
  res.send("RapidFire backend is alive, BOSSMAN!");
});

// 4) Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
