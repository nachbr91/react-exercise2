import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
