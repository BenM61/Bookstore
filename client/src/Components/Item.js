import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";


const Item = (props) => {
    const { selectedBooks, setSelectedBooks, setBad } = props

    const { state } = useLocation()
    const { book } = state
    const [amount, setAmount] = useState(1)
    const navigate = useNavigate()

    let x = 0
    const handleClick = (e) => {
        if (book.price === "0.00") {
            setBad(true)
        }
        book.amount = amount
        const filtered = selectedBooks.filter((listBook) => listBook._id !== book._id)
        setSelectedBooks(filtered.concat([book]))
    }
    const handleAmount = (c) => {
        setAmount((c === "+") ? amount + 1 : Math.max(1, amount - 1))
    }
    return (
        <div className="item page">
            <h1>{book.title}</h1>
            <img className="item-image" src={book.image} alt={book.title}></img>
            <br />
            <div className="change-amount">
                <button onClick={() => handleAmount("-")}>-</button>
                {amount}
                <button onClick={() => handleAmount("+")}>+</button>
            </div>
            <div className="item-price">${(amount * book.price).toFixed(2)}</div>
            <Link to="/books" >
                <button onClick={handleClick}>Add to cart</button>
            </Link>
        </div >
    );
}

export default Item;