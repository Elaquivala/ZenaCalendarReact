import React, { useState } from 'react';

export const NewEventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  return(
    <>
      <div id="newEventModal">
        <h2>Nouvel Evenement</h2>

        <input 
          className={error ? 'error' : ''}
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          id="eventTitleInput" 
          placeholder="Titre" 
        />

        <h3>Couleur de l'évent</h3>

        <input
         type="color" 
         id="couleurevent" 
         name="couleur"
         
        />
  <br></br>
  <br></br>
  <br></br>

        <button 
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
            } else {
              setError(true);
            }
          }} 
          id="BtnSave">Sauvegarder</button>


        <button 
          onClick={onClose}
          id="BtnCancel">Annuler</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
