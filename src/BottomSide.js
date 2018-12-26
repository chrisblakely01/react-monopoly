import React, {Fragment} from 'react';
import PropertyBottom from './PropertyBottom';
import CommunityChest from './CommunityChest';
import './BottomSide.css';
import Railroad from './Railroad';
import IncomeTax from './IncomeTax';
import Chance from './Chance';

const BottomRow = () => (
	<Fragment>
		<div class="bottom-tile bottom-row-1">
			<div class="go-tile">
				<div class="go-subtext">Pass go & Collect £200</div>
				<div class="go-text">GO</div>
			</div>
		</div>
		<div class="bottom-tile bottom-row-2">
			<PropertyBottom color="brown" name="Mediterranean Avenue" cost="60" />
		</div>
		<div class="bottom-tile bottom-row-3">
			<CommunityChest />
		</div>
		<div class="bottom-tile bottom-row-4">
			<PropertyBottom color="brown" name="Baltic Avenue" cost="60" />
		</div>
		<div class="bottom-tile bottom-row-5">
			<IncomeTax />
		</div>
		<div class="bottom-tile bottom-row-6">
			<Railroad/>	
		</div>
		<div class="bottom-tile bottom-row-7">
			<PropertyBottom color="light-blue" name="Oriental Avenue" cost="100" />
		</div>
		<div class="bottom-tile bottom-row-8">
			<Chance />
		</div>
		<div class="bottom-tile bottom-row-9">
			<PropertyBottom color="light-blue" name="Vermont Avenue" cost="100" />
		</div>
		<div class="bottom-tile bottom-row-10">
			<PropertyBottom color="light-blue" name="Connecicut Avenue" cost="120" />
		</div>
	</Fragment>
);

export default BottomRow 
