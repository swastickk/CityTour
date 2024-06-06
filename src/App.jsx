import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import RightBar from "./components/RightBar";
import { data } from "./data";
import { data2 } from "./data";

import { useState } from "react";

const App = () => {
  const [bgColor,SetBgcolor]=useState("#232D3f")
  const [color,SetColor] = useState("white")
  const [toggle, settoggle] = useState(true)

  const toggleButton=()=>{
    settoggle(!toggle)
    if(toggle){
      SetBgcolor("rgb(255,255,255)");
      SetColor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5"
    }
    else{
      SetBgcolor("#232D3f");
      SetColor("white");
      document.querySelector("body").style.backgroundColor = "black"

    }
  }
  return (
    <>
      <Navbar bgColor = {bgColor} color={color} toggleButton={toggleButton} toggle={toggle}/>
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor = {bgColor} color={color} />
        </div>
        <div className="post_section">
          
          {data.map((d)=>(
            <Post bgColor = {bgColor} color={color} key={d.id} data = {d}/>
          ))}
        </div>
        <div className="Right_Bar">
          {data2.map((d)=>(
            <RightBar bgColor = {bgColor} color={color} key={d.id} data={d}/>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default App;
