import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form/form.jsx';
import Lista from './components/lista/lista.jsx';
import './styles/style.css';
class App extends Component {
    constructor() {
      super();
    }
 
    render() {
        return ( 
            <div>
                <div className="init">
                    
                </div>
                <div className="col-lg-10 col-lg-offset-1">
                   <Form />
                   <Lista />
                </div>
            </div>
            
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById("app"));