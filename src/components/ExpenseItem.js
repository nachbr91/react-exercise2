import './ExpenseItem.css'

function ExpenseItem(props) {
  const { title, amount, date } = props

  return (
    <div className="expense-item">
      <div>{date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
