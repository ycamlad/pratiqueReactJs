import React, {Component} from "react";
import classes from "./Horloge.module.css";

/*Le fichier Horloge.js contient une classe qui contient une fonction et des states alors elle va dans container */


class Horloge extends Component  {
  /*  constructor(props) {
        super(props);
        this.state = {date: new Date()};

    }*/
    state = {
        date: new Date(),
        compteur : 1

    };
    tick = () =>{
                            /*oldState est un fonction qui prend la valeurs du state precedent */
        this.setState((oldState)=>
            {
                 return{
                     date: new Date(),
                     compteur : oldState.compteur + 1
                 }


            });

    }
    componentDidMount() {
        console.log('composant monte')
        this.timerID=setInterval(() => this.tick(),1000)
    }
    componentWillUnmount() {

        clearInterval(this.timerID);
    }

    render() {

        console.log('composant afficher')
        return (
            <>
                <h2 className={classes.monTitre}><p>Horloge {this.state.date.toLocaleTimeString()}</p></h2>
                <p>Compteur : {this.state.compteur}</p>
            </>
        )
    }

}
export default Horloge;