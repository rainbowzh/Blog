import React , { Component } from 'react' ;
import { Link } from 'react-router-dom' ;
import '../style/ArticleCell.scss';


const introArticle = 160 ;
class ArticleCell extends Component {
    constructor(props){
        super(props);
        this.state = {
            showAllArticle : false ,
        }
    }
    handleShowAll = () => {
        this.setState({
            showAllArticle : !this.state.showAllArticle
        })
    }

    render(){
        const  data  = this.props.dataAll;
        return(
            <div className="ArtileCell-block">
                <div className="article-title">
                    <h3><Link to="/detail" className="a-style-resize">{data.title}</Link></h3>
                </div>
                <div className={this.state.showAllArticle ? "article-main-content-show-height" : "article-main-content"}>
                    {data.summary}
                    {data.summary.length < introArticle ? "" : <div className="overflowhidden-height-after">...</div>}
                </div>
                <div className="article-related-event">
                   <div className="article-related-publishTime">
                        <div className="article-related-time-icon"></div>
                        {data.time}
                   </div> 
                   <div className="article-related-reader">
                        <div className="article-related-reader-icon"></div>
                        {data.viewCount}
                   </div>
                   <div className="article-related-comment">
                        <div className="article-related-comment-icon"></div>
                        {data.commentCount}
                   </div>
                </div>
               {
                   data.summary.length < introArticle 
                   ? ""
                   : <div className={ this.state.showAllArticle ? "article-readall-btn active" : "article-readall-btn"} onClick={this.handleShowAll}>
                        { this.state.showAllArticle ? " 收起" : "显示简介" }
                        <span className="icon-blue-to-down"></span>
                    </div>
               }
            </div>
        )
    }
}

export default ArticleCell;