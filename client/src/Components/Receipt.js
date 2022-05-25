import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { postReceipt } from "./Api"

const Receipt = (props) => {
  const navigate = useNavigate()
  const [purchaseComplete, setPurchaseComplete] = useState(false)
  const { selectedBooks, setSelectedBooks } = props

  let total

  const priceOfAll = () => {
    total = 0
    for (let i of selectedBooks) {
      total += parseFloat(i.price) * i.amount
    }
    return total.toFixed(2);
  }

  const isValidPurchase = () => {
    return selectedBooks.length > 0
  }

  const handle_purchase = async () => {
    const date = new Date()
    const curr_date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    const total = priceOfAll()
    let description = []
    selectedBooks.map(({ _id, title, price, amount }) => {
      description.push({ _id, title, price, amount })
    })
    postReceipt(curr_date, total, description)
    setPurchaseComplete(true)
  }

  const removeItem = (_id) => {
    setSelectedBooks((currBooks) =>
      currBooks.filter((book) => book._id !== _id)
    )
  }

  return (
    <div className="receipt page">
      <div className="receipt-preview">
        {selectedBooks.map(({ _id, title, price, amount }) => {
          return (
            <div className="receipt-item" key={_id}>
              <div className="receipt-details">
                <div className="rec-title">{title}: </div>
                <div className="rec-money">
                  <div className="rec-price">${price}</div>
                  <div className="rec-amount">x{amount}</div>
                </div>
              </div>
              <button disabled={purchaseComplete} onClick={() => { removeItem(_id) }} className="cancel-item"></button>
            </div>)
        })}
        <div className="total-price">
          <br />The total price is: ${priceOfAll()}
        </div>
        <br />

        {!purchaseComplete && !isValidPurchase()
          && <button className="confirm" disabled onClick={handle_purchase}>
            Confirm</button>}
        {!purchaseComplete && isValidPurchase()
          && <button className="confirm" onClick={handle_purchase}>Confirm</button>}
        {
          purchaseComplete && <div className="thank-you">
            Thank you!
            <button onClick={() => {
              setSelectedBooks([])
              navigate("/")
            }}>Home</button>
          </div>
        }
      </div>
    </div>
  );
}

export default Receipt;