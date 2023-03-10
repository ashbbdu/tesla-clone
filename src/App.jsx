import React from "react";
import logo from "../assets/tesla.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo w-96" alt="logo" />
        <nav>
          <h5>Model S</h5>
          <h5>Model 3</h5>
          <h5>Model X</h5>
          <h5>Model Y</h5>
          
        </nav>
        <div className="flex">
            <h5>Solar Roof</h5>
          <h5>Solar Panels</h5>
        </div>
      </header>
    </div>
  );
}

export default App;
