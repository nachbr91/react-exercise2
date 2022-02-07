import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {
  const { items } = props

  const [filteredYear, setFilteredYear] = useState('2020')

  const saveFilteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveFilteredYear={saveFilteredYearHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </Card>
  )
}

export default Expenses
