import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const AllRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;
