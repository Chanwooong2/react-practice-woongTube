import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    inputRef = React.createRef();

    searchFunc = (event) => {
        event.preventDefault();
        this.props.searchVideo(this.inputRef.current.value);
    }

    render() {
        console.log(`render navBar~!`);
        return (
            <nav className="navBar">
                <span className="navBar-logo">
                    <img src="/woongTube/images/logo.png" className="navBar-logo-img" alt="woongTube"/>
                    <span className="navBar-logo-text">WoongTube</span>
                </span>
                <form className="navBar-form" action="" onSubmit={this.searchFunc}>
                    <input className="navBar-input" ref={this.inputRef} type="text" placeholder="검색"/>
                    <button className="navBar-btn"><img src="/woongTube/images/search.png" alt="" className="navBar-btn-img"/></button>
                </form>
            </nav>
        );
    }
}

export default NavBar;