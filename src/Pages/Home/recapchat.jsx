import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const MonFormulaire = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Veuillez vérifier que vous n'êtes pas un robot !");
      return;
    }
    
    // Logique pour soumettre le formulaire
    // Simuler une soumission réussie
    setMessage("Formulaire soumis avec succès !");
    console.log("Formulaire soumis avec succès !");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Mon Formulaire</h2>
        <input type="text" placeholder="Votre nom" required />
        <ReCAPTCHA
          sitekey="6Lfm4tMqAAAAAAm_gbvi4BYoRGHOtQjUeDmkZb52" // Remplacez par votre clé de site
          onChange={(value) => setCaptchaValue(value)}
        />
        <button type="submit">Soumettre</button>
      </form>
      {message && <p>{message}</p>} {/* Affichage du message de succès */}
    </div>
  );
};

export default MonFormulaire;
