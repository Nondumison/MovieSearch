import React from 'react';
import {Link} from 'react-router-dom'

const AwesomeMovies = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '80vh'
	}}
	>
		<div className="title">
	<h1>Welcome to Awesome Movies</h1><br/>
	{""}
    <Link to='/Main'><button >Browse Movies</button></Link>
	</div>

	</div>
);
};

export default AwesomeMovies;