const { ObjectId } = require('mongodb')

const { config } = require("./config")
const { instanciateDB } = require("./database/connector")

const getReciptsCollection = async () => {
  const db = await instanciateDB()
  return db.collection(config.db.RECIPTS_COL_NAME)
}

const getAllRecipts = async () => {
  const reciptsCollection = await getReciptsCollection()
  const res = await reciptsCollection.find({}).toArray()
  return res
}

const getSingleRecipt = async (id) => {
  const reciptsCollection = await getReciptsCollection()
  const res = await reciptsCollection.findOne({ _id: ObjectId(id) })
  return res
}

const addRecipt = async (recipt) => {
  const reciptsCollection = await getReciptsCollection()
  await reciptsCollection.insertOne(recipt)
  return
}

module.exports = { getAllRecipts, getSingleRecipt, addRecipt }