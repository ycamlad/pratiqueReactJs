import React from "react";

/*Fichier Profession.js ne fait qu'afficher des informations, na'a aucune logique d'erriere, aucun state et est une fonctions
*  va dans le dossier components*/
const profession = props => {
   let couleur;
    if (props.salaire <=20000) {
         couleur = {
            backgroundColor:"red"
        }
    }
    else if ((props.salaire>20000) && (props.salaire<=60000)){
        couleur= {
            backgroundColor:"green",
            fontSize:"15px"
        }
    }
    else if (props.salaire>60000) {
        couleur = {
            backgroundColor: "goldenrod",
            fontWeight:"bold",
            fontSize:"20px"
        }
    }
        return (
            <>
                <p> et je suis un/une {props.job}</p>

                <p style={couleur}> je fais un salaire de {props.salaire}$ </p>

            </>
        );


}

export default profession;
