import React, { PureComponent } from 'react';

class SideBar extends PureComponent {
	goHome =()=>{
		this.props.goHome();
		
        let videos = document.querySelectorAll(".video");
        videos.forEach(item => item.style.display = "flex");
	}
	render() {
		return (
			<nav className="sideBar">
				<div className="sideBar-sticky">
					<div className="sideBar-menu" onClick={this.goHome}>
						<img src="/woongTube/images/home-25.png" alt="" />
						<div className="sideBar-menu-txt">홈</div>
					</div>
					<div className="sideBar-menu">
						<img src="/woongTube/images/compass-25.png" alt="" />
						<div className="sideBar-menu-txt">탐색</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default SideBar;