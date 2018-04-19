/**
 *  Hiigher Order Component (HOC) - A component that renders another component
 *  Reuse code
 *  Render Hijacking
 *  Prop Manipulation
 *  Abstract State
 */
/*
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAdmin && <p>This is private info. Please donot share.</p> }
			<WrappedComponent {...props}/>
		</div>
	);
};

// require Authentication
const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{   props.isAuthenticated 
				? <WrappedComponent {...props} /> 
				: <p>Login to see the Info</p>
			}
		</div>
	);
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details'/>, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the details'/>, document.querySelector('#app'));
*/

console.log('combinantions');
// factorial
const factorial = (num) =>{
	if(num === 0 || num === 1){
		return 1;
	}else if(num < 0){
		return 'number should be positive';
	}else {
		return num * factorial(num-1);
	}
};

const nCr = (n, r) => {
	if( n > 0 && r > 0 && n >= r){
		return(
			(factorial(n)) / (factorial(r) * factorial(n-r))
		);
	}else {
		return 'n and r should be positive integers';
	}
};

console.log('nCr(7,7):', nCr(7,8));

