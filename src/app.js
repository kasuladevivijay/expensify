import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisbileExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// add expense
store.dispatch(addExpense({description: 'Water Bill', amount: 400}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 600}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisbileExpenses(state.expenses, state.filters)
console.log(JSON.stringify(visibleExpenses, '', 4));

const app = document.querySelector('#app');
ReactDOM.render(<AppRouter />, app);