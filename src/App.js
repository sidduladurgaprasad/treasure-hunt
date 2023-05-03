import logo from './logo.svg';
import './App.css';
import LevelOne from './Components/ColorGame';
import LevelTwo from './Components/LevelTwo';
import LevelThree from './Components/LevelThree';
import Home from './Components/Home';
import ColorGame from './Components/ColorGame';
import { useEffect,useState,useRef } from 'react';
import {Link,Route,Routes,useNavigate} from 'react-router-dom'

function App() {
  let [currentLevel,LevelUp] = useState(1);
  function Up() {
    LevelUp(currentLevel+1);
  }
 
  return (
    <div>
     <Routes>
        <Route path="" element={<Home currentLevel={currentLevel}/>}></Route>
        <Route path="level1" element={<ColorGame currentLevel={currentLevel} Up={Up}/>}></Route>
        <Route path="level2" element={<LevelTwo currentLevel={currentLevel} Up={Up}/>}/>
        <Route path="level3" element={<LevelThree currentLevel={currentLevel} Up={Up}/>}/>
    </Routes>
    </div>
  );
}

export default App;
