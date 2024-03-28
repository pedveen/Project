import React,{useState} from 'react'
import useUser from '../context/UserContext'

function Login() {
    const {username,password,loginProfile} = useUser();
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    console.log("login.jsx")
    // const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        loginProfile(user,pass)
    }

  return (
    <>
        <h2>Login</h2>
        <input 
            type="text" 
            placeholder='username' 
            value={user}
            onChange={(e)=> setUser(e.target.value)}
        /> {"    "}
        <input 
            type="text" 
            placeholder='password' 
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
        /> {"    "}
        <button onClick={handleSubmit}>Submit</button>
    </>
    
  )
}

export default Login