import logo from "./logo.svg";
import "./App.css";

import {Routes, Route} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// components
import Navigation from "./components/navbar/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships/:starshipId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
