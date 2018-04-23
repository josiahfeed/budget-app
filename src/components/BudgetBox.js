import React from 'react';
import Box from './Box';

class BudgetBox extends React.Component {

	constructor() {
		super();
		this.checkFlow = this.checkFlow.bind(this);
	}

	checkFlow(e){
		if(e === true){
			return '🙂'
		}else{
			return '🙁'
		}
	}

	render() {
		return(
			<Box key={this.key} source={this.props.source} budget={this.props.budget} flow={this.checkFlow} removeDataline={this.props.removeDataline} />
		)
	}
}

// Budget.propTypes = {
//   cstKind: React.PropTypes.string.isRequired
// };

export default BudgetBox;
