/**
 *  Using combineReducers for handling multiple reducers & setting up various actions and 
 */

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions generators to be setup
// ADD_EXPENSE
const addExpense = (
	{   
		description = '', 
		note = '', 
		amount = 0, 
		createdAt = 0
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// EDIT_EXPENSE

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// expenseReducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action)=> {
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
	default: 
		return state;
	}
};

// filterReducer
const filterReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
	switch(action.type){
	
	default: 
		return state;
	}
};

// store creation
const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filters: filterReducer
	})
);

// retrieve by subscription

store.subscribe(()=>{
	console.log(JSON.stringify(store.getState(), '', 4));
});

// Dispatch Actions

const exp1 = store.dispatch(addExpense({ description: 'Rent', amount: 50}));
const exp2 = store.dispatch(addExpense({ description: 'Library', amount: 500}));
const exp3 = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

store.dispatch(removeExpense({ id: exp1.expense.id}));

