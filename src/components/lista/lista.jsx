import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';
// import firebase from 'firebase';
// import '../../../config/conf-firebase.js';
import firebase from '../../../config/conf-firebase.js';

const KEYS_TO_FILTERS = ['nombre','tel'];

export default class Lista extends React.Component{
	constructor(){
		super();
		this.state = {
			datos: [],
            searchTerm: ''
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
                datos: todos
            })
		});


	}
    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
	render(){
		const filteredPhones = this.state.datos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        if (this.state.datos.length == 0) {
            return(
                <div className="jumbotron text-center">
                  <h1>Cargando datos!</h1>
                  
                </div>
            )
        } else{
		return(
			<div className="row"><br/>
                <SearchInput placeholder="Buscador" className="search-input form-group my-input text-center" onChange={this.searchUpdated.bind(this)} />
                {
                    filteredPhones.map((dato, key) => {
                        // console.log(key)
                        return(
                            <div key={key}>
                             <div className="panel panel-default col-xs-11 col-xs-offset-0 col-sm-6 col-sm-offset-3">
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

