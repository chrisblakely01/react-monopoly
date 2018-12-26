import React, { Fragment } from 'react';
import './RightSide.css';
import PropertyRight from './PropertyRight';
import IncomeTax from './IncomeTax';
import Chance from './Chance';
import Railroad from './Railroad';
import CommunityChest from './CommunityChest';

const RightSide = () => (
	<Fragment>
		<div class="right-tile right-row-1">
			<div class="jail-tile">
				Go To Jail
			</div>
		</div>
		<div class="right-tile right-row-2">
			<PropertyRight color="green" name="Pacific Avenue" cost="300"/>
		</div>
		<div class="right-tile right-row-3">
		<PropertyRight color="green" name="North Carolina Avenue" cost="300"/>
		</div>
		<div class="right-tile right-row-4">
			<CommunityChest/>
		</div>
		<div class="right-tile right-row-5">
		<PropertyRight color="green" name="Pennsylvania Avenue" cost="320"/>
		</div>
		<div class="right-tile right-row-6">
			<Railroad/>
		</div>
		<div class="right-tile right-row-7">
			<Chance/>
		</div>
		<div class="right-tile right-row-8">
		<PropertyRight color="dark-blue" name="Park Place" cost="350"/>
		</div>
		<div class="right-tile right-row-9">
			<IncomeTax/>
		</div>
		<div class="right-tile right-row-10">
		<PropertyRight color="dark-blue" name="Boardwalk" cost="400"/>
		</div>
	</Fragment>
);

export default RightSide 
