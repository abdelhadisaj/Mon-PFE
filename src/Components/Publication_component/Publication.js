import React, { Component } from 'react'
import Post from '../Post/Post'
import './Publication.css'


class Publication extends Component {
    constructor(props){
        super(props);
        this.state={
          }
  }
  render() {
    return (
      <div>
        <Post id="12" 
        userName="user" 
        postImage="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" 
        likes="15214"/>

      </div>
    )
  }
}

export default Publication
