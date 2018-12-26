import React, { Component } from 'react';
import './Board.css';
import BottomSide from './BottomSide';
import LeftSide from './LeftSide';
import TopSide from './TopSide';
import BoardCenter from './BoardCenter'
import RightSide from './RightSide';

class Board extends Component {
	render() {
		return (
			<div class="container-main">
				<div class="board">
					<BoardCenter />
					<BottomSide />
					<LeftSide />
					<TopSide />
					<RightSide />
				</div>
			</div>
		);
	}
}

export default Board;
