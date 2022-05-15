import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './Post.css'
import match from '../../images/match.png';
import comment from '../../images/comment.png';
import share from '../../images/share.png';

const data = [
    {
        "username":"user1",
        "commentId":"12",
        "commentTime":"12:11",
        "commentContent":"comment1"
    },
    {
      "username":"user2",
      "commentId":"13",
      "commentTime":"12:11",
      "commentContent":"comment2"
  },
  {
      "username":"user3",
      "commentId":"14",
      "commentTime":"12:11",
      "commentContent":"comment3"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  }
];

function Post(props) {
    const [comments, setComments] = useState(data);

    return(
        <div className='post_container'>
          {/* header post */}
          <div className='post_header'>
              <Avatar className='post_header_photo' src={props.profileImage}/>
              <div className='post_header_username'>{props.userName}</div>

          </div>
          {/* image post */}
          <div className='post_image'>
              <img src={props.postImage} />

          </div>
          {/* analytics section */}
          <div className='post_analytics'>
              <div style={{"marginLeft":"10px"}}>
                  <img className='post_likeandcomment' src={match}/>
                  <img className='post_likeandcomment' src={comment}/>
                  <img className='post_likeandcomment' src={share}/>
              </div>
              <div style={{"fontWeight":"bold","marginLeft":"20px"}}>
                  {props.likes}
              </div>
          </div>
          {/* comment section */}
          <div style={{"marginTop":"5px"}}>
                {
                    comments.map((item, index) => {
                        return(<div className='post_comment'>{item.username} : {item.commentContent} </div>)
                   })
                }
              <input className='post_commentbox' type="text" placeholder='Add acomment...'/>
          </div>
      </div>
    );
}

export default Post;
