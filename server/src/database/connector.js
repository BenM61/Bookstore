// set up database connection
const { config } = require("../config")
const { MongoClient, ServerApiVersion } = require('mongodb')

const { DB_NAME } = config.db
const uri = `mongodb+srv://BenMgaming:12BEN123456@benms-cluster.qrqp7.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

let isConnected = false;
client.on('open', _ => { isConnected = true })
client.on('topologyClosed', _ => { isConnected = false })

const instanciateDB = async () => {
  if (!isConnected) {
    await client.connect()
    console.log("Connected to " + DB_NAME)
  }
  return client.db(DB_NAME)
}

module.exports = { instanciateDB }