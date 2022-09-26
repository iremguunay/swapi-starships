import logo from "./logo.svg";
import "./App.css";

import Navigation from "./components/navbar/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation logo={logo} />
    </div>
  );
}

export default App;
