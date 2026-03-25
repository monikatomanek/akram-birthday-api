const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

const wisdomQuotes = [
  "If it works on the first try, be suspicious :P",
  "Recursion is easy once you understand recursion ;)",
  "Wishing you a birthday full of joy, rest, and good surprises.",
  "A great teacher makes difficult things feel possible.",
  "You've probably fixed more problems than you realise, and helped more people than you know.",
  "May this year bring good energy, clear thinking, and plenty of reasons to smile.",
  "A good teacher changes more lives than any app ever will.",
  "Wishing you clean code, good health, and a great day :)",
  "Today's main task is simple: celebrate, eat cake, repeat as needed."
];

const lifeDebugMessages = [
  "Today's best fix is rest, celebration, and a bit of cake.",
  "You've done enough debugging - today is for joy.",
  "Please allow yourself a peaceful day in birthday mode.",
  "Hydrate, celebrate, and enjoy the people who are glad you exist.",
  "No urgent fixes required. Just birthday energy and good moments."
];

const versionList = [
  "vPatience.10.0",
  "vWisdom.12.4",
  "vCalmUnderPressure.8.9",
  "vLegendaryTeacher.1.0"
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/quote", (req, res) => {
  res.json({
    quote: randomItem(wisdomQuotes),
    author: "Akram Birthday API"
  });
});

app.get("/cake", (req, res) => {
  res.json({
    cake: "optimised",
    flavour: "chocolate",
    status: "ready for production",
    testsPassed: true
  });
});

app.get("/age", (req, res) => {
  res.json({
    version: randomItem(versionList),
    releaseName: "Akram Birthday Edition",
    stable: true,
    notes: "Stable, respected, and still improving the world one student at a time."
  });
});

app.get("/debug-life", (req, res) => {
  res.json({
    message: randomItem(lifeDebugMessages),
    severity: "mild chaos",
    fixAvailable: true
  });
});

app.get("/status", (req, res) => {
  res.json({
    teacher: "Akram Mukasa",
    role: "Legendary Coding Teacher",
    coffeeLevel: "acceptable",
    patience: "surprisingly stable",
    birthdayMode: "enabled"
  });
});

app.get("/coffee", (req, res) => {
  res.json({
    cups: 3,
    refillNeeded: true,
    productivityBoost: "+35%"
  });
});

app.get("/students", (req, res) => {
  res.json({
    status: "compiling",
    missingSemicolons: 14,
    infiniteLoopsDetected: 2,
    mysteriousVariableNames: 5
  });
});

app.get("/deploy-birthday", (req, res) => {
  res.json({
    deployment: "successful",
    confettiLaunched: true,
    rollbackPossible: false,
    message: "Birthday deployed directly to production."
  });
});

app.listen(PORT, () => {
  console.log(`Birthday API is running at http://localhost:${PORT}`);
});