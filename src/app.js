import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
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
        404! <Link to='/'>Go to Home</Link>
	</div>
);

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
		<NavLink to='/create' activeClassName='is-active'>Add</NavLink>
		<NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
		<NavLink to='/help' activeClassName='is-active'>Help</NavLink>
	</header>
);

const app = document.querySelector('#app');
const routes = (
	<Router>
		<div>
			<Header></Header>
			<Switch>
				<Route path='/' component={ExpenseDashboard} exact={true}/>
				<Route path='/create' component={AddExpense} />
				<Route path='/edit' component={EditExpense} />
				<Route path='/help' component={Help} />
				<Route component={NotFound}/>
			</Switch>
		</div>
	</Router>
);

ReactDOM.render(routes, app);