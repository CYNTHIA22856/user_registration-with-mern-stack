import axios from 'axios';
import React from 'react';
import styles from './Services1.module.css';
import { useState } from 'react';
function Services1() {
  const [values, setValues] = useState({
    name: '',
    Sex:'',
    region: '',
    nationality: '',
    dob: '',
    address: '',
    email: '',
    school: '',
    qualification: '',
    membership: '',
    which: '',
    profilePicture: '',
  });
  const handleChange = (e) => {
    setValues({
      ...values,[e.target.name]:e.target.value})
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5175/api/create', values)
      .then(response => {
        console.log('Response:', response);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    const newregistration = {
      name: values.name,
      Sex: values.Sex,
      region: values.region,
      nationality: values.nationality,
      dob:values.dob,
      address: values.address,
      email: values.email,
      school: values.school,
      qualification: values.qualification,
      membership: values.membership,
      which:values.membership,
      profilePicture: values.profilePicture
    }
    axios.post("http://localhost:5175/create",newregistration);
    console.log(values)
  };
  const buttonStyle = {
    backgroundColor: '#007bff', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    padding: '10px 20px', 
    fontSize: '16px', 
    cursor: 'pointer', 
    transition: 'background-color 0.3s', 
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // or 'center', 'flex-start', etc.
    gap: '150px', // optional, adds space between buttons
  };
  return (
    <section id="services">
      <h2>Bienvenue a la fiche de demande d'inscription au tableau de l'ordre des professeur medico sanitaire infirmier , sage - femme et technico Medico-sanitaire </h2>
      <div className={styles.card}>
      <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <p>République du Cameroun<br/>Paix Travail Patrie</p>
        </div>
        <div className={styles.headerCenter}>
          <h3>Ordre des Professions Medico-Sanitaires : Infirmier, Sage-femme et Technicien Medico-Sanitaire</h3>
          <p>Association of the Professions of nurse, Midwife and Health Technician</p>
          <p>Créé par la loi No 84 010 du 5 décembre 1984  Created by law No 84 010 of December 5th, 1984</p>
          <p>SECTION REGIONALE DE LITTORAL LITTORAL REGIONAL SECTION</p>
        </div>
        <div className={styles.headerRight}>
          <p>Republic of Cameroon<br/>Peace Work Fatherland</p>
        </div>
      </header>

      <div className={styles.contactInfo}>
        <p>BP : 7579 Douala</p>
        <p>Email: opsmlittoral50@gmail.com | Contact Président: 699 13 67 80 | hilaresaha@yahoo.com</p>
        <p>Secrétaire Général: 695 79 71 10 | adriensooh25@yahoo.fr</p>
        <p>Afriland First Bank N°: 00025  06281141001  46</p>
      </div>

      <h2 className={styles.formTitle}>DEMANDE DINSCRIPTION AU TABLEAU DE LORDRE<br/>APPLICATION FORM</h2>

      <form onSubmit={handleSubmit}> 
        
        <label htmlFor="name">Nom et prénom / Name and surnames:</label>
        <input type="text" id="name" name="name" placeholder='enter your name' required onChange={(e) => handleChange(e)}/>
      
           <div>
           <label htmlFor="Sex">Sexe /Sex :</label>
          <select id="sex" name="sex" onChange={(e) => handleChange(e)} >
            <option value="male">male</option>
            <option value="female">female</option>
            
            
          </select>
           
              </div>
              <label htmlFor="region">Région / Region:</label>
          <select id="region" name="region" onChange={(e) => handleChange(e)} >
            <option value="central">Central</option>
            <option value="littoral">Littoral</option>
            <option value="northwest">Northwest</option>
            <option value="southwest">Southwest</option>
            
          </select>
        <label htmlFor="nationality">Nationalité / Nationality:</label>
        <input type="text" id="nationality" name="nationality" placeholder='enter your nationality' required onChange={(e) => handleChange(e)} />

        <label htmlFor="dob">Date et lieu de naissance / Date and place of birth:</label>
        <input type="text" id="dob" name="dob" placeholder='enter your place of birth' required onChange={(e) => handleChange(e)} />

        <label htmlFor="address">Adresse personnelle (tel / BP) / Home address (phone / P.O. BOX):</label>
        <input type="text" id="address" name="address" placeholder='enter your home address' required onChange={(e) => handleChange(e)}  />

        <label htmlFor="email">E.mail:</label>
        <input type="email" id="email" name="email" placeholder='enter your email address' required onChange={(e) => handleChange(e)} />

        <label htmlFor="school">École de formation / Training School:</label>
        <input type="text" id="school" name="school" placeholder='enter your training school' required onChange={(e) => handleChange(e)} />

        <label htmlFor="qualification">Qualification professionnelle / Professional qualification:</label>
        <input type="text" id="qualification" name="qualification" placeholder='enter your professional qualification' required onChange={(e) => handleChange(e)} />

        <label htmlFor="membership">Êtes-vous membres dune autre société professionnelle / Membership of another professional society:</label>
        <select id="membership" name="membership" onChange={(e) => handleChange(e)}>
          <option value="yes">Oui / Yes</option>
          <option value="no">Non / No</option>
        </select>

        <label htmlFor="which">Laquelle / Which:</label> 
        <input type="text" id="which" name="which" placeholder='enter your membership' onChange={(e) => handleChange(e)} />

        <label htmlFor="profilePicture">Télécharger votre photo / Upload your picture:</label>
        <input type="file" id="profilePicture" name="profilePicture" accept="image/*" onChange={(e) => handleChange(e)} />

        
        <div style={containerStyle}>
    <button style = {buttonStyle} type='button'>Reset</button> 
    <button style = {buttonStyle} type='submit'>Submit</button>
    </div>
        <h3 className={styles.piecesTitle}>PIECES A JOINDRE / DOCUMENTS REQUIRED:</h3>
        <ol className={styles.documentList}>
          <li>Copies certifiées conformes des diplômes requis ou titres / Certified true copies of certificates</li>
          <li>Copie certifiée conforme acte de naissance / A certified true copy of birth certificate</li>
          <li>Extrait de casier judiciaire (bulletin n°03) / A copy of police record (bulletin n°03)</li>
          <li>(3) photos didentité 4X4 / (3) Passport size photographs</li>
          <li>Reçu de banque / Bank receipt</li>
        </ol>
      </form>
    </div>
    </div> 
    </section>
  );
}

export default Services1;
