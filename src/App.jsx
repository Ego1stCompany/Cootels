import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//components
import Home from "./Pages/Home.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Cootels/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
