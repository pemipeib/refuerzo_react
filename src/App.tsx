import React, {useState} from 'react';

import TypeScript from "./typescript/TypeScript";
import Hooks from "./components/Hooks";

const App= () => {
    const [clase, setClase] = useState(0);

    const cambioClase= () => {
        if(clase === 1){
            return <TypeScript/>
        }else if(clase === 2){
            return <Hooks/>
        }
    }


  return (
      <div className="mt-2">
          <h1 className="fw-bold text-uppercase">Introducción a TS - React</h1>
          <hr/>
          <div className="d-flex justify-content-center align-content-center">
              <button
                  className="btn btn-secondary m-2"
                  onClick={() => setClase(1)}
              >Básico de TypeScript</button>

              <button
                  className="btn btn-secondary m-2"
                  onClick={() => setClase(2)}
              >Hooks</button>
          </div>
          {cambioClase()}
      </div>
  );
};

export default App;
