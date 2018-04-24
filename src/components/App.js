import React, { Component } from 'react';
import logo from '../logo.svg';
import base from '../base';
import BudgetBox from './BudgetBox';
import sampleIncome from '../sample-income';
import sampleOutcome from '../sample-outcome';
import '../css/App.css';


// Anyone Can Login with Facebook
	// Create OR Pull User 'store'


class App extends React.Component {

	constructor () {
		super();

		this.removeDatalineIn = this.removeDatalineIn.bind(this);
		this.removeDatalineOut = this.removeDatalineOut.bind(this);
		this.loadSampleData = this.loadSampleData.bind(this);
		this.addDatalineIn = this.addDatalineIn.bind(this);
		this.addDatalineOut = this.addDatalineOut.bind(this);
		this.checkFlow = this.checkFlow.bind(this);

		// getinitialState
		this.state= {
			budgetIn: {},
			budgetOut: {}
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

	addDatalineIn(item) {
	    // update our state
	    const budgetIn = {...this.state.budgetIn};
	    // add in our new item
	    const timestamp = Date.now();
	    budgetIn[`budget-${timestamp}`] = item;
	    // set state
	    this.setState({ budgetIn });
	}

	addDatalineOut(item) {
	    // update our state
	    const budgetOut = {...this.state.budgetOut};
	    // add in our new item
	    const timestamp = Date.now();
	    budgetOut[`budget-${timestamp}`] = item;
	    // set state
	    this.setState({ budgetOut });
	}

	removeDatalineIn(key) {
   		const budgetIn = {...this.state.budgetIn};
	    delete budgetIn[key];
	    this.setState({ budgetIn });
	}

	removeDatalineOut(key) {
   		const budgetOut = {...this.state.budgetOut};
	    delete budgetOut[key];
	    this.setState({ budgetOut });
	}

	loadSampleData() {
		this.setState({
			budgetIn: sampleIncome,
			budgetOut: sampleOutcome
		});
	}

	checkFlow(e){
		if(e.income === true){
			return true
			console.log('🙂')
		}else{
			return false
			console.log('🙁')

		}
	}


  render() {
    return (
      <div className="budget-app">
     	 <div className="main">
     	 	<BudgetBox
     	 		key={1}
     	 		source="Income"
     	 		flow={this.checkFlow}
     	 		budget={this.state.budgetIn}
     	 		addDataline={this.addDatalineIn}
     	 		removeDataline={this.removeDatalineIn}
     	 	/>
     	 	<BudgetBox
     	 		key={2}
     	 		source="Outcome"
     	 		flow={this.checkFlow}
     	 		budget={this.state.budgetOut}
     	 		addDataline={this.addDatalineOut}
     	 		removeDataline={this.removeDatalineOut}
     	 	/>
     	 </div>
     	 <div className="footer-total">
     	 	<button onClick={this.loadSampleData}>Load Fake Data</button>
     	 </div>
      </div>
    );
  }
}

export default App;


