const booksDAL = require("./booksDAL")
const reciptsDAL = require("./reciptsDAL")

const getBookPage = async (pageNum) => {
  const res = await booksDAL.getBookPage(pageNum)
  return res
}

const getBook = async (id) => {
  const res = await booksDAL.getSingleBook(id)
  return res
}

const getRecipts = async () => {
  const res = await reciptsDAL.getAllRecipts()
  return res
}

const getRecipt = async (id) => {
  const res = await reciptsDAL.getSingleRecipt(id)
  return res
}

const addRecipt = async (recipt) => {
  await reciptsDAL.addRecipt(recipt)
  return
}

module.exports = { getBookPage, getBook, getRecipts, getRecipt, addRecipt }