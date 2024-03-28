import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/pedveen")
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))   
    // },[]);
  return (
    <div className='text-center flex flex-col justify-center items-center'>
        <div><img src={data.avatar_url} alt="profile" className=' rounded text-center' /></div>
        <div>Github followers: {data.followers} </div>
    </div>
  )
}

export const  githubInfo = async () => {
    const response = await fetch("https://api.github.com/users/pedveen");
    return response.json();
}
