import React,{ Component } from 'react' ;
import Comment from '../../components/DetailBlocks/Comments';
import './index.scss';

// import remark from 'remark';
// import reactRenderer from 'remark-dom';
const detail = {
    title : "大黄蜂",
    main : "葛之覃兮，施于中谷，维叶萋萋。黄鸟于飞，集于灌木，其鸣喈喈。葛之覃兮，施于中谷，维叶莫莫。是刈是濩，为絺为綌，服之无斁。言告师氏，言告言归。薄污我私，薄浣我衣。害浣害否？归宁父母。"
}
class Detail extends Component{
    render(){
        return(
            <div className = "Detail-block">
                <div className="detail-title-block">{detail.title}</div>
                <Comment dataAll={detail}/>
            </div>
        )
    }
}

export default Detail;
