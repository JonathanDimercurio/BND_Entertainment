import React, { useState, useEffect  } from 'react';
import styles from './NavLogo.module.css';
import { Link } from "react-router-dom";
import logo from './assets/bnd_logo.png';
import pIcon from './assets/profileIcon.png'
import mIcon from './assets/mapsIcon.png';
import homeIcon from './assets/homeIcon.png';
import npcIcon from './assets/npcIcon.png';


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
                    <img id="homeIcon" src={homeIcon} />
                </Link>
            </li>
            <li>
                <Link to="/profile">
                    <img id="profileIcon" src={pIcon} />
                </Link>
            </li>
            <li>
                <Link to="/allmaps">
                    <img id="mapsIcon" src={mIcon} />
                </Link>
            </li>
            <li>
                <Link to="/allmaps">
                    <img id="mapsIcon" src={npcIcon} />
                </Link>
            </li>

           </ul>
          </div>
          
  );
}
