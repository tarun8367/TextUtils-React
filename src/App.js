import React,{useState} from 'react'

import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';

function App() {
  const[mode , setMode] = useState("light");
  const[alert , setAlert] =  useState(null);
  
  // const removeClasses =() =>{
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-warning");
  // }

  const showAlert = (message ,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    } , 1500);
  }
  const toggleMode = () =>{
    // removeClasses();
    // document.body.classList.add("bg-" + cls);
    if(mode === "dark"){
      setMode("light");  
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled" , "success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#1a1a33";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled" , "success");
    }
  }
  return (
    <>

      {/* <Router> */}
<Navbar title="TextUtils" mode ={mode} toggleMode = {toggleMode}/>
{/* <Navbar /> */}
<Alert alert = {alert}/>

<div className="container my-3">
{/* <Routes> */}
{/* <Route exact path="about" element={<About/>}/> */}
{/* <Route exact path="/" element={<TextForm heading ="Enter the Text To analize " mode = {mode} showAlert = {showAlert}/>}/> */}

  {/* </Routes> */}
  <TextForm heading ="Enter the Text To analize " mode = {mode} showAlert = {showAlert}/>
  
  </div>

{/* // </Router> */}

    </>
    
  );
}

export default App;
