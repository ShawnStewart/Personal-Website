const router = require("express").Router();
const nodemailer = require("nodemailer");
const { Client } = require("pg");

const validateMessage = require("../../Validation/sendMessage");

router.get("/test", (req, res) => res.json({ msg: "api test" }));

router.post("/contact/send-message", (req, res) => {
  const { errors, isValid } = validateMessage(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const output = `
    <p><b>From:</b> ${req.body.name} &lt;${req.body.email}&gt;</p>
    <p><b>Location:</b> ${
      req.body.location ? req.body.location : "Not provided"
    }</p>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.NM_USER,
      pass: process.env.NM_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    to: process.env.NM_RECEIVER,
    subject: req.body.subject ? req.body.subject : "Contact from Website",
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(400).json(error);
    }
    console.log("Message sent: %s", info.messageId);

    res.json({ success: true, info });
  });
});

router.get("/projects/sliding-puzzle/hiscores", (req, res) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });

  const query = "SELECT * FROM puzzle_hiscores ORDER BY time;";

  client.connect();

  return client
    .query(query)
    .then(results => {
      client.end();
      return res.json(results.rows);
    })
    .catch(err => {
      client.end();
      return res.status(400).json(err);
    });
});

router.post("/projects/sliding-puzzle/hiscores", (req, res) => {
  const { username, moves, time } = req.body;

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });

  const query = `INSERT INTO puzzle_hiscores (username, moves, time) VALUES ('${username}', ${moves}, ${time});`;

  client.connect();

  return client
    .query(query)
    .then(results => {
      client.end();
      return res.json(results.rows);
    })
    .catch(err => {
      client.end();
      return res.status(400).json(err);
    });
});

module.exports = router;
