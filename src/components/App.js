import React, { Component } from 'react';
import logo from '../logo.svg';
import base from '../base';
import Income from './Income';
import Outcome from './Outcome';
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
		this.addData = this.addData.bind(this);
		this.checkFlow = this.checkFlow.bind(this);
		this.getTotal = this.getTotal.bind(this);
		this.getTotalFooter = this.getTotalFooter.bind(this);

		// getinitialState
		this.state= {
			budgetIn: {},
			budgetOut: {},
			bIa: 0,
			bOa: 0
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

	updateAmount(){

	}

	getTotal(budget,source){
		let addUpAmount = 0;

		for (let key in budget) {
			addUpAmount += parseInt(budget[key].amount);
		}

		if(source === "Income"){
			this.setState({
			    bIa: addUpAmount
			}, function () {
			    console.log("Here is Income amount ", this.state.bIa);
			    this.getTotalFooter()
			});
		}else{
			this.setState({
			    bOa: addUpAmount
			}, function () {
			    console.log("Here is Income amount ", this.state.bOa);
			    this.getTotalFooter()
			});
		}

	}

	addData(item, source) {
		const timestamp = Date.now();
		if(source === "Income"){
			const budgetIn = {...this.state.budgetIn};
			budgetIn[`budget-${timestamp}`] = item;
			this.setState({ budgetIn });
			this.getTotal(budgetIn,"Income");
		}else{
			const budgetOut = {...this.state.budgetOut};
			budgetOut[`budget-${timestamp}`] = item;
			this.setState({ budgetOut });
			this.getTotal(budgetOut,"Outcome");
		}

	}


	addDatalineIn(item) {
	    // update our state
	    const budgetIn = {...this.state.budgetIn};
	    // add in our new item
	    const timestamp = Date.now();
	    budgetIn[`budget-${timestamp}`] = item;
	    // set state
	    this.setState({
	    	budgetIn
	    }, function () {
	    	this.getTotalFooter()
	    });
	}

	addDatalineOut(item) {
	    // update our state
	    const budgetOut = {...this.state.budgetOut};
	    // add in our new item
	    const timestamp = Date.now();
	    budgetOut[`budget-${timestamp}`] = item;
	    // set state
	    this.setState({
	    	budgetOut
	    }, function () {
	    	this.getTotalFooter
	    });
	}

	removeDatalineIn(key) {
   		const budgetIn = {...this.state.budgetIn};
	    delete budgetIn[key];
	    this.setState({
	    	budgetIn
	    }, function () {
	    	this.getTotalFooter
	    });
	}

	removeDatalineOut(key) {
   		const budgetOut = {...this.state.budgetOut};
	    delete budgetOut[key];
	    this.setState({
	    	budgetOut
	    }, function () {
	    	this.getTotalFooter
	    });
	}

	loadSampleData() {

		this.setState({
			budgetIn: sampleIncome,
			budgetOut: sampleOutcome
		}, function () {
			this.getTotal(this.state.budgetIn,"Income")
			this.getTotal(this.state.budgetOut,"Outcome")
			this.getTotalFooter
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

	getTotalFooter (){
		let addUpAmount = parseInt(this.state.bIa - this.state.bOa);
		return addUpAmount;
	}

  render() {
    return (
      <div className="budget-app">
     	 <div className="main">
     	 	<Income
     	 		key={1}
     	 		source="Income"
     	 		flow={this.checkFlow}
     	 		getTotal={this.getTotal}
     	 		budget={this.state.budgetIn}
     	 		addDataline={this.addData}
     	 		removeDataline={this.removeDatalineIn}
     	 	/>
     	 	<Outcome
     	 		key={2}
     	 		source="Outcome"
     	 		flow={this.checkFlow}
     	 		getTotal={this.getTotal}
     	 		budget={this.state.budgetOut}
     	 		addDataline={this.addData}
     	 		removeDataline={this.removeDatalineOut}
     	 	/>
     	 </div>
     	 <div className="footer-total">
     	 	<div className="total-value">
     	 		Total: {this.getTotalFooter()}
     	 	</div>
     	 	<button onClick={this.loadSampleData}>Load Fake Data</button>
     	 </div>
      </div>
    );
  }
}

export default App;


