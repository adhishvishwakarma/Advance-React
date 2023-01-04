import React from "react"
import Example from './Example'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Example name={() => 'Hi there'} /> */}
      {/* <Example name={ function() {
        return 'Hi there'
      }} /> */}
      <Example render={
        function(name) {
          return <h1>Hi {name}</h1>
        }
      } />
    </div>
  );
}

export default App;
