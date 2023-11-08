import { useState } from 'react';
import Effect from './UseEffect';
import './Accounts.css'
import React from 'react'
import Connect from './Connnect';
import UseEffect from './UseEffect';
import Register from './Register';
import Login from './Login';

function App() {

  const [select, setSelect] = useState(false)
  
  const handleSelect = () => {
    setSelect(!select)
  }
  return (
    <div>
      < Register />
    </div>
  )

}

export default App; 
