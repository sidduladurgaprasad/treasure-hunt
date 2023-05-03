import React from 'react';
import { useEffect,useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './LevelTwo.css';
import b0 from './Images/zero.png';
import b1 from './Images/one.png';
import b2 from './Images/two.png';
import b3 from './Images/three.png';
import b4 from './Images/four.png';
import b5 from './Images/five.png';
import b6 from './Images/six.png';
import b7 from './Images/seven.png';
import b8 from './Images/eight.png';
import b9 from './Images/nine.png';
import p1 from './Images/phoneScreen.png';
import dp from './Images/dialPad.png';
import cl from './Images/closeLocker.png';
import ol from './Images/openLocker.png';
import cd from './Images/closedDoor.jpg';
import od from './Images/openedDoor.jpg';
import key from './Images/key.png';

function LevelTwo(props) {

    const [audio] = useState(new Audio('Music/hint.mp3'));
    useEffect(() =>{
      alert("Collect all numbers by tapping the balloons")
    },[])
    const playAudio = () => {
        audio.play()
        .then(() => console.log('Audio played successfully'))
        .catch(error => console.error('Error playing audio:', error));
    };
    const [collectedBalloonsCount, setCollectedBalloonsCount] = useState(0);
    useEffect(() => {
        if(collectedBalloonsCount < 9) {
          document.body.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/clouds-blue-sky-light-31912398.jpg')";
        }
        const balloons = document.querySelectorAll('.balloon');
        const balloonSound = document.getElementById('balloon-popping');
        const balloonClickHandler = function() {
            this.style.display = 'none';
            setCollectedBalloonsCount(count => count + 1);
            document.getElementById('l'+this.id).style.backgroundColor = "yellow";
            balloonSound.play(); 
            if(collectedBalloonsCount === 9) {
                document.body.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-white-wall-design-background-of-empty-room-image_908865.png')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "100%";
                document.getElementById("phone").style.visibility = "visible";
                document.getElementById("lockerImg").style.visibility = "visible";
                document.getElementById("door").style.visibility = "visible";
                document.getElementById("collectedBalloons").style.visibility = "hidden";
                alert("Key of the door is inside the locker.Your task is to identify the code and open the door")
            }
        };

        balloons.forEach((balloon) => {
        balloon.addEventListener('click', balloonClickHandler);
        });

        return () => {
            balloons.forEach((balloon) => {
            balloon.removeEventListener('click', balloonClickHandler);
        });
        };
    }, [collectedBalloonsCount]);

    const [locked, setLocked] = useState(true);

    function handleLockerClick() {
        if (locked) {
        document.getElementById("code").style.visibility = "visible";
        document.getElementById("open").style.visibility = "visible";
        }
    }
    const handleOpenClick = () => {
        let correctCode = "COIN"
        let enteredCode = document.getElementById("code").value
        if(correctCode === enteredCode)
        {
            setLocked(false);
            document.getElementById("lockerImg").src = ol;
                document.getElementById("key").style.visibility = "visible";
                document.getElementById("code").style.visibility = "hidden";
                document.getElementById("open").style.visibility = "hidden";
        }
      }

    useEffect(() => {
        const lockerImg = document.getElementById("lockerImg");
        lockerImg.addEventListener("click", handleLockerClick);
        return () => lockerImg.removeEventListener("click", handleLockerClick);
    }, [locked]);

    function allowDrop(event) {
        event.preventDefault();
      }
    
      function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
      }
    
      function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        if (data === "key") {
          document.getElementById("door").src = od;
          document.getElementById("door").style.width = "23%";
          document.getElementById("key").style.visibility = "hidden";
          setDoorSrc("images/openedDoor.jpg");
          props.Up();
        }
      }

      const navigate=useNavigate();
      const opened = "images/openedDoor.jpg";
      const [doorSrc, setDoorSrc] = useState("images/closedDoor.jpg");
      const handleDoorClick = () => {
        if (doorSrc === opened) {
          navigate("/");
        }
      };

    return ( 
        <div className="level2">
            <div id="gameSpace">
            <audio id="balloon-popping" src="/Music/balloonPopping.wav"></audio>
            <div id="zero" class="balloon"><img src={b0} width="75%"/></div>
            <div id="one" class="balloon"><img src={b1} width="75%"/></div>
            <div id="two" class="balloon"><img src={b2} width="75%"/></div>
            <div id="three" class="balloon"><img src={b3} width="75%"/></div>
            <div id="four" class="balloon"><img src={b4} width="75%"/></div>
            <div id="five" class="balloon"><img src={b5} width="75%"/></div>
            <div id="six" class="balloon"><img src={b6} width="75%"/></div>
            <div id="seven" class="balloon"><img src={b7} width="75%"/></div>
            <div id="eight" class="balloon"><img src={b8} width="75%"/></div>
            <div id="nine" class="balloon"><img src={b9} width="75%"/></div>
        </div>
         <div id="collectedBalloons">
            <div id="lzero" class="balloon-card"><p>0</p></div>
            <div id="lone" class="balloon-card"><p>1</p></div>
            <div id="ltwo" class="balloon-card"><p>2</p></div>
            <div id="lthree" class="balloon-card"><p>3</p></div>
            <div id="lfour" class="balloon-card"><p>4</p></div>
            <div id="lfive" class="balloon-card"><p>5</p></div>
            <div id="lsix" class="balloon-card"><p>6</p></div>
            <div id="lseven" class="balloon-card"><p>7</p></div>
            <div id="leight" class="balloon-card"><p>8</p></div>
            <div id="lnine" class="balloon-card"><p>9</p></div>
        </div>

        <div id="phone">
            <div class="screen">
                <p>Get hint by making a call.</p>
                <img src={p1} style={{borderRadius: "50%"}} width="40%"/>
                <img src={dp} width="70%"/>
            </div>
            <div class="dial-pad">
                <button class="dial-button clear" onClick={playAudio} value="">&#128222;</button>
            </div>
      </div>
      <div id="locker">
        <img src={key} width="20%" id="key" draggable="true" onDragStart={drag}/>
        <img src={cl} width="70%" id="lockerImg"/>
        <br/>
        <input type="text" placeholder="Enter The Code (A-Z)" id="code" style={{visibility: "hidden"}}/>
        <button id="open" style={{visibility: "hidden"}} onClick={handleOpenClick}>open</button>
      </div>

      <div>
        <img src={cd} id="door" width="15.5%" onClick={handleDoorClick}/>
        <div class="lock" onDrop={drop} onDragOver={allowDrop}></div>
      </div>
        </div>
     );
}

export default LevelTwo;
