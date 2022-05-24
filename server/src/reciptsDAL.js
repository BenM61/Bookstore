const { ObjectId } = require('mongodb')

const { config } = require("./config")
const { instanciateDB } = require("./database/connector")

const getReceiptsCollection = async () => {
  const db = await instanciateDB()
  return db.collection(config.db.ReceiptS_COL_NAME)
}

const getAllReceipts = async () => {
  const ReceiptsCollection = await getReceiptsCollection()
  const res = await ReceiptsCollection.find({}).toArray()
  return res
}

const getSingleReceipt = async (id) => {
  const ReceiptsCollection = await getReceiptsCollection()
  const res = await ReceiptsCollection.findOne({ _id: ObjectId(id) })
  return res
}

const addReceipt = async (Receipt) => {
  const ReceiptsCollection = await getReceiptsCollection()
  await ReceiptsCollection.insertOne(Receipt)
  return
}

module.exports = { getAllReceipts, getSingleReceipt, addReceipt }