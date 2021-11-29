import React, { useState } from 'react';
import styles from './NavLogo.module.css';
import { Link } from "react-router-dom";
import pIcon from './assets/profileIcon.png'
import mIcon from './assets/mapsIcon.png';
import homeIcon from './assets/homeIcon.png';
import npcIcon from './assets/npcIcon.png';
import closeNavIcon from './assets/closeNavIcon.png';

export default function NavLogo() {
    const [style, setStyle] = useState("false");
    
    const navHandler = () => {
        setStyle(!style);
    }

    
    
  return (
          <div id="bndSlideNav" className={style ?
              styles.slidenavCLOSE : styles.slidenavOPEN} onClick={navHandler} >
           <ul>
            <li>
                <Link to="/">
                    <img id="homeIcon" alt="Home" src={homeIcon} />
                </Link>
            </li>
            <li>
                <Link to="/profile">
                    <img id="profileIcon" alt="Profile" src={pIcon} />
                </Link>
            </li>
            <li>
                <Link to="/addboard">
                    <img id="mapsIcon" alt="Maps" src={mIcon} />
                </Link>
            </li>
            <li>
                <Link to="/addtoken">
                    <img id="npcIcon" alt="Icons" src={npcIcon} />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <img id="closeIcon" alt="close" src={closeNavIcon} />
                </Link>
            </li>


           </ul>
          </div>
          
  );
}
