import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  console.log("app")

  return (
    <UserContextProvider>
     <h1>hello</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
