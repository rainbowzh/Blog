import React, { Component } from 'react';
import { message } from 'antd';

class Comment extends Component{
    constructor(props){
        super(props);
    }

    handleToClick = () => {
        console.log(1);
        console.log(message.info)
        message.success("sorry,主人还没做好呢~~");
    }
    render(){
        return(
            <div className="detail-content-block">
                <div className="detail-article-page">{this.props.dataAll.main}</div>
                <div className="detail-comment-block">
                    <div className="detail-all-comment-title">评论</div>
                    <div className="detail-write-comment-block">
                        <textarea className="detail-comment-write" placeholder="开始评论"></textarea>
                        <div className="detail-comment-add-other">
                            <div className="comment-add-other-block">
                                <span className="add-other-img" onClick={this.handleToClick}></span>
                                <span className="add-other-faceIcon" onClick={this.handleToClick}></span>
                            </div>
                            <div className="comment-add-publish">
                                <span className="add-publish-icon"></span>
                                <span className="add-publish-btn">发表</span>
                            </div>
                        </div>
                    </div>
                    <div className="detail-all-comments">
                    
                    </div>
                </div>
            </div>
        )
    }
}
export default Comment;