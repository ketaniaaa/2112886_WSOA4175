import React, {Component} from 'react';
import Banner from './components/Banner';
import './App.css';
import Navbar from './components/Navbar';
class App extends Component{
    render(){    
        return (
<div className="App">
  <Navbar/>
</div>
        );
    }
}

export default App;
//when you return data you can only return one piece of data and you can get around this with one html tag
//this.props cannot be changed in property 
//keep components modular
//app.js to="ringo" from="john" data={1,2,3,4,5} num={3}
//hello.js is in returning html master tag {this.props.to}! for it to say hello john

