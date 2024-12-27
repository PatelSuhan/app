import { useState } from 'react'
import './App.css'

function App() {

  // const [name, setName] = useState() 
  // const [pass, setPass] = useState() 
  const [input, setInput] = useState ({
    name: "",
    pass: "",
  });
  

  const handelform= (e) => {
    e.prventDefault()
    console.log("Name : ",  + input.name)
    console.log("Pass : ",  + inputpass)
    setInput({
      name: "",
      pass: "",
    })
    e.taget.reset()
  }
  return (
    <>
      <form onSubmit={handelform}>
        <input type="text" placeholder='Enter Name' value={input.name} onChange={(e)=>setName({...input,name:e.target.value})} />
        <br /><br />
        <input typ="Password" placeholder='Enter Pasword' value={input.pass} onChange={(e)=>setPas({...input,pass:e.target.value})} />
        <br /><br />
        <button type='Submit'>Submit</button>
      </form>
    </>
  )
}

export default App