import React, { Fragment } from 'react';
import './LeftSide.css';
import PropertyLeft from './PropertyLeft';
import CommunityChest from './CommunityChest';
import Railroad from './Railroad';
import Utility from './Utility';

const LeftSide = () => (
	<Fragment>
		<div class="left-tile left-row-1">
			<div class="jail-tile">
				In Jail/Just visting
			</div>
		</div>
		<div class="left-tile left-row-2">
			<PropertyLeft color="purple" name="St. Charles Place" cost="140" />
		</div>
		<div class="left-tile left-row-3">
			<Utility/>
		</div>
		<div class="left-tile left-row-4">
			<PropertyLeft color="purple" name="States Avenue" cost="140" />
		</div>
		<div class="left-tile left-row-5">
			<PropertyLeft color="purple" name="Virginia Avenue" cost="160" />
		</div>
		<div class="left-tile left-row-6">
			<Railroad/>
		</div>
		<div class="left-tile left-row-7">
			<PropertyLeft color="orange" name="St. James Place" cost="180" />
		</div>
		<div class="left-tile left-row-8">
			<CommunityChest/>
		</div>
		<div class="left-tile left-row-9">
			<PropertyLeft color="orange" name="Tennessee Avenue" cost="180" />
		</div>
		<div class="left-tile left-row-10">
			<PropertyLeft color="orange" name="New York Avenue" cost="200" />
		</div>
	</Fragment>
);

export default LeftSide 
