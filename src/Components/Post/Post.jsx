import { Avatar } from '@mui/material';
import React, { Component } from 'react'
import './Post.css'
import profile from '../../images/profile.png';
import postimage from '../../images/postimage.jpg';
import match from '../../images/match.png';
import comment from '../../images/comment.png';
import share from '../../images/share.png';





 class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            commentList : []
          }
  }
  componentDidMount(){
      this.getComment();
  }

  getComment = () =>{
      let data = [
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
      this.setState({commentList : data});
  }


  render() {
    return (
      <div className='post_container'>

          {/* header post */}
          <div className='post_header'>
              <Avatar className='post_header_photo' src={this.props.profileImage}/>
              <div className='post_header_username'>{this.props.userName}</div>

          </div>

          {/* image post */}
          <div className='post_image'>
              <img src={this.props.postImage} width="615px"/>

          </div>

          {/* analytics section */}
          <div className='post_analytics'>
              <div style={{"marginLeft":"10px"}}>
                  <img className='post_likeandcomment' src={match}/>
                  <img className='post_likeandcomment' src={comment}/>
                  <img className='post_likeandcomment' src={share}/>
              </div>

              <div style={{"fontWeight":"bold","marginLeft":"20px"}}>
                  {this.props.likes}
              </div>

          </div>

          {/* comment section */}
          <div style={{"marginTop":"5px"}}>
                {
                        this.state.commentList.map((item, index) => {

                            <div className='post_comment'>{item.username} : {item.commentContent} </div>
                            

                        })
                }

              <input className='post_commentbox' type="text" placeholder='Add acomment...'/>

          </div>
        
      </div>
    )
  }
}
export default Post;
