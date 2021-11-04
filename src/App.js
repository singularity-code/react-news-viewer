import React, { useState } from 'react';
import axios from 'axios';
import keys from './config/api-key.json';

const App = () => {
	const [data, setData] = useState(null);
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=` + keys.news
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
			<div>
				<button onClick={onClick}>Request</button>
			</div>
			<div>
				{data && (
					<textarea
						rows={7}
						value={JSON.stringify(data, null, 2)}
						readOnly={true}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
