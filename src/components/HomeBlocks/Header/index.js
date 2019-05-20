import React, { Component } from 'react';
import './index.scss';

class Header extends Component {

    render(){
        return(
            <div className="Home-header-block">
                <div className="header-title-logo"></div>
                <h1>hello , bumblebee</h1>
                <p> if ou cant measure it ,you cant inprove it</p>
            </div>
        )
    }

}

export default Header ;