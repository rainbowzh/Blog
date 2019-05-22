import React from 'react'
import { Button, Icon } from 'antd' ;
import '../style/ArticleManagerCell.scss';

export const ArticleManagerCell = (props) => {
    const { title , author , reader , comments ,publishTime, id } = props.data ;
    return (
        <div className="ArticleManagerCell-block">
            <div className="ArticleManagerCell-left">
                <div className="ArticleManagerCell-left-title">{title}</div>
                <div className="ArticleManagerCell-left-related">
                    <span className="ArticleManagerCell-author">作者：{author}</span>
                    <span className="ArticleManagerCell-reader">阅读数：{reader}</span>
                    <span className="ArticleManagerCell-comments">评论数：{comments}</span>
                    <span className="ArticleManagerCell-publishTime">发表时间：{publishTime}</span>
                </div>
            </div>
            <div className="ArticleManagerCell-right">
                <Button type="primary"><Icon type="edit" />编辑</Button>
                <Button type="primary" onClick={ () => {props.delete()}}><Icon type="delete" />删除</Button>
                <Button type="primary" onClick={ () => {props.read()}}><Icon type="eye" />查看</Button>
            </div>
        </div>
    )
}
