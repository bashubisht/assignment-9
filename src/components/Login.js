import { useState } from "react"
import "../styles/login.css";

export const Login = (props)=>{

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return ( <div className="landingDetails">
        <div className="userDetails">
            <label className="label">User Name</label>
            <input type= "text" name="username" onChange={handleUsernameChange} className='input' ></input>
            <br/>
        
            <label className="label">Password</label>
            <input type= "password" name="password" onChange={handlePasswordChange}className='input1' ></input>
        </div>
        
        <div className="logInBtn">
            <button onClick = {() => props.handleChange(username, password)} className="btn">Log In</button>
        </div>
    </div>
    )
}