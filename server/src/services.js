const booksDAL = require("./booksDAL")
const ReceiptsDAL = require("./ReceiptsDAL")

const getBookPage = async (pageNum) => {
  const res = await booksDAL.getBookPage(pageNum)
  return res
}

const getBook = async (id) => {
  const res = await booksDAL.getSingleBook(id)
  return res
}

const getReceipts = async () => {
  const res = await ReceiptsDAL.getAllReceipts()
  return res
}

const getReceipt = async (id) => {
  const res = await ReceiptsDAL.getSingleReceipt(id)
  return res
}

const addReceipt = async (Receipt) => {
  await ReceiptsDAL.addReceipt(Receipt)
  return
}

module.exports = { getBookPage, getBook, getReceipts, getReceipt, addReceipt }