import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Home from "./Components/Home";

export default function Exp5() {
  return (
    <div className="App">
     

      <Router>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Page1">Page 1</Link></li>
            <li><Link to="/Page2">Page 2</Link></li>
            <li><Link to="/Page3">Page 3</Link></li>
          </ul>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}
