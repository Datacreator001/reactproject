import React from 'react';
import Activity from './Activity';
import Type from './Type';
import Modal from './Modal';


const App = () => {
 
 const modalRef=React.useRef()
 
  const openModal=()=>{
   modalRef.current.openModal()
  }
  return (
		<div class='box'>
			<h2>Activities to do if you are bored</h2>
			<Activity />
      <Modal ref={modalRef}>
        <h1>About this App</h1>
        <p>
         Click on New Activity button to generate a activity to do if you are bored!!!
        </p>
      </Modal>
      <Type/>
			<button onClick={openModal}> Open Modal</button>
		</div>
	);
};

export default App;


// some parts of my project I had got from  youtube!!
// such as the modal part!