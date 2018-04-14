/**
 *  Hiigher Order Component (HOC) - A component that renders another component
 *  Reuse code
 *  Render Hijacking
 *  Prop Manipulation
 *  Abstract State
 */
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