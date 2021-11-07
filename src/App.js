import React, { useState, useCallback } from 'react';
import axios from 'axios';
import keys from './config/api-key.json';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
	//const [data, setData] = useState(null);
	const [category, setCategory] = useState('all');
	const onSelect = useCallback((category) => {
		setCategory(category);
	}, []);

	// Example
	// const onClick = () => {
	// 	axios.get('https://jsonplaceholder.typicode.com/todos/1').then((r) => {
	// 		setData(r.data);
	// 	});
	// };

	// Async Example
	// const onClick = async () => {
	// 	try {
	// 		const r = await axios.get(url);
	// 		setData(r.data);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	return (
		<div>
			<Categories category={category} onSelect={onSelect}></Categories>
			<NewsList category={category}></NewsList>
		</div>
	);
};

export default App;
