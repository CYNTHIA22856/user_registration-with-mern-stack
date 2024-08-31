import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
function Navigation() {
  return (
    <div className={styles.navbar}>
        <div className={`${styles.container} ${styles.flex}`}>   
            <nav>
        <ul>
        <ul>
        <li><Link to="/Home" className={styles.link}>Home</Link></li>
        <li><Link to="/About" className={styles.link}>About</Link></li>
        <li><Link to="/Services" className={styles.link}>Services</Link></li>
        <li><Link to="/Contact" className={styles.link}>Contact</Link></li>
</ul>

        </ul>
    </nav>
</div>
</div>  
  );
}

export default Navigation;

