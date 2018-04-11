import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
	<Router>
		<div>
			<Header></Header>
			<Switch>
				<Route path='/' component={ExpenseDashboard} exact={true}/>
				<Route path='/create' component={AddExpense} />
				<Route path='/edit/:expId' component={EditExpense} />
				<Route path='/help' component={Help} />
				<Route component={NotFound}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;