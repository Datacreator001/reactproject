import React, { useState, useEffect } from 'react';
const url = 'https://www.boredapi.com/api/activity/';

const Type = () => {
    
    const[type,setType]=useState('')
    const typeInfo = () => {
			fetch(url)
				.then((res) => res.json())
				.then((data) => setType(data.type));
		};

		useEffect(() => {
			typeInfo();
		}, []);
    
    return (
        <div>
            <p>{type}</p>
            <button onClick={typeInfo}>Type Info</button>
        </div>
    );
};

export default Type;
