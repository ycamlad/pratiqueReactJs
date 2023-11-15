import React from "react";

/*Fichier AgePersonne.js ne fait qu'afficher des informations, na'a aucune logique d'erriere, aucun state et est une fonctions
*  va dans le dossier component*/
const agePersonne = props =>{
    // javascript
    let now = new Date();
    let annee = now.getFullYear();
    // javascript
    return(

    <p>Jai {props.Age} ans - Annee ({annee-props.Age})</p>
    )
}

export default agePersonne;
/*exporte la fonction mais importe le fichier AgePersonne.js*/