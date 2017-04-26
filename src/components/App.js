import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    let amas = ['dumptyd', 'frag-o-matic', 'faryadi', 'repmovsd', 'mani'];
    let list = amas.map( ama => (
      <div className="list-item">
        <span className="glyphicon glyphicon-hand-right"> </span> 
        <a href="#">{ ama }</a>
        <span className="label label-primary">Fancy flair</span>
        <hr/>
      </div>
    ));
    return (
      <div className="">
        <div className="container">
          <div className="panel panel-primary ama-panel">
            <div className="panel-heading">
              Ongoing AMAs
            </div>
            <div className="panel-body">
              { list }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
