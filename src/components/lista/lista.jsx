import React from 'react';
import '../../../config/conf-firebase.js';

import firebase from 'firebase';

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
		
        if (this.state.datos.length == 0) {
            console.log("Antes del if")
            return(
                <div className="jumbotron text-center">
                  <h1>Cargando datos!</h1>
                  
                </div>
            )
        } else{
        console.log("Despues del if")
		return(
			<div className="row"><br/>
                {
                    this.state.datos.map((dato, key) => {
                        // console.log(key)
                        return(
                            <div key={key}>
                             <div className="panel panel-default col-xs-10 col-xs-offset-1">
                               <div className="panel-body">
                               <div className="col-xs-1"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></div>
                                 <div className="col-xs-7">
                                     {dato.nombre.toUpperCase()}
                                 </div>
                                 <div className="col-xs-3 text-right"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
                                 <div className="col-xs-1 text-right"><b>{dato.tel}</b></div>
                               </div>
                             </div>
                             <div className="delete col-xs-1">
                                <span onClick={this.deleteTel.bind(this,dato.key)}>X</span>
                            </div>
                            </div>
                        )
                    })
                    
                }
                	
		    	
				
			</div>
                
		)}
	}
}

