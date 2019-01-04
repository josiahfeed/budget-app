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
		this.getTotalInput = this.getTotalInput.bind(this);
		this.getTotalFooter = this.getTotalFooter.bind(this);

		// getinitialState
		this.state= {
			budgetIn: {},
			budgetOut: {},
			totalIncome: 0,
			totalOutcome: 0
		};

	}

	componentWillMount() {
		this.budgetIn = base.syncState(`budgetIn/`, {
			context: this,
			state: 'budgetIn'
		});
		this.budgetOut = base.syncState(`budgetOut/`, {
			context: this,
			state: 'budgetOut'
		});
		this.totalIncome = base.syncState(`totalIncome/`, {
			context: this,
			state: 'totalIncome'
		});
		this.totalOutcome = base.syncState(`totalOutcome/`, {
			context: this,
			state: 'totalOutcome'
		});
	}


	componentWillUnmount(){
		base.removeBinding(this.budgetIn);
		base.removeBinding(this.budgetOut);
		base.removeBinding(this.totalIncome);
		base.removeBinding(this.totalOutcome);
	}

	updateDataline() {

	}

	updateAmount(){

	}


	getTotalInput(budget,source){
		let addUpAmount = 0;

		for (let key in budget) {
			addUpAmount += parseInt(budget[key].amount);
		}


		return addUpAmount;

	}


	getTotal(budget,source){
		let addUpAmount = 0;

		for (let key in budget) {
			addUpAmount += parseInt(budget[key].amount);
		}

		if(source === "Income"){
			this.setState({
			    totalIncome: addUpAmount
			}, function () {
			    console.log("Here is Income amount ", this.state.totalIncome);
			    this.getTotalFooter()
			});
		}else{
			this.setState({
			    totalOutcome: addUpAmount
			}, function () {
			    console.log("Here is Outcome amount ", this.state.totalOutcome);
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
   		const totalIncome = {...this.state.totalIncome};
	    delete budgetIn[key];
	    this.setState({
	    	budgetIn
	    }, function () {
	    	this.getTotal(budgetIn,"Income");
	    });
	}

	removeDatalineOut(key) {
   		const budgetOut = {...this.state.budgetOut};
	    delete budgetOut[key];
	    this.setState({
	    	budgetOut
	    }, function () {
	    	this.getTotal(budgetOut,"Outcome");
	    });
	}

	loadSampleData() {

		this.setState({
			budgetIn: sampleIncome,
			budgetOut: sampleOutcome
		}, function () {
			this.getTotal(this.state.budgetIn,"Income")
			this.getTotal(this.state.budgetOut,"Outcome")
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
		let addUpAmount = parseInt(this.state.totalIncome - this.state.totalOutcome);
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
     	 		getTotalInput={this.getTotalInput}
     	 		incomeTotal={this.state.incomeTotal}
     	 		budget={this.state.budgetIn}
     	 		addDataline={this.addData}
     	 		removeDataline={this.removeDatalineIn}
     	 	/>
     	 	<Outcome
     	 		key={2}
     	 		source="Outcome"
     	 		flow={this.checkFlow}
     	 		outcomeTotal={this.state.outcomeTotal}
     	 		getTotal={this.getTotal}
     	 		getTotalInput={this.getTotalInput}
     	 		budget={this.state.budgetOut}
     	 		addDataline={this.addData}
     	 		removeDataline={this.removeDatalineOut}
     	 	/>
     	 </div>
     	 <div className="footer-total">
     	 	<div className="total-value">
     	 		<input type="text" value={'$'+this.getTotalFooter()+ ' A MONTH LEFT'} readOnly />
     	 	</div>
     	 	<button onClick={this.loadSampleData}>Load Fake Data</button>
     	 </div>
      </div>
    );
  }
}

export default App;


