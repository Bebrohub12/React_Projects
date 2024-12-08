// import React, { useEffect, useState } from 'react'
// import "./App.css"

// function App() {

//   const [value, setValue] = useState("");

//   const TodoData = []

//   useEffect(()=>{
//     function addTodo() {
//       // console.log(value);
//       TodoData.push(value)
  
//     }
//   },[value])

//   return (

//     <div className='todo_container_page'>
//       <div className='todo_container'>
//         <h1>Todo App</h1>
//         <input
//           type="text"
//           placeholder='Enter your Task'
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           autoFocus
//         />
//         <button onClick={addTodo}>Add</button>

//         {
//           TodoData.length > 0 && (
//             TodoData.map((item, ind) => {
//               return (
//                 <ul>
//                   <li key={ind}>{item}</li>
//                 </ul>
//               )
//             })
//           )
//         }

//       </div>
//     </div>

//   )
// }

// export default App

import React, { useState } from 'react';
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todoData, setTodoData] = useState([]);

  // Function to add a new todo item
  const addTodo = () => {
    if (value.trim()) { // Check if the input is not empty
      setTodoData([...todoData, value]);
      setValue(""); // Clear the input field
    }
  };

  return (
    <div className='todo_container_page'>
      <div className='todo_container'>
        <h1>Todo App</h1>
        <input
          type="text"
          placeholder='Enter your Task'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        <button onClick={addTodo}>Add</button>

        {
          todoData.length > 0 && (
            <ul>
              {todoData.map((item, ind) => (
                <li key={ind}><h1>{item}</h1></li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  );
}

export default App;
