const mongoDb = require("mongodb");
const mongoClient = mongoDb.MongoClient;
const ObjectId = mongoDb.ObjectId;

let database;

async function getDataBase() {
  try {
    const client = await mongoClient.connect("mongodb://127.0.0.1:27017");
    database = client.db("Library");
    if (!database) {
      console.log("Not Conected");
    }
    console.log("db Conected");
    return database;
  } catch (error) {
    console.log(error, "error");
  }
}
module.exports = { getDataBase, ObjectId };
