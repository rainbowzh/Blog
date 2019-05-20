import React , { Component } from 'react';
import Header from '../../components/HomeBlocks/Header';
import Menus from '../../components/HomeBlocks/Menus';
import Articles from '../../components/HomeBlocks/Articles';
import './index.scss' ;


class Home extends Component {
    render(){
        return(
            <div className="Home-block">
                <Header/> 
                <Menus/>
                <Articles/>
            </div>
        )
    }
} 

export default Home ;