import React, { Component } from 'react' ;
import { Tag, Input, Tooltip, Icon } from 'antd';
import _ from 'lodash' ;

class AdminManagerTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags : ['首页' , 'IOS' , 'Python' , 'ReactJS'] ,
            inputVisible : false ,
            inputValue : ''
        }
    }
    saveInputRef = input => { 
        this.input = input 
    }; 

    handleClose = removedTag => {
        // const tags = this.state.tags.filter(tag => tag !== removedTag);
        _.remove(this.state.tags , tag => tag === removedTag) ;
        this.setState({
            tags :this.state.tags
        })
    }

    showInput = () => {
        this.setState({
            inputVisible : true
        }, () =>{
           this.input.focus();
        })
    }

    handleInputChange = e => {
        this.setState({
            inputValue : e.target.value
        })
    }

    handleInputConfirm = () => {
        const { inputValue } = this.state ;
        let { tags } = this.state ;
        if( inputValue && tags.indexOf(inputValue) === -1) {
            tags = [ ...tags ,inputValue]
        }

        this.setState({
            tags ,
            inputVisible : false ,
            inputValue : ''
        })
    }
    
    render(){
        const { tags , inputVisible, inputValue } = this.state ;
        return(
            <div className ="AdminManagerTags-block">
                <h2>标签管理</h2>
                <div className="AdminManagerTags-content">
                    {
                        tags.map( (item, index) => {
                            const isLongTag = item.length > 10;
                            const tagElem = (
                                <Tag key={item} closable = {index !== 0} onClose={() => this.handleClose(item)} className="tgas-item">
                                    {isLongTag ? `${item.slice(0, 20)} ...` : item }
                                </Tag>
                            );
                            return isLongTag ? (
                                <Tooltip title={item} key={item}>{tagElem}</Tooltip>
                            ) :(tagElem) ;
                        })
                    }

                    {
                        inputVisible && (
                            <Input
                                ref = {this.saveInputRef}
                                type = "text"
                                size = "small"
                                style = {{width : 78}}
                                value = { inputValue }
                                onChange = { this.handleInputChange }
                                onBlur = { this.handleInputConfirm }
                                onPressEnter = { this.handleInputConfirm }
                            />
                        )
                    } 
                    {
                        !inputVisible && (
                            <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                                <Icon type="plus"/> new Tag
                            </Tag> 
                        )
                    }
                </div>
            </div>
        )
    }
}

export default AdminManagerTags ;