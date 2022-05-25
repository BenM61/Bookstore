const config = {
  db: {
    DB_NAME: "BenMs-DB",
    BOOKS_COL_NAME: "Books-collection",
    ReceiptS_COL_NAME: "Receipts-collection-buggy",
    PAGE_SIZE: 20
  },
  server: {
    port: 7000
  }
}

module.exports = { config }