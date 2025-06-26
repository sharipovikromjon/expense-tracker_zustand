import { useState } from "react";
import useStore from "../store/useExpenseStore";
import ExpensesList from "./ExpensesList";

const ExpenseTracker = () => {
  const { expenses, addExpense } = useStore();
  const [description, setDescription] = useState<string | "">("");
  const [amount, setAmount] = useState<number | "">("");

  // Add expense function
  const handleExpense = () => {
    if (description.trim() === "" || amount === "") return;

    addExpense({
      id: Date.now(),
      description,
      amount: Number(amount),
    });
    setDescription("");
    setAmount("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Expense Tracker
        </h1>
        {/* Add expense */}
        {/* description */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleExpense();
          }}
          className="space-y-4 mb-6"
        >
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description"
            type="text"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* amount */}
          <input
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            value={amount}
            placeholder="Amount in $"
            type="number"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* add button */}
          <button
            type="submit"
            className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Expense
          </button>
        </form>
        {/* List of expenses */}
        <ul className="space-y-4 mb-6 ">
          {expenses.map((item) => (
            <ExpensesList key={item.id} item={item} />
          ))}
        </ul>
        {/* Total amount */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-800">
            Total Expense: $
            {expenses
              .reduce((total, item) => total + item.amount, 0)
              .toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
