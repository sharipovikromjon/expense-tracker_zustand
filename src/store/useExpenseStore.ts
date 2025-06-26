import { create } from "zustand";
import { combine } from "zustand/middleware";

export type Expense = {
  id: number;
  description: string;
  amount: number;
};

const useStore = create(
  combine(
    // state
    {
      expenses: JSON.parse(
        sessionStorage.getItem("expenses") || "[]"
      ) as Expense[],
    },
    // action
    (set) => ({
      addExpense: (newExpense: Expense) => {
        set((state) => {
          const updatedExpenses = [...state.expenses, newExpense];
          sessionStorage.setItem("expenses", JSON.stringify(updatedExpenses));
          return { expenses: updatedExpenses };
        });
      },
      removeExpense: (id: number) => {
        set((state) => {
          const updatedExpenses = state.expenses.filter(
            (expense) => expense.id !== id
          );
          sessionStorage.setItem("expenses", JSON.stringify(updatedExpenses));
          return { expenses: updatedExpenses };
        });
      },
    })
  )
);

export default useStore;
