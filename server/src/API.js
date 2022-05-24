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

app.get('/recipts/:id', async (req, res) => {
  const recipt = await services.getRecipt(req.params.id)
  res.send(recipt)
})

app.post('/recipts/add', async (req, res) => {
  await services.addRecipt(req.body)
  res.send("success!")
})

app.get('/recipts', async (req, res) => {
  const recipts = await services.getRecipts()
  res.send(recipts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})