import React, {useEffect, useRef} from 'react';
import Input from './component/Input';


const App = () => {



  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
   firstNameRef.current.focus();
  }, [])

  function firstKeyDown(e){
    if (e.key === "Enter"){
      lastNameRef.current.focus();
    }

  }

  
  function lastKeyDown(e){
    if (e.key === "Enter"){
      submitRef.current.focus();
    }
  }


  function submitKeyDown(e){
    if (e.key === "Enter"){
      alert('form submitted')
    }
  }



  return (
    <div className='App'>
      <header className="App-header">
        <Input type="text" onKeyDown = {firstKeyDown} ref = {firstNameRef} placeholder="enter first name" />
        <Input type="text" onKeyDown = {lastKeyDown} ref = {lastNameRef} placeholder="enter last name" />
        <button  onKeyDown = {submitKeyDown} ref={submitRef}>Submit</button>
      </header>
      
    </div>
  )
}

export default App
