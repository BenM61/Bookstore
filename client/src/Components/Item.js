import { useState } from "react";
import { useLocation, Link } from "react-router-dom";


const Item = (props) => {
    const selectedBooks = props.selectedBooks

    const { state } = useLocation()
    const { book } = state
    const [amount, setAmount] = useState(1)

    const handleClick = (e) => {
        book.amount = amount
        const index = selectedBooks.findIndex(e =>
            e._id === book._id
        )
        if (index >= 0) { selectedBooks.splice(index, 1) }
        props.changeBooks([...selectedBooks, book])


    }
    const handleAmount = (c) => {
        setAmount((c === "+") ? amount + 1 : Math.max(1, amount - 1))
    }
    return (
        <div className="shop-item">
            <h1>{book.title}</h1>
            <img className="shop-item-image" src={book.image} alt={book.title}></img>
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