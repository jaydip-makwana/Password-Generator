import React from 'react';
import InputData from './components/InputData';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Password Generator</h1>
      </div>
      <div className="container">
      <InputData/>
      </div>
    </div>
  );
}

export default App;
