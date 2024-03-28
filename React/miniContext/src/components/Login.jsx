import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState("pankaj")
    const [password,setPassword] = useState("123")
    console.log("login")
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <>
        <h2>Login</h2>
        <input 
            type="text" 
            placeholder='username' 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
        />
        <input 
            type="text" 
            placeholder='password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}></button>
    </>
    
  )
}

export default Login