console.log("running players.js");

let express = require("express");
let router = express.Router();

const myDB = require("../db/myMongoDB.js");

// const playersStub = [
//   { name: "John", age: 13 },
//   { name: "Paola", age: 23 },
// ];

// /players should return a list of the players
router.get("/", async function (req, res) {
  // get players from the db

  const players = await myDB.getPlayers();
  const playersCount = await myDB.getPlayersCount();


  console.log("got players", players);

  res.json( { players: players, playersCount} );
});

router.post("/create", async (req, res) => {
  const body = req.body;
  console.log("create player", body);

  // if (! ["Male", "Female"].includes(body.gender)) {

  // }
  const newPlayer = {
    name: body.name,
    gender: body.gender
  };

  const mongoRes = await myDB.createPlayer(newPlayer);
  console.log("Player created", mongoRes);

  res.redirect("/");
});

module.exports = router;
