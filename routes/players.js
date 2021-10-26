var express = require("express");
var router = express.Router();

const playersStub = [
  { name: "John", age: 13 },
  { name: "Alexis", age: 13 },
  { name: "Paola", age: 23 },
];

router.get("/", function (req, res) {
  res.json(playersStub);
});

module.exports = router;
