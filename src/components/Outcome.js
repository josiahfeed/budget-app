import React from 'react';
import Box from './Box';

class Outcome extends React.Component {

	render() {
		return(
			<Box
				key={this.key}
				source={this.props.source}
				flow={this.props.flow}
				getTotalInput={this.props.getTotalInput}
				inc={this.props.outcomeTotal}
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

export default Outcome;
