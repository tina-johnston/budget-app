
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const { description = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, amount, createdAt };

    dispatch(
      addExpense({
        ...expense,
      })
    );
  };
};

export const startRemoveExpense = id => {
  return (dispatch, getState) => {
    dispatch(removeExpense(id));
  };
};

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    dispatch(editExpense(id, updates));
  };
};

export const startSetExpense = expenses => {
  return (dispatch, getState) => {
    dispatch(setExpenses(expenses));
  };
};
