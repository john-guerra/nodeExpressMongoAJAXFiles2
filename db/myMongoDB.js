const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL || "mongodb://localhost:27017";

// console.log("url", url);

function MyMongoDB() {
  const myDB = {};

  async function getCollection(colName) {
    const client = new MongoClient(url);

    await client.connect();

    const db = client.db("nu_squid_games");
    return [client, db.collection(colName)];
  }

  myDB.getPlayers = async function () {
    let client, col;
    try {
      [client, col] = await getCollection("Players");
      const query = {};

      return await col.find(query).limit(20).sort({ _id: -1 }).toArray();
    } finally {
      await client.close();
    }
  };

  myDB.getPlayers = async function () {
    let client, col;
    try {
      [client, col] = await getCollection("Players");


      return await col.count();
    } finally {
      await client.close();
    }
  };

  myDB.createPlayer = async function (newPlayer) {
    let client, col;
    try {
      [client, col] = await getCollection("Players");

      return await col.insertOne(newPlayer);
    } finally {
      await client.close();
    }
  };

  return myDB;
}

module.exports = MyMongoDB();
