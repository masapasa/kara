import React from 'react';
import Animals from '../components/Animals';

const Home: React.FC = () => (
	<div className="p-3">
		<h1>Hello there</h1>
		<hr />
		<p>So this is like my main GitHub page or something</p>
		<p>Here's some stuff to check out :D</p>
		<Animals />
	</div>
);

export default Home;
