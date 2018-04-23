import React, { Component } from 'react';
import logo from '../logo.svg';
import base from '../base';
import Box from './Box';
import sampleIncome from '../sample-income';
import sampleOutcome from '../sample-outcome';
import '../css/App.css';


// Anyone Can Login with Facebook
	// Create OR Pull User 'store'


class App extends React.Component {

	constructor () {
		super();

		this.removeDataline = this.removeDataline.bind(this);
		this.loadSampleData = this.loadSampleData.bind(this);

		// getinitialState
		this.state= {
			budget: {}
		};

	}


	//componentWillMount() {
	//	this.ref = base.syncState(`${this.props.params.uid}`, {
	//		context: this,
	//		state: 'budget'
	//	});
	//}
	//componentWillUnmount(){
	//	base.removeBinding(this.ref);
	//}

	updateDataline() {

	}

	addDataline() {

	}

	removeDataline(key) {
   		const budget = {...this.state.budget};
	    delete budget[key];
	    this.setState({ budget });
	}

	loadSampleData() {
		this.setState({
			budget: sampleBudget
		});
	}



  render() {

    return (
      <div className="budget-app">

     	 <div className="main">
     	 	<Box key={1} budget={this.state.budget} removeDataline={this.removeDataline} cstKind="income" />
     	 	<Box key={2} budget={this.state.budget} removeDataline={this.removeDataline} cstKind="outcome" />
     	 </div>
     	 <div className="footer-total">
     	 	<button onClick={this.loadSampleData}>Load Fake Data</button>
     	 </div>
      </div>
    );
  }
}

export default App;


