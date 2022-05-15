import React, { Component } from 'react'
import MainContent from '../MainContent/MainContent'
import NavBar from '../Navbar/NavBar'

export class HomePage extends Component {
  render() {
    return (
      <div>
         <NavBar/>
         <MainContent/>
      </div>
    )
  }
}

export default HomePage
