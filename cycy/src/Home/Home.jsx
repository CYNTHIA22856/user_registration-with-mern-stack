import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';


function Home(){
  const navigate = useNavigate();
  const buttonStyle = {
    backgroundColor: '#007bff', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    padding: '10px 20px', 
    fontSize: '16px', 
    cursor: 'pointer', 
    transition: 'background-color 0.3s', 
    display: 'block', 
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // or 'center', 'flex-start', etc.
    gap: '150px', // optional, adds space between buttons
  };
  const handleNavigation = () => {
    navigate('/services1'); // Assuming '/services' is the route to your Services component
  };
  return (
<>
    <section className={styles.showcase}>
    <div className={`${styles.container} ${styles.flex}`}>
        <p > OPMS</p> 
        <h1>Order of Medical and Health Professions</h1>
        <p>Nurses , Midwife and Medical Health Technician</p> 
        </div>
        <div style={containerStyle}>
        <li>
        <Link to="/Features" id="myLink" className={styles.link}>Read More</Link>
        </li>
        
         <button style = {buttonStyle} onClick={handleNavigation} type='Button'>become a member </button>
         </div>
    </section>
    
    </>
  );
}

export default Home;
