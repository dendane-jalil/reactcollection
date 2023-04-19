 import './App.css';
 import { useState, useEffect } from 'react';
 import Axios from 'axios';
 function App() {
const [createdActivity, setGeneratedActivity] = useState('');

  const fetchActivity =  ()=>{
    Axios.get('https://www.boredapi.com/api/activity/').then(
      (res) => { setGeneratedActivity(res.data.activity);}
    )

};
return(
    <div className='App'>
      <h2> Create an activity for the week end</h2>
      <button onClick={()=>fetchActivity()}>Create activity</button>
      <p>{createdActivity}</p>
    </div>
  )
  };
  
export default App;



// import "./App.css";
// import Axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [generatedExcuse, setGeneratedExcuse] = useState("");

//   const fetchExcuse = (excuse) => {
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
//       (res) => {
//         setGeneratedExcuse(res.data[0].excuse);
//       }
//     );
//   };

//   return (
//     <div className="App">
//       <h1> Generate An Excuse </h1>
//       <button onClick={() => fetchExcuse("party")}> Party</button>
//       <button onClick={() => fetchExcuse("family")}> Family</button>
//       <button onClick={() => fetchExcuse("office")}> Office </button>

//       <p> {generatedExcuse} </p>
//     </div>
//   );
// }

// export default App;

