import React, { Component } from 'react'
import Post from '../Post/Post'
import './Publication.css'
import upload from '../../images/upload.png';


class Publication extends Component {
    constructor(props){
        super(props);
        this.state={
          postArray : []
          }
  }

componentDidMount() {
  this.getPosts();
}

  getPosts = () =>{

    let data = [{
      "postId":"1",
      "userName":"user1",
      "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
      "postTime":"04:47",
      "likes":"16552"
    },
    {
      "postId":"22",
      "userName":"user45",
      "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
      "postTime":"12:47",
      "likes":"16552"
    },
    {
      "postId":"13",
      "userName":"user144",
      "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
      "postTime":"14:47",
      "likes":"16552"
    }
    ];

    this.setState({postArray: data});
  }
    
  render() {
    return (
      <div>
        <div style={{"textAlign":"center"}}>
          <img className='upload_icon' src={upload}/>
        </div>
        {
          this.state.postArray.map((item, index) => {

            return (            
            <Post id={item.postId} 
              userName={item.userName} 
              postImage= {item.postImage} 
              likes={item.likes}
              timepubliction={item.postTime}
        />)


            
          })

        }

      </div>
    )
  }
}

export default Publication
