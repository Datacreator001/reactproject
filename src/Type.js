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
        <>
            <p>{type}</p>
            <button onClick={typeInfo}>Type Info</button>
        </>
    );
};

export default Type;
