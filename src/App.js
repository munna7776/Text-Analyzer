import './App.css';
import Navbar from "./components/Navbar";
import TextAnalyzer from "./components/TextAnalyzer";
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='light')
    setMode('dark');
    else
    setMode('light');
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextAnalyzer mode={mode} />
    </>
  );
}

export default App;
