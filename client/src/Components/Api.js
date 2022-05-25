import axios from 'axios'

const BaseUrl = "http://localhost:7000";

const getBookPage = async (i) => axios.get(`${BaseUrl}/books/page/${i}`)
const postReceipt = async (date, total, description) => axios.post(`${BaseUrl}/Receipts/add`, { date, total, description })


export { getBookPage, postReceipt }
