// methods here only called once, assuming existing empty collection
const { instanciateDB } = require("./connector")
const { config } = require("../config")

const generateFillerArray = (amount) => {
  const res = []
  for (let i = 0; i < amount; i++) {
    const filler = {
      title: `${i + 1}_filler...`,
      subtitle: '',
      authors: 'authors filler...',
      pages: '-1',
      year: '-1',
      rating: '-1',
      desc: 'description filler...',
      price: '0.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSuvG208vimcU54i3CzP9Z8SXQMrBzllMfBCbYaI82Zdbt22hHzNaeVJqHAec0K7E7kM&usqp=CAU',
    }
    res.push(filler)
  }
  return res
}

const initBooks = async () => {
  const book1 = {
    title: 'Securing DevOps',
    subtitle: 'Security in the Cloud',
    authors: 'Julien Vehent',
    pages: '384',
    year: '2018',
    rating: '5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue, libero eget malesuada condimentum, enim metus fringilla mi, ut hendrerit felis justo sed massa. Aliquam a tortor tortor. Praesent eget.',
    price: '39.65',
    image: 'https://itbook.store/img/books/9781617294136.png',
  }

  const book2 = {
    title: 'Javascript for complete morons',
    subtitle: '3rd edition',
    authors: 'Dan Madmach',
    pages: '84',
    year: '2022',
    rating: '4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo nibh, euismod eu erat a, bibendum congue felis. Donec finibus augue vitae consectetur congue. Nulla hendrerit urna ut porta pretium. Donec a tortor id massa gravida lobortis. Mauris vehicula sagittis ante. Quisque in blandit orci, eget vehicula ex. Aliquam erat volutpat. Integer vulputate eu tellus ac cursus. Aliquam feugiat auctor lectus a varius. Vestibulum ac metus ac ligula.',
    price: '42.69',
    image: 'https://i.ytimg.com/vi/e--K9kCz-v0/maxresdefault.jpg',
  }

  const book3 = {
    title: 'Master Chef',
    subtitle: 'Eat your way to the top',
    authors: 'Shimon mizrachi',
    pages: '15',
    year: '2015',
    rating: '2',
    desc: 'Lorem ipsum eu tellus ac cursus. Aliquam feugiat auctor lectus a varius. Vestibulum ac metus ac ligula.',
    price: '82.49',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLI16gjHS7KGckZN_7QLTe_RvhSsEJz6K5w&usqp=CAU',
  }

  let books = [book1, book2, book3, ...generateFillerArray(97)]
  const db = await instanciateDB()
  const collection = db.collection(config.db.BOOKS_COL_NAME)
  collection.insertMany(books)
}

const initRecipts = async () => {
  const recipt1 = {
    date: "18-3-2000",
    total: "320.24",
    description: [{
      _id: "6280e63ef720b7a1348ad3d2",
      quantity: "7",
      price: "39.65"
    }, {
      _id: "6280e63ef720b7a1348ad3d3",
      quantity: "1",
      price: "42.69"
    }]
  }

  const recipt2 = {
    date: "1-1-2001",
    total: "82.49",
    description: [{
      _id: "6280e63ef720b7a1348ad3d4",
      quantity: "1",
      price: "82.49"
    }]
  }

  let recipts = [recipt1, recipt2]

  const db = await instanciateDB()
  const collection = db.collection(config.db.RECIPTS_COL_NAME)
  collection.insertMany(recipts)
}

//initBooks()
//initRecipts()

