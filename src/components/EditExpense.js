import React from 'react';

const EditExpense = (props) => {
	console.log(props);
	return (
		<div>
		Editing the page with expense id: {props.match.params.expId}
		</div>
	);
};

export default EditExpense;