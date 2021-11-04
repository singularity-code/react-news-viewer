import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
	const [data, setData] = useState(null);
	const onClick = () => {
		axios.get('https://jsonplaceholder.typicode.com/todos/1').then((r) => {
			setData(r.data);
		});
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
