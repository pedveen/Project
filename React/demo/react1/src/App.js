import PropTypes from 'prop-types'
import { useState } from 'react';

function App(props) {
  let [text, settext] = useState("Enter text here...");
  const handlechange = (event) => {
    
    settext(event.target.value);
    console.log(text)
  } 
  const upper = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  }

  return (
    <>
      <div className="container my-2">
        <textarea className="form-control bg-dark text-light" value={text} rows="8" aria-label="With textarea" onChange={handlechange}></textarea>
        <div className="btn btn-primary my-2" onClick={upper}>UpperCase</div>
        <div className="btn btn-dark m-2" onClick={() => settext(text.toLowerCase())}>LowerCase</div>
        <h1>words: {text.split(" ").length} character: {text.length}</h1>
        <h1>slowtime: {0.008*text.split(" ").length} minute</h1>
        <h1>fasttime: {0.0033333333333333*text.split(" ").length} minute</h1>
      </div>
      
    </>
  );
}

export default App;

App.propTypes ={
  tiitle : PropTypes.string,
  no : PropTypes.string
}