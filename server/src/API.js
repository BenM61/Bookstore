const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000"
}))


const services = require("./services")
const { config } = require("./config")
const port = config.server.port

app.get('/books/:id', async (req, res) => {
  const book = await services.getBook(req.params.id)
  res.send(book)
})

app.get('/books/page/:pageNum', async (req, res) => {
  const books = await services.getBookPage(req.params.pageNum)
  res.send(books)
})

app.get('/Receipts/:id', async (req, res) => {
  const Receipt = await services.getReceipt(req.params.id)
  res.send(Receipt)
})

app.post('/Receipts/add', async (req, res) => {
  await services.addReceipt(req.body)
  res.send("success!")
})

app.get('/Receipts', async (req, res) => {
  const Receipts = await services.getReceipts()
  res.send(Receipts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})