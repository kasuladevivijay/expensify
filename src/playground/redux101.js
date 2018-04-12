import {
	createStore
} from 'redux';

// Action generators - functions that return action objects

// const incrementCount = (payload = {}) => {
// 	return {
// 		type: 'INCREMENT',
// 		incrementBy: typeof(payload.incrementBy) === 'number' ? payload.incrementBy : 1
// 	};
// };

// Destructuring the above function
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy: decrementBy
});

const setCount = ({ count } = {}) => ({
	type: 'SET',
	count: count
});

const reset = () => ({
    type: 'RESET',
    count: 0
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action - never change the values directly

const countReducer = (state = {count: 0}, action) => {
	// redux actions definition
	switch (action.type) {
	case 'INCREMENT':
		return {
			count: state.count + action.incrementBy
		};
	case 'DECREMENT':
		return {
			count: state.count - action.decrementBy
		};
	case 'SET':
		return {
			count: action.count
		};
	case 'RESET':
		return {
			count: action.count
		};
	default:
		return state;
	}
};

const store = createStore(countReducer);

// Redux Subscribe

store.subscribe(() => {
	console.log(store.getState());
});

// Calling Redux Actions

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch(decrementCount());

store.dispatch(reset());

store.dispatch(setCount({count: 102}));