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
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates: updates
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

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

// Action Generators
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text: text
});

// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date = undefined) => ({
	type: 'SET_START_DATE',
	date
});
// SET_END_DATE
const setEndDate = (date = undefined) => ({
	type: 'SET_END_DATE',
	date
});

// filterReducer
const filterReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
	switch(action.type){
	case 'SET_TEXT_FILTER':
		return {
			...state,
			text: action.text
		};
	case 'SORT_BY_AMOUNT':
		return {
			...state,
			sortBy: 'amount'
		};
	case 'SORT_BY_DATE':
		return {
			...state,
			sortBy: 'date'
		};
	case 'SET_START_DATE': 
		return {
			...state,
			startDate: action.date
		};
	case 'SET_END_DATE': 
		return {
			...state,
			endDate: action.date
		};
	default: 
		return state;
	}
};

// Get Visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if(sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		}else if (sortBy === 'amount'){
			return a.amount < b.amount ? 1 : -1;
		}else {
			return 0;
		}
	});
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
	const state = store.getState();
	const visibleStates = getVisibleExpenses(state.expenses, state.filters);
	console.log(JSON.stringify(visibleStates, '', 4));
	// console.log(store.getState());
});

// Dispatch Actions

const exp1 = store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: -211000}));
// const exp2 = store.dispatch(addExpense({ description: 'Library', amount: 500, createdAt: 1000}));
const exp3 = store.dispatch(addExpense({ description: 'Coffee', amount: 3000, createdAt: -900}));

// store.dispatch(removeExpense({ id: exp1.expense.id}));
// store.dispatch(editExpense(exp2.expense.id, { amount: 605}));

// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount()); // when called the sortBy should be set to 'amount'
// store.dispatch(sortByDate()); // when called the sortBy should be set to 'date'

// store.dispatch(setStartDate(900));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(800));
