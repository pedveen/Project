import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import useUser, { UserContextProvider } from './context/UserContext'
// import UserContextProvider from './context/UserContextProvider'

function App() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const loginProfile = (user,pass) => {
    setUsername(user)
    setPassword(pass)
  }

  console.log("app.jsx")

  return (
    <UserContextProvider value={{username,password,loginProfile}}>
     <h1>hello</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
