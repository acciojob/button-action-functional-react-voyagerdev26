import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  // 1st way 
  // let[showHide, setShowHide]= useState("disable");

  // 2nd way 
  let[text, setText]= useState(false);
  function handleClick(e){
    // 1st way
    // if(showHide==="disable"){

    //   setShowHide("active");
    // }
    // else{
    //   setShowHide("disable");

    // }
    // 2nd way 

    setText(!text);
  }

  return (
    <div id="main">
      
      <button id="click"  onClick={handleClick}>Click</button>
      
      {/* <p className={showHide} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p> */}
      {text && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>}
    </div>
  );
}


export default App;
