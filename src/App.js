import React, {useState, useEffect} from 'react';

const url='https://www.boredapi.com/api/activity/'
console.log(url);
const App = () => {
const [activity,setActivity]=useState('')

  const newActivity= ()=>{
 fetch(url)
		.then((res) => res.json())
		.then(resJson=> setActivity(resJson.activity)) 
}
  
useEffect(() => {
  newActivity()
}, [])
  
  return (
    <div class="box">
      <h2>Activities to do if you are bored</h2>
      <p>{activity}</p>
      <button onClick={newActivity}>New Activity</button>
    </div>
  );
};

export default App;