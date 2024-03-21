import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [btntext, setbtntext] = useState("Copy");
  const [password, setPassword] = useState("");
  const [symbolallow, setsymbolallow] = useState(true);
  const [numberallow, setnumberallow] = useState(true);
  const [length, setlength] = useState(10);
  const passref = useRef(null);
  const generatepassword = useCallback(() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallow) str+="0123456789";
    if (symbolallow) str+="!@#$%^&*()_+{}[],.<>?/|";
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setbtntext("Copy");
    setPassword(pass);
  }, [length,symbolallow,numberallow,setPassword])
  const copypass = useCallback(() => {
    passref.current?.select();
    // passref.current?.setSelectionRange(0,4); //choose selection
    window.navigator.clipboard.writeText(password);
    setbtntext("Copied");
  },[password]);
  useEffect(()=> generatepassword(), [length,symbolallow,numberallow,generatepassword]);
  return (
    <>
      <div className='w-full my-10 flex justify-center text-white'>
        <div className='w-1/2 bg-gray-800 rounded-md p-10'>
          <h1 className='text-center text-2xl'>Password Generator</h1>
          <div className='flex rounded overflow-hidden my-5 h-10 border-green-500 border-4'>
            <input className='px-3 w-full text-black outline-none border-none' type="text" readOnly value={password} ref={passref}/>          
            <input type="button" value={btntext} onClick={copypass} className='bg-green-500 px-5 text-black'/>
          </div>
          <div className='flex justify-around'>
            <div>
              <input className='mx-2' type="range" min={8} max={32} value={length} onChange={(e)=> setlength(e.target.value)}/>
              <label htmlFor="range">Length {length}</label>
            </div>
            <div>
              <input className='mx-2' type="checkbox" id="number" defaultChecked={numberallow} onChange={() => setnumberallow((prev) => !prev )} /> {/*not my logic*/}
              <label htmlFor="number">Number</label>
            </div>
            <div>
              <input className='mx-2' type="checkbox" id="symbol" defaultChecked={symbolallow} onChange={() => symbolallow? setsymbolallow(false):setsymbolallow(true)}/> {/*my logic*/}
              <label htmlFor="symbol">Symbol</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
