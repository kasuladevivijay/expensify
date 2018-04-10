import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
	<div>
        This is Expense Dashboard page
	</div>
);

const AddExpense = () => (
	<div>
        This is AddExpense page
	</div>
);

const EditExpense = () => (
	<div>
        This is EditExpense page
	</div>
);

const Help = () => (
	<div>
        This is Help page
	</div>
);

const NotFound = () => (
	<div>
        404!
	</div>
);

const app = document.querySelector('#app');
const routes = (
	<Router>
		<Switch>
			<Route path='/' component={ExpenseDashboard} exact={true}/>
			<Route path='/create' component={AddExpense} />
			<Route path='/edit' component={EditExpense} />
			<Route path='/help' component={Help} />
			<Route component={NotFound}/>
		</Switch>
	</Router>
);

ReactDOM.render(routes, app);