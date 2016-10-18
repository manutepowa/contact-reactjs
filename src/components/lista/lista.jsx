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
		    datos: snapshot.val()
		    
		  })

		});


	}
	render(){
		console.log(this.state.datos)
		return(
			<div className="row"><br/>

				{

					for( const key in this.state.datos ) {
					  console.log( key + '->' + this.state.datos[key] )  // 'foo->hello', 'bar->world'
					}
		    // 		this.state.datos.map((dato, key) => {
		    // 			var k = Object.keys(dato)[0];
		    // 			// console.log(key)

						// return(
						// 	<div className="panel panel-default" key={key}>
						// 	  <div className="panel-body">
						// 	    <div className="col-lg-6">
						// 	    	<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
						// 	    	&nbsp;&nbsp;
						// 	    	{dato[k].nombre}
						// 	    </div>
						// 	    <div className="col-lg-4 text-right"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
						// 	    <div className="col-lg-2 text-right"><b>{dato[k].telefono}</b></div>
						// 	  </div>
						// 	</div>
						// )
		    // 		})
		    	}
				
			</div>
		)
	}
}