import React from 'react';
import Box from './Box';

class Income extends React.Component {

	// calculate Total
	// pass total up to state

	render() {
		return(
			<Box
				key={this.key}
				source={this.props.source}
				flow={this.props.flow}
				getTotalInput={this.props.getTotalInput}
				inc={this.props.incomeTotal}
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

export default Income;
