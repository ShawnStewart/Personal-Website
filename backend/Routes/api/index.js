const router = require("express").Router();
const nodemailer = require("nodemailer");

router.get("/test", (req, res) => res.json({ msg: "api test" }));

router.post("/contact/send-message", (req, res) => {
  const output = `
    <p><b>From:</b> ${req.body.name} &lt;${req.body.email}&gt;</p>
    <p><b>Location:</b> ${req.body.location}</p>
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
    subject: req.body.subject,
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

module.exports = router;
