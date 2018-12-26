import React, { Component } from 'react';
import './RightSide.css';

class PropertyRight extends Component {
	render() {
		return (
			<div class="property-right">
				<div class={`property-right-color-bar ${this.props.color}`}></div>
				<div class="property-right-content">
					<div class="property-right-name">{this.props.name}</div>
					<div class="property-right-cost">£{this.props.cost}</div>
				</div>

			</div>
		);
	}
}

export default PropertyRight;
