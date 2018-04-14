// expenseReducer
const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action)=> {
	switch(action.type){
	case 'ADD_EXPENSE':
		// using ES6 spread operator
		return [
			...state,
			action.expense
		];
	case 'REMOVE_EXPENSE':
		return state.filter(({ id }) => {
			return id !== action.id;
		});
	case 'EDIT_EXPENSE':
		return state.map((expense) => {
			if(expense.id === action.id){
				return {
					// using object spread operator - babel
					...expense, 
					...action.updates
				};
			} else {
				return expense;
			}
		});
	default: 
		return state;
	}
};