import React from 'react';
import './Comment.scss';


class Comment extends React.Component {
   
    render() {
        const { text } = this.props;
        return(
            <div className="userCommentBox" >
                <a className="goUser">User</a>
                <span className="userCommentText">{text}</span>
                <img className="heartSize" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"></img>
            </div>
        );
    }
}



export default Comment;