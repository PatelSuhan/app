import React, { useState } from 'react'

export default function Crude1() {

  const [input,setInput] = useState({
    name : "",
    pass : ""
  })

  return (
    <div>
      <form>
        <input type="text" placeholder='Enter Name' value={input.name} onChange={(e)=>setInput({...input, name : e.target.value})} />  
        <br /><br />
        <input type="password" placeholder='Enter Password' value={input.pass} onChange={(e)=>setInput({...input, pass : e.target.value})} />
        <br /><br />
        <button type='submit'>Submit</button>
      </form>     
    </div>
  )
}
