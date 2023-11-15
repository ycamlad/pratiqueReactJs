import React,{Component} from "react";
import Personne from "./components/Personne/Personne";
//import Profession from "./components/Personne/Profession/Profession";
import Horloge from "./containers/Horloge/Horloge";
import "./App.css";
// import personne from "./components/Personne/Personne";
// import profession from "./components/Personne/Profession/Profession";
import AgePersonne from "./components/Personne/AgePersonne/AgePersonne";


class App extends Component {

    state= {
        personne :[

            {id:"1",Nom:"Charle",Age:45,Sexe:true },
            {id:"4",Nom:"Mark",Age:35,Sexe:true },
            {id:"6",Nom:"Francine",Age:60,Sexe:false },
        ],
        profession :[
            {job:"Professeur de mathematique",salaire:60000},
            {job:"Policier",salaire:45000},
            {job:"Ingenieure logiciel",salaire:90000},
        ]
    }
    /*Fonction*/
  // bonjour (prenom) {
  //        alert("salut "+prenom);
  // }
  // test(event){
  //     console.log(event);
  // }

    /*Super Important Pour Comprendre React*/
    anniversaireHandler = (id) => {
        console.log(this)
        const nCaseTabPersonne = this.state.personne.findIndex(element => {
          return  element.id === id;
        })
        /*fait une reference, cree une copy de Personne est une reference*/
        const newPersonne = {...this.state.personne[nCaseTabPersonne]}; /*genere une copy de la Personne et avec le parametre choisie la personne dans le tableau*/
        console.log(newPersonne.Age++); /*augmente l'age de la personne copiee*/


        /*copy du tableau Personne */
        const newTab = [...this.state.personne]; /*duplique le tableau de personne*/

        /*Nouveau tableau de Personne*/
        newTab[nCaseTabPersonne]=newPersonne; /*Remplace la personne a l'indice du tableau sur lequel on a clique par la nouvelle personne cree*/

        /*mets a jour le nouveau tableau*/
        this.setState({personne : newTab}) /*on remplace dans le state le tableau de personne par le nouveau tableau */

        /*Super Important*/


        /*point vers  l'objet initial alors les changements se font sur l'objet initial c'est un pointeur*/
        //const newPersonne = this.state.Personne[nCaseTabPersonne];

        // const newPersonnes = this.state.Personne.map(Personnes => {
        //     return{
        //         Nom:  Personnes.Nom,
        //         Age:  Personnes.Age +10,
        //         Sexe: Personnes.Sexe
        //     };
        // })
        // console.log(this.state.Personne);
        // console.log(newPersonnes);

       // const newPersonnes = [...this.state.Personne];
            /*Facons de de faire age++ sur tous les Personnes dans le tableau Personne*/
        // for(let i =0 ; i<newPersonnes.length;i++) {
        //     newPersonnes[i].Age++;
        // }
        /*setState sert au rafraichissement des donnees et du composent utiliser quand on veux faire la modification d'un state*/
        // this.setState({Personne:newPersonnes})

        // const newProfessions =[...this.state.Profession];
        // newProfessions[0].salaire+

    }
    render() {
        return (
            <>
                                {/*Fonction anonyme*/}
                {/*<button onClick={() => this.bonjour(this.state.Personne[0].Nom)}>Anniversaire</button>*/}
                {/*<button onClick={(event) => this.test(event.target)}>Test</button>*/}

                <button onClick={() => this.anniversaireHandler()}>Anniversaire</button>
                {/* prendre le nom de proriete exactement comme elle est (Nom,Age,Sexe)  */}
                <Horloge/>
                {this.state.personne.map((personne) =>{

                    return (
                        <Personne key={personne.id} {...personne} click={() => this.anniversaireHandler(personne.id)}>
                            <AgePersonne Age={personne.Age}/>
                        </Personne>
                    );
                })}

                {/*Sert a envoyer tous les proprieter qui est a cette index*/}

               {/*<Personne {...this.state.Personne[0]} click={() => this.anniversaireHandler(0)}/>*/}
               {/* <Profession*/}
               {/*     {...this.state.Profession[0]}*/}
               {/* />*/}

               {/* <Personne Nom={this.state.Personne[1].Nom} Age={this.state.Personne[1].Age} Sexe={this.state.Personne[1].Sexe} click={this.anniversaireHandler.bind(this,1)}/>*/}
               {/* <Profession*/}
               {/*     {...this.state.Profession[1]}*/}
               {/* />*/}
               {/* <Personne Nom={this.state.Personne[2].Nom} Age={this.state.Personne[2].Age} Sexe={this.state.Personne[2].Sexe } click={() => this.anniversaireHandler(2)}/>*/}

               {/* <Profession*/}
               {/*     {...this.state.Profession[2]}*/}

            </>
        )
    }
}


export default App;