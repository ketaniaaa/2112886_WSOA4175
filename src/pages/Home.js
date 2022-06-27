import React, { Component } from 'react';
import '../styles/Home.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';







export default class Home extends Component {

 

  render() {
    return (
      <div className="home">
      <header className="headerContainer">
        
        <h1 className='homeTitle'><p>break the rules, heres the <s>guide</s> for disatorous mobile experiences and more and yes</p> </h1>
        
                <Link to="/Netart"><button className="button2">learn more  </button></Link>
       <Link to="/Netart"><button className="button1">learn nothing  </button></Link>
        
       </header>
       
      </div>
    )
  }
}
