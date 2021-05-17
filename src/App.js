import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { XlviLoader } from "react-awesome-loaders";
import "./App.css";
import Body from './components/Body';


function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 2200);
  }, []);
  return (
    <div >
      {
        load ?
          <header className="App-header">
            <XlviLoader
              className="fadeOut"
              boxColors={["#00fff5", "#e94560", "#4f3b78"]}
              desktopSize={"128px"}
              mobileSize={"70px"}
            />
          </header>
          : <Body></Body>
      }

    </div>
  );
}

export default App;
