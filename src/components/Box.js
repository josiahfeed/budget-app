import React from 'react';

class Box extends React.Component {

	constructor() {
		super();
		this.renderDataline = this.renderDataline.bind(this);
		this.createItem = this.createItem.bind(this);
	}



	createItem(event, source) {
		event.preventDefault();
		if(source === "Income"){
			console.log('Gonna make some money! 💵');
		}else{
			console.log('Not more Bills! 😵');
		}
		const item = {
			name: this.name.value,
			amount: this.amount.value,
			status: 'available',
		}
		this.props.addDataline(item, this.props.source);
		this.itemForm.reset();
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
		  <div className={'box-container box-' + this.props.source}>
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
					<div className='nav'>
						<form ref={(input) => this.itemForm = input} className="item-edit" onSubmit={(e) => this.createItem(e, this.props.source)}>
							<input ref={(input) => this.name = input} type="text" placeholder="Name" required />
							<input ref={(input) => this.amount = input} type="text" placeholder="Amount" required />
							<button type="submit">+ Add Item</button>
						</form>
					</div>
				</div>
				<div className='box-total'>
					<div className='total-title'>Total:</div>
					<div className='total-value'>Some Total</div>
				</div>

		  </div>
	  )
	}
}

// Box.propTypes = {
//   cstKind: React.PropTypes.string.isRequired
// };

export default Box;
