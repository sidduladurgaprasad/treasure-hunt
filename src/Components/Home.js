import "./Home.css";
import {Link,Route,Routes,useNavigate} from 'react-router-dom';
import map from './Images/Home.jpg'
import L1G from './Images/L1G.png'
import L2G from './Images/L2G.png'
import L2S from './Images/L2S.png'
import L3S from './Images/L3S.png'
import L3G from './Images/L3G.png'
import man from './Images/man.png'
import treasure from './Images/treasure.png'

function Home(props) {
    console.log(props.currentLevel)
    const navigate=useNavigate();
    let home=()=>{
        navigate("/");
    }
    let level1=()=>{
        navigate("/level1");
    }
    let level2=()=>{
        navigate("/level2");
    }
    let level3=()=>{
        navigate("/level3");
    }
    return ( 
        
        <div>
            <img src={map} width="100%" height="100%"/>
            <img src={L1G} className="level L1 unlocked" onClick={level1}/>
            <img src={man} 
                className={props.currentLevel==1 ? 'man1': 
                            `${props.currentLevel==2 ? 'man1 moveToLevel2' :
                                `${props.currentLevel==3 ? 'man2 moveToLevel3' :
                                    `${props.currentLevel==4 ? 'man3 moveToLevelTreasure' :' '
                                    }`
                                }`
                            }`
                        }
            />
            <img src={props.currentLevel >= 2 ? L2G : L2S} id="L2" className={`level L2 ${props.currentLevel>=2 ? 'unlocked' : ''}`} onClick={props.currentLevel>=2 ? level2 : home}/>
            <img src={props.currentLevel >= 3 ? L3G : L3S} id="L3" className={`level L3 ${props.currentLevel>=2 ? 'unlocked' : ''}`} onClick={props.currentLevel>=3 ? level3 : home}/>
            <img src={treasure} className="treasure"/>
            
        </div>
     );
}

export default Home;