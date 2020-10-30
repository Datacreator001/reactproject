import React, { useState, useEffect } from 'react';
const url = 'https://www.boredapi.com/api/activity/';
const Activity = () => {
    
    const [activity, setActivity] = useState('');

		const newActivity = () => {
			fetch(url)
				.then((res) => res.json())
				.then((resJson) => setActivity(resJson.activity));
		};

		useEffect(() => {
			newActivity();
		}, []);
    
    
    
    return (
			<div>
				<p>{activity}</p>
				<button onClick={newActivity}>New Activity</button>
			</div>
		);
};

export default Activity;