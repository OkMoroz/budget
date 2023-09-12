import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GlobalStyle, Wrapper } from "./styles";

import Home from "../Home";
import About from "../About";
import Statistics from "../Statistics";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;
