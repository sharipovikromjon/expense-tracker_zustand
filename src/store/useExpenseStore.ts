import { create } from "zustand";

export interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseStore {
  expenses: Expense[] | [];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
}

const useStore = create<ExpenseStore>((set) => ({
  // state
  expenses: [],
  // action
  addExpense: (newExpense) =>
    set((state) => ({ expenses: [...state.expenses, newExpense] })),
  removeExpense: (id) =>
    set((state) => ({ expenses: state.expenses.filter((ex) => ex.id !== id) })),
}));

export default useStore;
