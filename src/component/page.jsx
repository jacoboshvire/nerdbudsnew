import Sign from "./Sign";
import Home from "./Home";
// import First from "./first";
// import Err from "./Err";
import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Page() {
    return (
          <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path= "/signup" element={<Sign/>} />
                {/* <Route path= "/Login" element={<Login/>} /> */}
                {/* <Route path= "/main" element={<Main/>} /> */}
                {/* <Route path="*" element={<Err/>}/> */}
            </Routes>
          </BrowserRouter>
    )
}

export default Page
