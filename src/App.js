import React, { useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
<<<<<<< HEAD
	const [category, setCategory] = useState('all');
	const onSelect = useCallback((category) => setCategory(category), []);
=======
	const [data, setData] = useState(null);
	const url =
		`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=` +
		keys.news;
	const url_apple =
		`https://newsapi.org/v2/top-headlines?country=kr&apiKey=` +
		keys.news;
	// Async
	const onClick = async () => {
		try {
			const r = await axios.get(url);
			setData(r.data);
		} catch (e) {
			console.log(e);
		}
	};
>>>>>>> 773b386bcf5f1650e8ed1d01a5d62935dd998339
	return (
		<div>
			<Categories category={category} onSelect={onSelect}></Categories>
			<NewsList category={category}></NewsList>
		</div>
	);
};

export default App;
