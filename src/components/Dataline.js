import React from 'react';

// NOT USED ANYMORE - MOVED INTO renderInventory and then into renderDataline in BOX.JS

class Dataline extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);


  }


   renderInventory(key) {
    const fish = this.props.details[key];
    return (
	      <li className='dataline' key={key}>
		      <span>{this.props.details.name}</span>
		      <span>{this.props.details.amount}</span>
		      <button onClick={() => this.props.removeDataline(key)}>&times;</button>
	      </li>
    )
  }

  render() {
	  return(
		<div className={'dataline-cont ' + 'key' + this.props.index} key={this.props.key}>
			{Object.keys(this.props).map(this.renderInventory)}
		</div>
	  )
	}
}

// Box.propTypes = {
//   cstKind: React.PropTypes.string.isRequired
// };

export default Dataline;
