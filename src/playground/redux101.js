import {
	createStore
} from 'redux';

const store = createStore((state = {
	count: 0
}, action) => {
	// redux actions definition
	switch (action.type) {
	case 'INCREMENT':
		const incrementBy = typeof(action.incrementBy) === 'number' ? action.incrementBy : 1;
		return {
			count: state.count + incrementBy
		};
	case 'DECREMENT':
		const decrementBy = typeof(action.decrementBy) === 'number' ? action.decrementBy : 1;
		return {
			count: state.count - decrementBy
        };
    case 'SET':
        return {
            count: action.count
        };
	case 'RESET':
		return {
			count: 0
		};
	default:
		return state;
	}
});

// Redux Subscribe

store.subscribe(() => {
	console.log(store.getState());
});

// Calling Redux Actions

store.dispatch({
	// action dispact method with additional keys
	type: 'INCREMENT',
	incrementBy: 4
});

store.dispatch({
	type: 'INCREMENT'
});

store.dispatch({
	// action dispact method with additional keys
	type: 'DECREMENT',
	decrementBy: 3
});

store.dispatch({
	type: 'DECREMENT'
});

store.dispatch({
	type: 'RESET'
});

store.dispatch({
	type: 'SET',
	count: 100
});