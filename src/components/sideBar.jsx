import React, { Component } from 'react';

class SideBar extends Component {
	render() {
		return (
			<nav className="sideBar">
				<div className="sideBar-menu">
					<img src="/woongTube/images/home-25.png" alt="" />
					<div className="sideBar-menu-txt">홈</div>
				</div>
				<div className="sideBar-menu">
					<img src="/woongTube/images/compass-25.png" alt="" />
					<div className="sideBar-menu-txt">탐색</div>
				</div>
			</nav>
		);
	}
}

export default SideBar;