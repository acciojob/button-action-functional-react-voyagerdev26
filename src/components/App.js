import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  let[showHide, setShowHide]= useState("disable");

  function handleClick(e){
    if(showHide==="disable"){

      setShowHide("active");
    }
    else{
      setShowHide("disable");

    }
  }

  return (
    <div id="main">
      
      <button id="click"  onClick={handleClick}>Click</button>
      <p className={showHide} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
    </div>
  );
}


export default App;
