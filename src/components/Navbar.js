import React, { Component } from 'react';
import Logo from '../assests/websitelogo.jpg';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';


 class Navbar extends Component {
constructor(props){
  super(props);
  this.state ={
openLinks: false
  };
  this.toggleNav =this.toggleNav.bind(this);
}
toggleNav(){
this.setState(prevState =>({
openLinks: !prevState.openLinks
}));
}

  render() {
    return (
      <div className="navbar">
      
          <div className="leftSide" id={this.state.openLinks ? "open" : "close"}>
  <div className="hiddenLinks">
           <Link to='/'>Home</Link>
  <Link to='/Blog'> Blogs</Link>
  <Link to='/Design'> Design</Link>
  <Link to='/Netart'>Net Art</Link>
<img src={Logo}/>
        </div>
        <div className="rightSide">
  <Link className="link" to='/'>Home</Link>
  <Link to='/Blog'> Blogs</Link>
<img src={Logo}/>




  <Link to='/Design'> Design</Link>
  <Link to='/Netart'>Net Art</Link>
 <button onClick={this.toggleNav}> <MenuIcon/></button>
</div>
</div>

      </div>
    )
  }
}
export default Navbar;