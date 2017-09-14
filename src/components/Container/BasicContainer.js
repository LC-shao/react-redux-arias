import React from 'react';

const BasicContainer = ({children, ...other}) => (
	<div
		{...other}
	>
		{children}
	</div>
);

export default BasicContainer;