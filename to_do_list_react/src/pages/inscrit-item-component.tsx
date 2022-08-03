import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import { Navigate } from 'react-router-dom' ;

const Inscrit: FunctionComponent = () => {
    const [username,setusername]=useState("")
    const [password,setPassword]=useState("")
    const[redirect,setRedirect]=useState(false)
async function submit (e: SyntheticEvent){
    e.preventDefault()
    //send this value (username,password ) to the backend
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username,password})
    }
    await fetch("http://localhost:3001/auth/signup",requestOptions)
    setRedirect(true)
 }
    if(redirect){
        return <Navigate to="/Connect-item-component"/>
}
    return (
    
        <form className="app" onSubmit={submit}>
            <h1>inscription</h1>
          <div> 
            <label htmlFor="username">E-mail</label>
            <input type="username" name="username" id="username" required
                onChange={e=>setusername(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="pass">Password :</label>
            <input type="password" id="pass" name="password" required
                            onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>    </form>
        );
}

export default Inscrit;