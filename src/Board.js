import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
	render() {
		return (
			<div class="container-main">
				<div class="board">
					<div class="center">
						<div class="chance-deck"></div>
						<div class="community-deck"></div>
					</div>
					<div class="bottom-tile bottom-row-1"></div>
					<div class="bottom-tile bottom-row-2">
						<div class="color-bar"></div>
					</div>
					<div class="bottom-tile bottom-row-3"></div>
					<div class="bottom-tile bottom-row-4"></div>
					<div class="bottom-tile bottom-row-5"></div>
					<div class="bottom-tile bottom-row-6"></div>
					<div class="bottom-tile bottom-row-7"></div>
					<div class="bottom-tile bottom-row-8"></div>
					<div class="bottom-tile bottom-row-9"></div>
					<div class="bottom-tile bottom-row-10"></div>
					<div class="left-tile left-row-1"></div>
					<div class="left-tile left-row-2"></div>
					<div class="left-tile left-row-3"></div>
					<div class="left-tile left-row-4"></div>
					<div class="left-tile left-row-5"></div>
					<div class="left-tile left-row-6"></div>
					<div class="left-tile left-row-7"></div>
					<div class="left-tile left-row-8"></div>
					<div class="left-tile left-row-9"></div>
					<div class="left-tile left-row-10"></div>
					<div class="top-tile top-row-1"></div>
					<div class="top-tile top-row-2"></div>
					<div class="top-tile top-row-3"></div>
					<div class="top-tile top-row-4"></div>
					<div class="top-tile top-row-5"></div>
					<div class="top-tile top-row-6"></div>
					<div class="top-tile top-row-7"></div>
					<div class="top-tile top-row-8"></div>
					<div class="top-tile top-row-9"></div>
					<div class="top-tile top-row-10"></div>
					<div class="right-tile right-row-1"></div>
					<div class="right-tile right-row-2"></div>
					<div class="right-tile right-row-3"></div>
					<div class="right-tile right-row-4"></div>
					<div class="right-tile right-row-5"></div>
					<div class="right-tile right-row-6"></div>
					<div class="right-tile right-row-7"></div>
					<div class="right-tile right-row-8"></div>
					<div class="right-tile right-row-9"></div>
					<div class="right-tile right-row-10"></div>
				</div>
			</div>
		);
	}
}

export default Board;
