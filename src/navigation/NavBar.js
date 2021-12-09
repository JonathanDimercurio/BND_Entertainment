import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { Link } from "react-router-dom";
import pIcon from './assets/profileIcon.png'
import mIcon from './assets/mapsIcon.png';
import homeIcon from './assets/homeIcon.png';
import npcIcon from './assets/npcIcon.png';
import play from './assets/play.png';
import closeNavIcon from './assets/closeNavIcon.png';



export default function NavBar() {
    const [style, setStyle] = useState("false");
    
    const navHandler = () => {
        setStyle(!style);
    }

    
    
  return (
          
          <div id="bndSlideNav" className={style ?
              styles.slidenavCLOSE : styles.slidenavOPEN} onClick={navHandler} >
           <ul className="shadow">
            
            <div>
            <li>
                <Link to="/">
                    <img id="homeIcon" alt="Home" src={homeIcon} />
                </Link>
            </li>
            </div>
            
            <div>
            <li>
                <Link to="/profile">
                    <img id="profileIcon" alt="Profile" src={pIcon} />
                </Link>
            </li>
            </div>
            
            <li>
            <div>
                <Link to="/addboard">
                    <img id="mapsIcon" alt="Maps" src={mIcon} />
                </Link>
            </div>
            </li>
            
            <div>
            <li>
                <Link to="/addtoken">
                    <img id="npcIcon" alt="Icons" src={npcIcon} />
                </Link>
            </li>
            </div>
            <div>
            <li>
                <Link to="/gameboard">
                    <img id="playicon" alt="Icons" src={play} />
                </Link>
            </li>
            </div>
            
            <li>
                    <img id="closeIcon" alt="close" src={closeNavIcon} />
            </li>


           </ul>
          </div>
          
  );
}
