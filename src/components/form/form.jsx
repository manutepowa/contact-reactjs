import React from 'react';
import firebase from 'firebase';

// const config = {
// 	apiKey: "AIzaSyDEVee0ocJ4OStNHptgwaSVIPETXpQ6wuE",
//     authDomain: "contactos-cd456.firebaseapp.com",
//     databaseURL: "https://contactos-cd456.firebaseio.com",
//     storageBucket: "",
//     messagingSenderId: "312126640610"
// };

// firebase.initializeApp(config);

export default class Form extends React.Component{
	constructor(props){
		super(props);
	}
	setData(){
		const { nombre, telefono } = this.refs;
		console.log(nombre.value) 

		firebase.database().ref().child('contactos').push({
		    nombre: nombre.value,
		    telefono: telefono.value
		  });

	}
	render(){
		return(
			<div className="row">
            <div className="col-lg-10 col-lg-offset-3">
				<h4>Nuevo Teléfono</h4>
				<form className="form-inline">
				  <div className="form-group">
				    <input ref="nombre" type="text" className="form-control" placeholder="Nombre" />
				  </div>
				  <div className="form-group">
				    <input ref="telefono" type="text" className="form-control" placeholder="Telefono" />
				  </div>
				  <button type="button" onClick={this.setData.bind(this)} className="btn btn-success">Guardar</button>
				</form>
            </div>
			</div>
		)
	}
}