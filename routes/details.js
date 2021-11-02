var express = require("express");
var router = express.Router();

// /details/create
router.post("/create", (req, res) => {
  const comment = req.body;

  console.log("got details post", comment);

  res.json({ status: "OK" });
});

module.exports = router;
