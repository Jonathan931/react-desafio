import React from "react";
import "font-awesome/css/font-awesome.min.css";
import BolsasFavoritas from "./pages/bolsasFavoritas";
import { GlobalStyles } from "./styles/global";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BolsasFavoritas />
      <GlobalStyles />
    </div>
  );
}

export default App;
