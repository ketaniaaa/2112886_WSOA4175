import React, { Component } from 'react';
import '../styles/Home.css';

import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
      <header className="headerContainer">
        
        <h1> How to be a bad designer</h1>
                <Link to="/Netart"><button className="button2">learn more  </button></Link>
       <Link to="/Netart"><button className="button1">learn nothing  </button></Link>
        
       </header>
       <section className="blogAd">
         Hi this is a section
         <section className="adText"> hi hows it going</section>
       </section>
      </div>
    )
  }
}