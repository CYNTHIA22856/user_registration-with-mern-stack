import React from 'react';

function Contact() {
  const style ={
    backgroundColor : "red",
    color :"white",
    padding: "10px 10px" ,
    border:"none",
    borderRadius:"2px",
    Cursor:"pointer"
  }
  return (
    <>
    
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        
      </form>
      <button style = {style} type='Submit'>Click </button>
    </section>

    <p>Siège social de l’Ordre : Nkolbisson à côté de la salle de fête Ndougsa Palace ; 500 m apres le carrefour TSIMI, Yaoundé, B.P. : 2656 MESSA
contact@opms-amsp.com
+237 677 813 202 / 695 617 370</p>
    </>
  );
}

export default Contact;
