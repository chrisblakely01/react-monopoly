import React, { Component } from 'react';
import './LeftSide.css';

class PropertyLeft extends Component {
	render() {
		return (
			<div class="property-left">
				<div class="property-left-content">
					<div class="property-left-name">{this.props.name}</div>
					<div class="property-left-cost">£{this.props.cost}</div>
				</div>
				<div class={`property-left-color-bar ${this.props.color}`}></div>
			</div>
		);
	}
}

export default PropertyLeft;
