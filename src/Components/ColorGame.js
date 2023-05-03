import React, { useState } from 'react';
import openedDoor from './Images/openedDoor.jpg';
import closedDoor from './Images/closedDoor.jpg';
import {useNavigate} from 'react-router-dom';
import './ColorGame.css';

function ColorGame(props) {
  document.body.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-white-wall-design-background-of-empty-room-image_908865.png')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100%";
  const [selectedColor, setSelectedColor] = useState(null);
  const [showHint, setShowHint] = useState(false);
  // console.log(props);
  // const handleColorSelection = (color,c1,c2) => {
  //   setSelectedColor(color);
  //   document.getElementById(c1).style.border = 'none';
  //   document.getElementById(c2).style.border = 'none';
  //   document.getElementById(color).style.border = '2px solid black';
  // };
  const handleColorSelection = (color) => {
    let colorsList = ['red','blue','green','purple','yellow','orange','teal','pink','brown','white','black','gray']
    setSelectedColor(color);
    for(let i=0;i<12;i++){
      document.getElementById(colorsList[i]).style.border = 'none';
    }
    document.getElementById(color).style.border = '2px solid black';
  };

  const handleSquareClick = () => {
    if (selectedColor !== null) {
      const squareElement = document.getElementById('square');
      squareElement.style.backgroundColor = selectedColor;
      if (selectedColor === 'green') {
        document.getElementById('h1').style.opacity = 1;
      } else {
        document.getElementById('h1').style.opacity = 0;
      }
    }
  };

  const handleCircleClick = () => {
    if (selectedColor !== null) {
      const circleElement = document.getElementById('circle');
      circleElement.style.backgroundColor = selectedColor;
      if (selectedColor === 'red') {
        document.getElementById('h2').style.opacity = 1;
      } else {
        document.getElementById('h2').style.opacity = 0;
      }
    }
  };
  const handleRhombusClick = () => {
    if (selectedColor !== null) {
      const circleElement = document.getElementById('rhombus');
      circleElement.style.backgroundColor = selectedColor;
      if (selectedColor === 'blue') {
        document.getElementById('h3').style.opacity = 1;
      } else {
        document.getElementById('h3').style.opacity = 0;
      }
    }
  };
  const navigate=useNavigate();
  const opened = "images/openedDoor.jpg";
  const [doorSrc, setDoorSrc] = useState("images/closedDoor.jpg");
  const handleDoorClick = () => {
    if (doorSrc === opened) {
      navigate("/");
    }
  };
  const handleOpenDoorClick = () => {
    
    const d1 = document.getElementById('d1').value;
    const d2 = document.getElementById('d2').value;
    const d3 = document.getElementById('d3').value;
    if (d1 === '5' && d2 === '5' && d3 === '9') {
      document.getElementById('Door').src = openedDoor;
      document.getElementById('Door').style.width = "21%";
      setDoorSrc("images/openedDoor.jpg");
      props.Up();
    }
  };

  const handleHintClick = () => {
    setShowHint(!showHint);
  };

  return (
    <div>
      <h1>Color the below shapes to open the door</h1>
      <img src={closedDoor} id="Door" width="15%" onClick={handleDoorClick}/>
      <div className="pass">
        <input type="number" min="0" max="9" id="d1" />
        <input type="number" min="0" max="9" id="d2" />
        <input type="number" min="0" max="9" id="d3" />
        <button id="open" onClick={handleOpenDoorClick}>
          Open
        </button>
      </div>

      <div className="drawing">
        <div id="square" onClick={handleSquareClick}>
          <p className="hint" id="h1">
            3+2
          </p>
        </div>
        <div id="circle" onClick={handleCircleClick}>
          <p className="hint" id="h2">
            4+1
          </p>
        </div>
        <div id="rhombus" onClick={handleRhombusClick}>
          <p className="hint" id="h3">
            7+2
          </p>
        </div>
      </div>
      {/* <div id="colors">
        <div id="red" onClick={() => handleColorSelection('red','blue','green')}></div>
        <div id="blue" onClick={() => handleColorSelection('blue','red','green')}></div>
        <div id="green" onClick={() => handleColorSelection('green','red','blue')}></div>
      </div> */}
      <div id="colors">
      <div id="red" onClick={() => handleColorSelection('red')}></div>
      <div id="blue" onClick={() => handleColorSelection('blue')}></div>
      <div id="green" onClick={() => handleColorSelection('green')}></div>
      <div id="purple" onClick={() => handleColorSelection('purple')}></div>
      <div id="yellow" onClick={() => handleColorSelection('yellow')}></div>
      <div id="orange" onClick={() => handleColorSelection('orange')}></div>
      <div id="teal" onClick={() => handleColorSelection('teal')}></div>
      <div id="pink" onClick={() => handleColorSelection('pink')}></div>
      <div id="brown" onClick={() => handleColorSelection('brown')}></div>
      <div id="gray" onClick={() => handleColorSelection('gray')}></div>
      <div id="black" onClick={() => handleColorSelection('black')}></div>
      <div id="white" onClick={() => handleColorSelection('white')}></div>
    </div>
      {/* <div className="details">
        <p>Square - Green</p>
        <p>Rhombus - Blue</p>
        <p>Circle - Red</p>
      </div> */}
      <div className="details">
        {showHint ? (
           <div className='clues' style={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' }}>
            <p>Circle - One color of traffic signal.</p>
            <p>Rhombus - The word that rhymes with 'Clue' .</p>
            <p>Square - The color of grass.</p>
         </div>
        ) : (
          <button className="hint-btn" onClick={() => setShowHint(true)}>
            Need a hint?
          </button>
        )}
      </div>
    
    </div>
  );
}

export default ColorGame;
