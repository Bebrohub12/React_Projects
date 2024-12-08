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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function App() {
  const [value, setValue] = useState("");
  const [todoData, setTodoData] = useState([]);

  const addTodo = () => {
    if (value.trim()) {
      setTodoData([...todoData, value]);
      setValue("");
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
            <ul
              style={{
                listStyle: "none",
                color: "white",
                fontSize: "30px",
                fontWeight: "bold"
              }}>
              {todoData.map((item, ind) => (
                <li key={ind} style={{backgroundColor:"blue",margin:"8px"}}>
                  {item} {""}
                  <span><DeleteIcon/></span>
                  <span><EditIcon/></span>
                  
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  );
}

export default App;
