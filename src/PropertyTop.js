import React, { Component } from 'react';
import './TopSide.css';

class PropertyLeft extends Component {
	render() {
		return (
			<div class="property-top">
				<div class="property-top-content">
					<div class="property-top-name">{this.props.name}</div>
					<div class="property-top-cost">£{this.props.cost}</div>
				</div>
				<div class={`property-top-color-bar ${this.props.color}`}></div>
			</div>
		);
	}
}

export default PropertyLeft;
