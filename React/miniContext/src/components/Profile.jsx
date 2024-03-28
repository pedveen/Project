import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    console.log("profile")
  if (!user) return <h1>Please Login</h1>
    return <h1>Welcome {user.username} </h1>
}

export default Profile;