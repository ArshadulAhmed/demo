import React from "react";
import { Routes, Route } from "react-router-dom"
import HomePage from "../screens/HomePage";
import AboutPage from "../screens/AboutPage";
// import NotFound from "../screens/NotFound";

const BaseRouter = () => (
    <React.Fragment>

       <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage />} />
       </Routes>

    </React.Fragment>
);
export default BaseRouter;