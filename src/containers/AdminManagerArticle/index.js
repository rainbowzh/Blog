import React, { Component } from 'react' ;
import { Lists } from './list' ;
import { Modal } from 'antd' ;
import _ from 'lodash' ;
import { ArticleManagerCell }from '../../components/ArticleManagerCell' ;
import { allSettled } from 'q';
import { isTSTypeAliasDeclaration } from '@babel/types';

const confirm = Modal.confirm ;
const List = Lists ;
export default class AdminManagerArticle extends Component {
	constructor(props){
		super(props);
		this.state = {
			ArticleList : List
		}
	}
	showConfirm = (source) => {
		var _self = this ;
		confirm({
			title : '您确定要删除这篇文章？' ,
			content : '删除后无法恢复!' ,
			okType : "danger" ,
			okText : "确定" ,
			cancelText : "取消" ,
			onOk() {
				_.pull(_self.state.ArticleList ,_self.state.ArticleList[source.index]);
				console.log(_self.state.ArticleList);
				_self.setState({
					ArticleList : _self.state.ArticleList
				})
			} ,
			onCancel() {
				console.log(2);
			}
		})
	} 
	handleEdit = () => {

	}

	handleDelete = (source) => {
		console.log('enter');
		
		this.showConfirm(source);
	}
	handleRead = () => {
		
	}

  	render() {
		return (
			<div className = "AdminManagerArticle-block">
				<h2>文章管理</h2>
				<div className="AdminManagerArticle-content">
					{/* <AdminManagerCell/> */}
					{
						this.state.ArticleList.map( (item , index) => {
							const source = { item, index }
							return <ArticleManagerCell 
										data = {item} 
										key={index}
										edit = { (id) => {this.handleEdit(id)} }
										delete = { this.handleDelete.bind(this, source) }
										read = { (id) => {this.handleRead(id)} }
										/>
						})
					}
				</div>
			</div>
		)
  	}
}