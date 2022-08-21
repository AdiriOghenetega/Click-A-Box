import { useState } from 'react'
import Box from "./box"
import boxes from "./boxes"
import './App.css'

function App() {
  const [box, setBox] = useState(boxes)
  
  function toggle(id){
    
    setBox(prevState =>{
      return prevState.map(obj=>{
        return obj.id=== id ? {...obj,on:!obj.on} : obj
        
      })
    })
  }
  const display = box.map(item => {
   return <Box 
     key={item.id}
     id={item.id}
     on = {item.on}
     handleClick={toggle}
   />
  })
  return (
    <div className="App">
      {display}
    </div>
  )
}

export default App
