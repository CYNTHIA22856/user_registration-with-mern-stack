import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';
function Services() {
  
  return (
    <>
      <h2>Nos Services</h2>
      <ul>
        <li><Link to="/Services1" className={styles.link} >Demande dînscription au tableau de lordre</Link> </li>
        <li><Link to="/Services2"  className={styles.link}>Inscription a l'ordre des professeur medico sanitaire </Link> </li>
        <li><Link to="/Services3" className={styles.link}>Procedure dinscription a lordre</Link> </li>
      </ul>
      </>
  );
}
export default Services;
