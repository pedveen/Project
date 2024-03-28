import React from 'react'
// import UserContext from '../context/UserContext'
import useUser from '../context/UserContext'

function Profile() {
    const {username} = useUser();
    console.log("profile.jsx")
  if (!username) return <h1>Please Login</h1>
    return <h1>Welcome {username} </h1>
}

export default Profile;