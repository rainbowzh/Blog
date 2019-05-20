import React , { Component } from 'react' ;
import AricleCell from '../../AricleCell';
import './index.scss' ;


const ArticleList = [
    {
        key : '123' ,
        title : '标题' , 
        summary : '适用范围：该方法适用范围广，文字未超出行的情况下也会出现省略号,可结合js优化该方法。注：将height设置为line-height的整数倍文字未超出行的情况下也会出现省略号,可结合js优化该方法。注：将height设置为line-height的整数倍文字未超出行的情况下也会出现省略号,可结合js优化该方法。注：将height设置为line-height的整数倍但文字未超出行的情况下也会出现省略号,可结合js优化该方法。注：将height设置为line-height的整数倍，防止超出的文字露出。给p::after添加渐变背景可避免文字只显示一半。由于ie6-7不显示content内容，所以要添加标签兼容ie6-7（如：<span>…<span/>）；兼容ie8需要将::after替换成:after。适用范围：该方法适用范围广，但文字未超出行的情况下也会出现省略号,可结合js优化该方法。注：将height设置为line-height的整数倍，防止超出的文字露出。给p::after添加渐变背景可避免文字只显示一半。由于ie6-7不显示content内容，所以要添加标签兼容ie6-7（如：<span>…<span/>）；兼容ie8需要将::after替换成:after。' ,
        time : '2017-10-29' ,
        viewCount : '100' ,
        commentCount : '23'
    } ,{
        key : '10023' ,
        title : '标题2' ,
        summary : '你竟然没有写文章的内容，太可恶了' , 
        time : '2017-1-9' ,
        viewCount : '430' ,
        commentCount : '56'
    }
];

class Articles extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Home-article-block">
                {
                    ArticleList.map((item, index) => {
                       return( <AricleCell dataAll = {item} key={index}/> )
                    })
                }
            </div>
        )
    }
}

export default Articles ;