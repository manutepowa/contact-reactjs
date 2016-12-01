import React from 'react';
// import firebase from 'firebase';
import swal from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';
import firebase from '../../../config/conf-firebase.js';


export default class Form extends React.Component{
	constructor(props){
		super(props);
	}
	setData(){
		const { nombre, telefono } = this.refs;
        if (nombre.value == "" || telefono.value == "") {
          swal("Oops...", "No pueden haber campos vacios!", "error");
        }
		else{
            console.log(nombre.value) 

            firebase.database().ref().child('contactos').push({
                nombre: nombre.value.toUpperCase(),
                telefono: telefono.value
            });

            nombre.value = telefono.value = "";
        }

	}
	render(){
		return(
			<div className="row">
                <div className="col-xs-10 col-xs-offset-1 text-center">
    				<h4>Nuevo Teléfono</h4>
    				<form className="form-inline">
    				  <div className="form-group">
    				    <input ref="nombre" type="text" className="form-control" placeholder="Nombre" />
    				  </div>
    				  <div className="form-group">
    				    <input ref="telefono" type="text" className="form-control" placeholder="Telefono"/>
    				  </div>
    				  <button type="button" onClick={this.setData.bind(this)} className="btn">Guardar</button>
    				</form>
                <hr/>
                </div>
			</div>
		)
	}
}