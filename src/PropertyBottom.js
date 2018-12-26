import React, { Component } from 'react';
import './BottomSide.css';

class PropertyBottom extends Component {
	render() {
		return (
			<div class="property-bottom">
				<div class={`property-bottom-color-bar ${this.props.color}`}></div>
				<div class="property-bottom-content">
					<div class="property-bottom-name">{this.props.name}</div>
					<div class="property-bottom-cost">£{this.props.cost}</div>
				</div>
			</div>
		);
	}
}

export default PropertyBottom;
