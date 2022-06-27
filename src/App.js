import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Design from './pages/Design';
import Netart from './pages/Netart';
import Designjustice from './pages/Designjustice';


class App extends Component{
    render(){    
        return (
<div className="App">
  <Navbar/>

  <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Design' element={<Design/>}/>
      <Route path='/Netart' element={<Netart/>}/>
      <Route path='/Designjustice' element={<Designjustice/>}/>

      
      
  </Routes>
<Footer/>

</div>
        );
    }
}

export default App;

//Lecture notes
//navbar not part of routing bc its always showing
//when you return data you can only return one piece of data and you can get around this with one html tag
//this.props cannot be changed in property 
//keep components modular
//app.js to="ringo" from="john" data={1,2,3,4,5} num={3}
//hello.js is in returning html master tag {this.props.to}! for it to say hello john
//ensure that logos and images are all okay and stuff 

