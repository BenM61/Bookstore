import axios from 'axios'

const BaseUrl = "http://localhost:7000";

const getBookPage = async (i) => axios.get(`${BaseUrl}/books/page/${i}`)
const postRecipt = async (date, total, description) => axios.post(`${BaseUrl} / recipts / add`, { date, total, description })


export { getBookPage, postRecipt }
