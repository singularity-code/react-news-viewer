import React, { useState } from 'react';
import axios from 'axios';
import keys from './config/api-key.json';
import NewsList from './components/NewsList';

const App = () => {
	const [data, setData] = useState(null);
	const url =
		`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=` +
		keys.news;
	const url_apple =
		`https://newsapi.org/v2/top-headlines?country=kr&apiKey=` +
		keys.news;
	// const onClick = () => {
	// 	axios.get('https://jsonplaceholder.typicode.com/todos/1').then((r) => {
	// 		setData(r.data);
	// 	});
	// };

	// Async
	const onClick = async () => {
		try {
			const r = await axios.get(url);
			setData(r.data);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div>
			<NewsList url={url_apple}></NewsList>
		</div>
	);
};

export default App;
