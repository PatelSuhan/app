import React, { useEffect, useState } from 'react'

export default function Crude() {

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    const [arr, setArr] = useState([])

    const handelchang = (e) => {
        e.preventDefault();
        setArr([{name:name,pass:pass}])
        console.log(name,pass)
        setName("")
        setPass("")
    }

    useEffect(()=>{
        localStorage.setItem("Data", JSON.stringify(arr))
    },[arr])
    

    return (
        <div>
            <form onSubmit={handelchang}>
                <input type="text" 
                placeholder='Enter Name' 
                value={name} 
                onChange={(e) => setName({...name, name: e.target.value})} />
                <br /><br />
                <input type="password" 
                placeholder='Enter Password' 
                value={pass} 
                onChange={(e) => setPass({...pass, pass: e.target.value})} />
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
            <br /><br /><br />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((ele,i)=>(
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.pass}</td>
                                <td>
                                    <button>edit</button>
                                    <button>delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
