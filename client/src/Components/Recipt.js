import { useState } from "react"
import { useNavigate } from "react-router"
import { postReceipt } from "./Api"

const Receipt = (props) => {
  const navigate = useNavigate()
  const [purchaseComplete, setPurchaseComplete] = useState(false)
  let purchase = props.purchase
  let total = 0
  const priceOfAll = () => {
    for (let i of purchase) {
      total += parseFloat(i.price) * i.amount
    }
    return total.toFixed(2);
  }

  const handle_purchase = async () => {
    const date = new Date()
    const curr_date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    const total = priceOfAll()
    let description = []
    purchase.map(({ _id, title, price, amount }) => {
      description.push({ _id, title, price, amount })
    })
    postReceipt(curr_date, total, description)
    setPurchaseComplete(true)
  }

  return (
    <div className="Receipt">
      <div className="Receipt-details">
        {purchase.map(({ _id, title, price, amount }) => {
          return (
            <div className="Receipt-item" key={_id}>
              <div className="rec-title">{title}: </div>
              <div className="rec-money">
                <div className="rec-price">${price} </div>
                <div className="rec-amount">x{amount}</div>
              </div>
            </div>
          )
        })}
        <div>
          ------------------------------------------------------------
          <br />The total price is: ${priceOfAll()}</div>


        {!purchaseComplete && <button onClick={handle_purchase}>Confirm</button>}
        {purchaseComplete && <div className="thank-you">
          Thank you!
          <button onClick={() => navigate("/")}>Home</button>
        </div>}
      </div>
    </div>
  );
}

export default Receipt;