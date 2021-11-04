import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
	const [data, setData] = useState(null);
	// const onClick = () => {
	// 	axios.get('https://jsonplaceholder.typicode.com/todos/1').then((r) => {
	// 		setData(r.data);
	// 	});
	// };

  // Async
  const onClick = async () => {
    try {
      const r = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setData(r.data);
    } catch (e) {
      console.log(e)
      
    }
  }
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
