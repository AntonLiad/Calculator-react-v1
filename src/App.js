import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
const [scoreboard, setScoreboard] = useState([0])

function hendelDisplay (str) {
setScoreboard(str[0])
}

function removeDiplay () {
  setScoreboard(0)
}

  return (
    <div className="App">
      <Calculator display={scoreboard} removeDiplay={removeDiplay} hendelDisplay={hendelDisplay}/>
    </div>
  );
}

export default App;
