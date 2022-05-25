import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Shop from "./Components/Shop";
import Item from "./Components/Item";
import Receipt from "./Components/Receipt";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [selectedBooks, setSelectedBooks] = useState([])
  const [currPageNum, setCurrPageNum] = useState(0)
  const [bad, setBad] = useState(false)
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar selectedBooks={selectedBooks} />
        <div className='content'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/books' element={<Shop bad={bad} currPageNum={currPageNum} setCurrPageNum={setCurrPageNum} />} />
            <Route path='/books/:id' element={<Item selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} setBad={setBad} />} />
            <Route path='/payment' element={<Receipt selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} />} />
            <Route path='/empty' element={<div>oops...</div>} />

          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
