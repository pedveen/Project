import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#222");

  return (
    <>
      <div className='container-fluid' style={{backgroundColor: color}}>name</div>
      <div className='container bg-dark'>
        <button className='btn btn-primary' onClick={() => setColor("#f00")}>red</button>
        <button className='btn btn-secondary' onClick={() => setColor("#0f0")}>green</button>
        <button className='btn btn-dark' onClick={() => setColor("#00f")}>blue</button>
        <button className='btn btn-light' onClick={() => setColor("#000")}>white</button>
      </div>
    </>
  )
}

export default App
