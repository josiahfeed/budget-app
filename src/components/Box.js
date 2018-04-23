import React from 'react';

class Box extends React.Component {

	constructor() {
		super();
		this.renderDataline = this.renderDataline.bind(this);
	}

	renderDataline(key) {
		const item = this.props.budget[key];
		return (
		  <li className={'dataline ' + key} key={key}>
			  <span>{item.name}</span>
			  <span>{item.amount}</span>
			  <button onClick={() => this.props.removeDataline(key)}>&times;</button>
		  </li>
		)
	}

	render() {
	  return(
		  <div className={'box-container box-' + this.props.cstKind}>
			<div className='box'>
				<div className='box-title'>
					<h1>{this.props.source}</h1>
				</div>
				<div className='data-container'>
					<ul className="data-list">
						{Object.keys(this.props.budget).map(this.renderDataline)}
					</ul>
				</div>
			</div>
			<div className='box-menu'>
				<div className='nav'></div>
			</div>
			<div className='box-total'>
				<div className='total-title'></div>
				<div className='total-value'></div>
			</div>
		  </div>
	  )
	}
}

// Box.propTypes = {
//   cstKind: React.PropTypes.string.isRequired
// };

export default Box;
