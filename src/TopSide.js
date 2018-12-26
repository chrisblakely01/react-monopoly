import React, { Fragment } from 'react';
import './TopSide.css';
import PropertyTop from './PropertyTop';
import Chance from './Chance';
import Railroad from './Railroad';
import Utility from './Utility';

const BottomRow = () => (
	<Fragment>
		<div class="top-tile top-row-1">
			<div class="free-parking-tile">
				Free Parking
			</div>
		</div>
		<div class="top-tile top-row-2">
			<PropertyTop color="red" name="Kentucky Avenue" cost="220" />
		</div>
		<div class="top-tile top-row-3">
			<Chance />
		</div>
		<div class="top-tile top-row-4">
			<PropertyTop color="red" name="Indiana Avenue" cost="220" />
		</div>
		<div class="top-tile top-row-5">
			<PropertyTop color="red" name="Illinois Avenue" cost="220" />
		</div>
		<div class="top-tile top-row-6">
			<Railroad />
		</div>
		<div class="top-tile top-row-7">
			<PropertyTop color="yellow" name="Atlantic Avenue" cost="260" />
		</div>
		<div class="top-tile top-row-8">
			<PropertyTop color="yellow" name="Ventnor Avenue" cost="260" />
		</div>
		<div class="top-tile top-row-9">
			<Utility/>
		</div>
		<div class="top-tile top-row-10">
			<PropertyTop color="yellow" name="Marvin Gardens" cost="280" />
		</div>
	</Fragment>
);

export default BottomRow 
