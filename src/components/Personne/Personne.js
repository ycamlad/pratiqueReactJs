import React, {Component} from "react";
/*Ecrire nom de la classe pas de la fonction */
//import AgePersonne from "./AgePersonne/AgePersonne";
import SexPersonne from "./SexPersonne/SexPersonne";
/*importation de la classe MonTitre du fichier Personne.module.css  */
import classes from "./Personne.module.css";


/*class Personne ne fait qu'afficher des informations, na'a aucune logique d'erriere et pourrais etres un fonctions
* alors cette class va dans le dossier component*/

                //objet
class personne extends Component  {

  /* Ancienne facon d'utiliser les proprietes de la classe
   constructor(props){
        super(props);
    }*/
    render() {


        // Facons plus coherente et structurer d'ajout de css dynamqiue
        const styles ={
            backgroundColor:"blue",
            color:"white",
        }
        // autre facon de faire des changements au style apres la declaration de la const styles
        styles.fontSize = "14px";




        return (
            <>
                {/* props est comme si j'instanciais un objet*/}
                {/* Ecrire le nom de proriete exactement comme elle est (Nom,Age,Sexe)  */}
                <h1 className={classes.monTitre}>{this.props.Nom}</h1>
                {this.props.children}

               <SexPersonne Sexe={this.props.Sexe}/>
                <button onClick={this.props.click}>Anniversaire</button>
            </>
        );
    }
}

export default personne;