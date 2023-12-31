import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News  from './components/News';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';



const App =(props)=> {
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('Enable Dark Mode');
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(0 44 58)'
      setText('Disable Dark Mode')
      showAlert("Dark Mode Enabled", "success")
      // document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      setText('Enable Dark Mode')
      showAlert("Dark Mode Disabled", "success")
      // document.title='TextUtils - Light Mode'
    }
  }

  let apiKey= process.env.REACT_APP_API_KEY
  const [progress, setProgress]=useState('10')
  
  const handleProgress=(progress)=>{
    setProgress(progress)
  }
    return (
      <div>
        
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
        //onLoaderFinished={() => handleProgress(0)}
      />
      <NavBar text={text} mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert={alert}/> */}
      <Routes>
      <Route exact path="/" element={<News mode={mode}  apiKey={apiKey} handleProgress={handleProgress} key="general" headline="World" pageSize={6} category="world"/>} ></Route>
        <Route exact path="/arts" element={<News mode={mode} apiKey={apiKey}  handleProgress={handleProgress} key="arts" headline="Arts" pageSize={6} category="arts"/>} ></Route>

        <Route exact path="/home" element={<News mode={mode} apiKey={apiKey}  handleProgress={handleProgress} key="home" headline="Home" pageSize={6} category="home"/>} ></Route>

        <Route exact path="/us" element={<News mode={mode} apiKey={apiKey}  handleProgress={handleProgress} key="us" headline="US" pageSize={6} category="us"/>} ></Route>
        <Route exact path="/technology" element={<News mode={mode} apiKey={apiKey}  handleProgress={handleProgress} key="technology" headline="Technology" pageSize={6} category="technology"/>} ></Route>
      {/* 
      <Route exact path="/science" element={<News apiKey={apiKey}  handleProgress={handleProgress} key="science" headline="Science" pageSize={6} category="science"/>} ></Route>
        <Route exact path="/sports" element={<News apiKey={apiKey}  handleProgress={handleProgress} key="sports" headline="Sports" pageSize={6} category="sports"/>} ></Route>

        <Route exact path="/technology" element={<News apiKey={apiKey}  handleProgress={handleProgress} key="technology" headline="Technology" pageSize={6} category="technology"/>} ></Route> */}

      </Routes>
      </BrowserRouter>
      </div>
    )
  }


export default App