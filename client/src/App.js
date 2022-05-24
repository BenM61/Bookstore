import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Shop from "./Components/Shop";
import Item from "./Components/Item";
import Receipt from "./Components/Receipt";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [selectedBooks, setSelectedBooks] = useState([])
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar selectedBooks={selectedBooks} />
        <div className='content'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/books' element={<Shop />} />
            <Route path='/books/:id' element={<Item selectedBooks={selectedBooks} changeBooks={setSelectedBooks} />} />
            <Route path='/payment' element={<Receipt purchase={selectedBooks} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
