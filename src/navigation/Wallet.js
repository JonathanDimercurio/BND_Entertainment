import React, { useState, useEffect } from 'react';
import styles from './Wallet.module.css';
import { Link } from "react-router-dom";
import { useDB } from "../context/DatabaseContext";
import closeNavIcon from './assets/closeNavIcon.png';

export default function Wallet() {
    const [style, setStyle] = useState(true);
    const [hide, setHide] = useState(true);
    const { currentUser } = useDB().useAuth();
    
    const walletHandler = () => {
        setStyle(!style);
    }

    useEffect(() => {
        if(currentUser == null) {
            setHide(false)
            setStyle(styles.slidenavCLOSE);
        }
    }, [hide]);
    
    
  return (
          
          <div id="Wallet" className={style ? styles.slidenavCLOSE :
                                styles.slidenavOPEN } onClick={walletHandler} >
          </div>
          
  );
}
