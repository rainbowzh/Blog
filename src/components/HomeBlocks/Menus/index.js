import React, { Component  } from 'react' ;
import { Menu } from 'antd' ;
import './index.scss';


//预定menu的几个类别

const catelist = [
    '首页' , 'IOS' , 'Python' , 'ReactJs' 
]; 

class Menus extends Component {
    constructor(props){
        super(props);
        this.state = {
            addToggleClass : -1
        }
    }

    handleAddActive = (index) => {
        if(this.state.addToggleClass === index){
            this.setState({
                addToggleClass : -1
            })
        }
        else{
            this.setState({
                addToggleClass : index
            })
        }
    }

    render(){
        return(
           <div className="Home-menus-block">
                 <Menu
                    className="Home-menus-ul"
                >
                    {
                        catelist.map((item, index) => {
                            return(
                                <Menu.Item key = {index}  className={`Home-munes-li ${this.state.addToggleClass === index ? "has-selected" : ""}`} onClick={this.handleAddActive.bind(this, index)}> {item} </Menu.Item>
                            )
                        })
                    }
                </Menu>
           </div>
        )
    }
}

export default Menus;