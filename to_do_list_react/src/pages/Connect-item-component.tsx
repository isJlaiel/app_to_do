import React, { FunctionComponent, useState } from "react";
import { Navigate } from "react-router-dom";
import Main from "../personal_space/main_page_tasks";
import "./connexion.css"
type Props = {
    
}

const Connect: FunctionComponent<Props> = (props: Props) => {
    const [errorMessages, setErrorMessages] = useState({name:"" , message:""});
    const [username,setusername]=useState("")
    const [password,setPassword]=useState("")  
    const[redirect,setRedirect]=useState(false)

    
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    async function submit (event: { preventDefault: () => void; }) {
      //Prevent page reload
      event.preventDefault();
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //cookie
        Credentials:"include",
        body: JSON.stringify({username,password})
    }
    await fetch("http://localhost:3001/auth/login",requestOptions)
   setRedirect(true)
}
    if (redirect)
    {
      return <Navigate to="/main_page_tasks" />;
    }
  return(
        <form onSubmit={submit}  className="app">
          <h1>se connecter</h1>
          <div >
            <label>Username </label>
            <input className="user" type="text" name="uname" required 
                            onChange={e=>setusername(e.target.value)}/>
          </div>
          <div >
            <label>Password </label><br/>
            <input className="pass" type="password" name="pass" required 
                            onChange={e=>setPassword(e.target.value)}/>

          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
  
    )
  }

export default Connect;