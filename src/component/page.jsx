import Sign from "./Sign";
import Home from "./Home";
// import First from "./first";
// import Err from "./Err";
import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Page() {
  var [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(()=>{
        setloading(false)
    }, 10000)
}, [])
    return (
      
          <BrowserRouter>
                  {
            loading ?
            <div id="main">
            <div id="anim">
                <div id="cir">
                    <div id="glasses">
                        <div id="cir1">
    
                        </div>
                        <div id="line">
    
                        </div>
                        <div id="cir2">
    
                        </div>
                    </div>
                    <div id="btm">
                        
                    </div>
                    <div id="re_btm">
                        
                    </div>
                </div>
            </div>
            <h1 id="nameNM">nerdbuds</h1>
            <br/>
            <div id="main_btns">
                <span id="btns1" ></span>
                <span id="btns2" ></span>
                <span id="btns3" ></span>
                <span id="btns4" ></span>
            </div>
        </div>
            :
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/sign" element={<Sign/>} />
                {/* <Route path= "/Login" element={<Login/>} /> */}
                {/* <Route path= "/main" element={<Main/>} /> */}
                {/* <Route path="*" element={<Err/>}/> */}
            </Routes>
}
          </BrowserRouter>
    )
}

export default Page
