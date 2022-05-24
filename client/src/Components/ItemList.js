import ItemPreview from "./ItemPreview";
import { getBookPage } from "./Api"

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@mui/material/Grid"

let currPageNum = 0

const ItemList = () => {

   const [books, setBooks] = useState([]);
   const [isLoading, setIsLoading] = useState(true)
   const [hasMore, setHasMore] = useState(true)

   const getNextPage = async () => {
      const temp = await getBookPage(currPageNum++)
      const { data } = temp
      setBooks(books.concat(data))
      if (data.length === 0) {
         setHasMore(false)
      }
      return
   }

   useEffect(() => {
      async function getInitialBooks() {
         const res = await getNextPage()
         return res
      }
      getInitialBooks().then((res) => { setIsLoading(false) })

      // restore currPageNum=0 on cleanup
      return () => { currPageNum = 0 }
   }, [])

   return (
      <div className="item-list">
         {isLoading && <div>Loading...</div>}
         <div className="item-list-content" >
            <InfiniteScroll
               dataLength={books.length}
               next={getNextPage}
               hasMore={hasMore}>
               <Grid container spacing={0}>
                  {books.map((book, index) => {
                     return (<Grid item xs={3} key={index}>
                        <ItemPreview book={book} id={book._id}></ItemPreview>
                     </Grid>)
                  })}
               </Grid>
            </InfiniteScroll>
         </div>
      </div >
   );
}

export default ItemList;