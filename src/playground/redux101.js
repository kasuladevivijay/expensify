import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action)=> {
	// redux actions definition
	switch (action.type) {
	case 'INCREMENT':
		return {
			count: state.count + 1
		};
	case 'DECREMENT':
		return {
			count: state.count - 1
		};    
	default: 
		return state;
	}
});

// Calling Redux Actions

store.dispatch({
	type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
	type: 'DECREMENT'
});

console.log(store.getState());