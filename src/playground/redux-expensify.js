/**
 *  Using combineReducers for handling multiple reducers & setting up various actions and 
 */

import { createStore, combineReducers } from 'redux';

// Actions to be setup
// ADD_EXPENSE
// EDIT_EXPENSE
// REMOVE_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// expenseReducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action)=> {
	switch(action.type){
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

// retrieve

console.log(JSON.stringify(store.getState(), '', 4));
// console.log(store.getState());