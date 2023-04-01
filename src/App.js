import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect } from 'react';

import Karakterler from "./components/Karakterler";

const App = () => {
 

  // Optionally the request above could also be done as


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler/>
      
    </div>
  );
}

export default App;
