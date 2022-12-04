import React from 'react'
import Typewriter from 'typewriter-effect';

function accueil(){
  return (
   <div className="Accueil">
      <div className="texte">
        <Typewriter
          onInit={(typewriter)=>{
            typewriter.typeString("Bienvenue chez nous")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Nous somme une société de développement informatique")
            .start();
          }}
        />
      </div>
      <div className="btn">
        <a href="# ">En savoir plus </a>
      </div>
      </div>
    
  );
};

export default accueil;