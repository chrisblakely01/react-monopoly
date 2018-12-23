import React, { Component } from 'react';
import './Board.css';

class Property extends Component {
	render() {
		return (
			<div class="property">
				<div class={`property-color-bar ${this.props.color}`}></div>
				<div class="property-name">{this.props.name}</div>
				<div class="property-cost">£{this.props.cost}</div>
			</div>
		);
	}
}

export default Property;
