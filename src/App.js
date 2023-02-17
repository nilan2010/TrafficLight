import './App.css';
import { useState } from 'react';
import Light from './components/Light';
function App() {
  const [redOn, setRedOn] = useState(true);
  const [yellowOn, setYellowOn] = useState(false);
  const [greenOn, setGreenOn] = useState(false);

  const handleRedClick = () => {
    setRedOn(true);
    setYellowOn(false);
    setGreenOn(false);
  };

  const handleYellowClick = () => {
    setRedOn(false);
    setYellowOn(true);
    setGreenOn(false);
  };

  const handleGreenClick = () => {
    setRedOn(false);
    setYellowOn(false);
    setGreenOn(true);
  };


  return (
      <div className='center'>
          <div className="trafficLight">
            <Light lightColor={redOn ? 'red':'gray'} handleClick={handleRedClick} ></Light>
            <Light lightColor={yellowOn ? 'yellow':'gray'} handleClick={handleYellowClick}></Light>
            <Light lightColor={greenOn ? 'green':'gray'} handleClick={handleGreenClick}></Light>            
          </div>
      </div>
       
    
  );
}

export default App;
