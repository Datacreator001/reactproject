import React from 'react';
import Activity from './Activity';
import Type from './Type';
import Modal from './Modal';
// import './App.css'

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
        <h1>Modal Header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos eius, voluptatum alias provident eum reiciendis maiores a nihil beatae iste at cum eligendi, temporibus quia ipsa maxime vel? Tempore!
          Facilis, nisi nobis et dolores dolorem libero voluptas magni reiciendis deserunt sint dolorum perspiciatis quod consectetur, mollitia doloremque voluptatum at beatae eius ipsa cupiditate, nam tenetur quae? Repellat, in officia!
          Velit ab eius doloribus unde, fugiat sunt repellat molestiae! Blanditiis totam perspiciatis sint dicta dignissimos eaque corrupti repellat enim, laudantium nihil illum ratione! Facere vel ab error illo rerum delectus?
        </p>
      </Modal>
			<button onClick={openModal}> Open Modal</button>
		</div>
	);
};

export default App;
