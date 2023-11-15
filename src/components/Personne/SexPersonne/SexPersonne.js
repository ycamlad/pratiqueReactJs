import React from "react";

/*Fichier SexPersonne.js ne fait qu'afficher des informations, na'a aucune logique d'erriere, aucun state et est une fonctions
*  va dans le dossier component*/
const sexPersonne = props =>{
// Facons plus coherente et structurer d'ajout de css dynamqiue
let styles;
// autre facon de faire des changements au style apres la declaration de la const styles
 // styles.fontSize="14px";

if(props.Sexe){
  styles={
    backgroundColor:"aqua"
  }
  return   <p style={styles}>je suis un {props.Sexe ? "Homme":"Femme"}</p>;

}else{
  styles={
    backgroundColor:"darkmagenta",
    color:"white"
  }
  return   <p style={styles}>je suis une {props.Sexe ? "Homme":"Femme"}</p>;
}


/*facon dynamique d'utiliser du css  */
// <P>  style={{objet Javascript}} </p>
 // return   <p style={styles}>je suis  {props.Sex}</p>;
}
export default sexPersonne;