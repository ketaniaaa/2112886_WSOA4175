import React, { Component } from 'react';


export default class Blogitem extends Component {
  render() {
    return (
      <div className='menuItem'>
        <div style={{backgroundImage: `url(${this.props.image})`}}></div>
        <h1>{this.props.name}</h1>
        <p>{this.props.date}</p>
        <p>{this.props.link}</p>


      </div>
    )
  }
}
