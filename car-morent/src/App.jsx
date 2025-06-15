import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Catalog from "./Catalog";
import Info from "./Info";
import RentalPage from "./RentalPage"; 
import "./index.css";

function App() { 
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> 
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="info" element={<Info />} />
                    <Route path="request" element={<RentalPage />} /> 
                </Route>
            </Routes>
        </Router>
    );
}

export default App;