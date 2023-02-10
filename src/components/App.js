import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' onChange={} />
    
      <p id='output'>{}</p>
    </div>
  )
}


export default App;
