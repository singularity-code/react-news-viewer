import React, { useState, useCallback } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
	const [category, setCategory] = useState('all');
	const onSelect = useCallback((category) => setCategory(category), []);
	return (
		<div>
			<Categories category={category} onSelect={onSelect}></Categories>
			<NewsList category={category}></NewsList>
		</div>
	);
};

export default App;
