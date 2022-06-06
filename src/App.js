import './App.css';
import Primercomponent from './Components/Primercomponent';
// import Contador from './Components/Contador';
import React, {useState} from "react";




function App() {

  
  return (
    <body>
      <section><h1>Contador</h1></section>
      <section>
        <div>
        </div>
      </section>
      <div className="App">
        <div className="first2">
          <button className="contador" onClick={Primercomponent}><Primercomponent/></button>
        </div>
        
      
      </div>
    </body>
  );
}

export default App;
