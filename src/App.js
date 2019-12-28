import React from 'react';
import './App.css';
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <Home />
      <footer>
          <a
              href="https://github.com/denihs/fez-alphabet-decode-helper"
              target="_blank"
              rel="noopener noreferrer"
          >
              DenyHs
          </a>
      </footer>
    </div>
  );
}

export default App;
