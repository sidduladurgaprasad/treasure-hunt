import './LevelThree.css';
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import hintImg from './Images/hintRoom1.jpg';
import p1 from './Images/p1.jpg';
import p2 from './Images/p2.jpg';
import p3 from './Images/p3.jpg';
import p4 from './Images/p4.jpg';
import p5 from './Images/p5.jpg';
import p6 from './Images/p6.jpg';
import p7 from './Images/p7.jpg';
import p8 from './Images/p8.jpg';
import p9 from './Images/p9.jpg';
import p10 from './Images/p10.jpg';
import p11 from './Images/p11.jpg';
import p12 from './Images/p12.jpg';
import refImg from './Images/sisu.jpg';

function LevelThree(props) {
    let [collectedHintsCount, setCollectedHintsCount] = useState(0);
    let [alive,setAlive]=useState(true);
    let [cnt,setCnt] = useState([]);
    const navigate=useNavigate();
    useEffect(() =>{
        alert("Puzzle Pieces are hidden in below image Collect all the pieces.")
    },[])
    useEffect(() => {
            
            const hints = document.querySelectorAll('.hint');
            const hintClickHandler = function() {
                this.style.visibility = "hidden";
                setCollectedHintsCount(count => count + 1);
                document.getElementById('l'+this.id).style.opacity = 1;
                console.log(collectedHintsCount);
                if(collectedHintsCount===11)
                {
                    document.getElementById("refImg").src = refImg;
                    document.getElementById("refImg").style.zIndex = 3;
                    document.getElementById("box").style.visibility = "visible";
                    alert("You Will get the referance image for 5s that you can start solving the Puzzle")
                }
            };

            hints.forEach((hint) => {
            hint.addEventListener('click', hintClickHandler);
            });

            return () => {
                hints.forEach((hint) => {
                hint.removeEventListener('click', hintClickHandler);
            });
        };
    }, [collectedHintsCount]);

    function handleDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }
    
    function handleDrop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(id);
        img.style.visibility = "hidden";
        e.target.style.backgroundImage = `url(${img.src})`;
        e.target.style.backgroundSize = '100% 100%';
        const tid = e.target.id;
        const pid = 'p'+id;
        if(pid===tid)
        {
           setCnt([...cnt,id]);
        }
        else{
            navigate("/")
        }
        if(cnt.length===11)
        {
            props.Up();
            navigate("/");
        }
    }

    return ( 
        <div>
            <img id="refImg" src={hintImg} className={`hintRoom ${collectedHintsCount === 12?'imageFadeOut':''}`}/>
            <div className="hints">
                <div className="leftRow">
                    <div className="tile">
                        <img 
                            id="lThree" 
                            className='hintFields' 
                            src={p3} 
                            width="99%" 
                            height="98%" 
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lThree");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lTen" 
                            className='hintFields' 
                            src={p10} 
                            width="99%" 
                            height="98%" 
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lTen");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lSix" 
                            className='hintFields' 
                            src={p6} 
                            width="99%" 
                            height="98%" 
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lSix");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lSeven" 
                            className='hintFields' 
                            src={p7} 
                            width="99%" 
                            height="98%" 
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lSeven");}}
                        />
                    </div>
                </div>
                <div className="bottomRow">
                    <div className="tile">
                        <img 
                            id="lNine" 
                            className='hintFields' 
                            src={p9} 
                            width="99%" 
                            height="98%" 
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lNine");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lEight" 
                            className='hintFields' 
                            src={p8} 
                            width="99%" 
                            height="98%"
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lEight");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lTwo" 
                            className='hintFields' 
                            src={p2} 
                            width="99%" 
                            height="98%"
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lTwo");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lTwelve" 
                            className='hintFields' 
                            src={p12} 
                            width="99%" 
                            height="98%"
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lTwelve");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lFive" 
                            className='hintFields' 
                            src={p5} 
                            width="99%" 
                            height="98%"
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lFive");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lEleven" 
                            className='hintFields' 
                            src={p11} 
                            width="99%" 
                            height="98%"
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lEleven");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lFour" 
                            className='hintFields' 
                            src={p4} 
                            width="99%" 
                            height="98%"
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lFour");}}
                        />
                    </div>
                    <div className="tile">
                        <img 
                            id="lOne" 
                            className='hintFields' 
                            src={p1} 
                            width="99%" 
                            height="98%"
                            draggable="true"
                            onDragStart={(e) => {e.dataTransfer.setData("text/plain", "lOne");}}
                        />
                    </div>
                </div>
            </div>
            <div className="hintsInImage">
                <img id="Three" className='hint h3' src={p3}/>
                <img id="Ten" className='hint h10' src={p10}/>
                <img id="Six" className='hint h6' src={p6}/>
                <img id="Seven" className='hint h7' src={p7}/>
                <img id="Nine" className='hint h9' src={p9}/>
                <img id="Eight" className='hint h8' src={p8}/>
                <img id="Two" className='hint h2' src={p2}/>
                <img id="Twelve" className='hint h12' src={p12}/>
                <img id="Five" className='hint h5' src={p5}/>
                <img id="Eleven" className='hint h11' src={p11}/>
                <img id="Four" className='hint h4' src={p4}/>
                <img id="One" className='hint h1' src={p1}/>
            </div>
            <div id="box" className="box">
                <div className="r1 eachRow">
                    <div id="plOne" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plTwo" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plThree" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plFour" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                </div>
                <div className="r2 eachRow">
                    
                    <div id="plFive" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plSix" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plSeven" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plEight" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                </div>
                <div className="r3 eachRow">
                    <div id="plNine" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plTen" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plEleven" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="plTwelve" className="holders" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                </div>
            </div>
        </div>
     );
}

export default LevelThree;