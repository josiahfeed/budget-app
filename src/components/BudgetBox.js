import React from 'react';
import Box from './Box';

class BudgetBox extends React.Component {

	render() {
		return(
			<Box
				key={this.key}
				source={this.props.source}
				flow={this.flow}
				budget={this.props.budget}
				removeDataline={this.props.removeDataline}
				addDataline={this.props.addDataline}
			/>
		)
	}
}

// Budget.propTypes = {
//   cstKind: React.PropTypes.string.isRequired
// };

export default BudgetBox;
