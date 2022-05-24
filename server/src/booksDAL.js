const { ObjectId } = require('mongodb')

const { config } = require("./config")
const { instanciateDB } = require("./database/connector")

const getBooksCollection = async () => {
  const db = await instanciateDB()
  return db.collection(config.db.BOOKS_COL_NAME)
}

const getBookPage = async (pageNum) => {
  const n = config.db.PAGE_SIZE
  const booksCollection = await getBooksCollection()
  const res = await booksCollection.find({}).skip(n * pageNum).limit(n).toArray()
  return res
}

const getSingleBook = async (id) => {
  const booksCollection = await getBooksCollection()
  const res = await booksCollection.findOne({ _id: ObjectId(id) })
  return res
}

module.exports = { getBookPage, getSingleBook }