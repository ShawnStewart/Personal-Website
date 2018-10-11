require("dotenv").config();
let http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 4000;

const routes = require("./Routes/api");

// Keep heroku awake
setInterval(() => {
  http.get("http://www.shawnstewart.me");
}, 1200000);

// Serve static files from React App
app.use(express.static(path.join(__dirname + "/../portfolio-site/build")));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const whitelist = ["localhost:3000"];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin !== -1)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.use(cors(corsOptions));

// Routes
app.get("/test", (req, res) => {
  res.json({ message: "test successful!" });
});
app.use("/api", routes);

// Serve frontend
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../portfolio-site/build/index.html"));
});

app.listen(port, () => console.log(`\nServer is running on port ${port}`));
