const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 4000;

// Serve static files from React App
app.use(express.static(path.join(__dirname, "../leaderboard-frontend/build")));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile("../portfolio-site/build/index.html");
});

app.listen(port, () => console.log(`\nServer is runningon port ${port}`));
