import React from 'react';
// import firebase from '../../../config/conf-firebase.js';

import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDEVee0ocJ4OStNHptgwaSVIPETXpQ6wuE",
    authDomain: "contactos-cd456.firebaseapp.com",
    databaseURL: "https://contactos-cd456.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "312126640610"
};

firebase.initializeApp(config);
export default class Lista extends React.Component{
	constructor(){
		super();
		this.state = {
			datos: []
		}
	}
    deleteTel(id){
        const nameRef = firebase.database().ref().child('contactos').child(id).remove();
        console.log("Eliminado")
    }
	componentWillMount(){
        
		const nameRef = firebase.database().ref().child('contactos').orderByChild('nombre')
		nameRef.on('value', (snapshot) => { 
            const todos = [];
			// console.log(snapshot.val())
          snapshot.forEach((data) => {
            // console.log(data.val());
            todos.push({
                key: data.key,
                nombre: data.val().nombre,
                tel: data.val().telefono
            }); 
          })
		  
            this.setState({
                datos: todos,
            })
		});


	}
	render(){
		// console.log(this.state.datos)
		return(
			<div className="row"><br/>
                {
                    this.state.datos.map((dato, key) => {
                        // console.log(key)
                        return(
                            <div>
                             <div className="panel panel-default col-xs-10 col-xs-offset-1" key={key}>
                               <div className="panel-body">
                                 <div className="col-xs-6">
                                     <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                     &nbsp;&nbsp;
                                     {dato.nombre}
                                 </div>
                                 <div className="col-xs-4 text-right"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
                                 <div className="col-xs-2 text-right"><b>{dato.tel}</b></div>
                               </div>
                             </div>
                             <div className="delete col-xs-1" key={dato.key}>
                                <span onClick={this.deleteTel.bind(this,dato.key)}>X</span>
                            </div>
                            </div>
                        )
                    })
                    
                }
                	
		    	
				
			</div>
                
		)
	}
}

