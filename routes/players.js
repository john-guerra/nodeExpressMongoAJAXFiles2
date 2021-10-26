console.log("running players.js");

let express = require("express");
let router = express.Router();

const playersStub = [
  { name: "John", age: 13 },
  { name: "Paola", age: 23 },
];

router.get("/", function (req, res) {
  res.json(playersStub);
});


router.post("/create", (req, res) => {

  const player = req.body;
  console.log("create player", player);

  playersStub.push({name: player.name});


  res.redirect("/");

});

module.exports = router;
