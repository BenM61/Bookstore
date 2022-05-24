import ItemPreview from "./ItemPreview";
import { getBookPage } from "./Api"

import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid"

const ItemList = () => {
   const [books, setBooks] = useState([]);
   const [isLoading, setIsLoading] = useState(true)

   const getAllbooks = async () => {
      let i = 0
      let res = []
      let data = []
      do {
         const temp = await getBookPage(i++)
         data = temp.data
         res = res.concat(data)
      }
      while (data.length > 0)
      return res
   }

   useEffect(() => {
      async function getBooks() {
         const res = await getAllbooks()
         return res
      }
      getBooks().then((res) => { setBooks(res) })
      setIsLoading(false)
   }, [])

   return (
      <div className="itemList">
         {isLoading && <div>Loading...</div>}
         <div className="item-list-content" >
            <Grid container spacing={0}>
               {books.map((book, index) => {
                  return (<Grid item xs={3} key={index}>
                     <ItemPreview book={book} id={book._id}></ItemPreview>
                  </Grid>)
               })}
            </Grid>
         </div>
      </div >
   );
}

export default ItemList;