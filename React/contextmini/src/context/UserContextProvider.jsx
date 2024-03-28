import React from 'react'
import UserContext from './UserContext'

function UserContextProvider ({childern}) {
    const [user,setUser] = React.useState(null);
    console.log("")
  return (
    <UserContext.Provider value={{user,setUser}}>
        {childern}
    </UserContext.Provider>
  )
}

export default UserContextProvider