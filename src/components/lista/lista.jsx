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
	componentWillMount(){
		const nameRef = firebase.database().ref().child('contactos')
		nameRef.on('value', (snapshot) => { 
			// console.log(snapshot.val()) 
		  this.setState({
		    datos: this.state.datos.concat(snapshot.val());
		  })
		});

	}
	render(){
		return(
			<div className="row"><br/>
				<div className="panel panel-default">
				  <div className="panel-body">
				    <div className="col-lg-6">
				    	<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
				    	&nbsp;&nbsp;
				    	{this.state.name}
				    </div>
				    <div className="col-lg-4 text-right"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
				    <div className="col-lg-2 text-right"><b>96 525 555 555</b></div>
				  </div>
				</div>
			</div>
		)
	}
}