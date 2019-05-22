import React, { Component } from 'react'
import { Input, Select, Button } from 'antd' ;
import './index.scss';

const { TextArea } = Input ;
const Option = Select.Option;

const ROWS = 15;
export default class AdminNewArticle extends Component {
    render() {
        return (
            <div className="AdminNewArticle-block">
                <h2>发表文章</h2>
                <div className="AdminNewArticle-content">
                    <div className="AdminNewArticle-content-title">
                        <p className="write-Article-title">标题</p>
                        <Input placeholder="请输入文章标题..."/>
                    </div>
                    <div className="AdminNewArticle-content-main">
                        <p className="write-Article-title">正文</p>
                        <TextArea  rows={ROWS}  placeholder="文章正文在这里输入..."/>
                    </div>
                    <div className="AdminNewArticle-content-type">
                        <p className="write-Article-title">分类</p>
                        <Select 
                            labelInValue
                            defaultValue = {{key : 'Jack'}}
                            style = {{width : 120}}
                            onChange = {this.handleChange}
                        >
                            <Option value="jack">Jack (100)</Option>
                            <Option value="lucy">Lucy (101)</Option>
                        </Select>
                    </div>
                </div>
                <div className="AdminNewArticle-foot-related">
                    <Button type="primary">发布</Button>
                    <Button type="primary">保存</Button>
                    <Button type="primary">预览</Button>
                </div>
            </div>
        )
    }
}
