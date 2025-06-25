import useStore from "../store/useExpenseStore";
import { type Expense } from "../store/useExpenseStore";

const ExpensesList = ({ item }: { item: Expense }) => {
  const { removeExpense } = useStore();
  return (
    <li className="flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm">
      <span>
        {item.description}: ${item.amount.toFixed(2)}
      </span>
      <button
        onClick={() => removeExpense(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete
      </button>
    </li>
  );
};

export default ExpensesList;
