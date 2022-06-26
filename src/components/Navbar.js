import React, { Component } from "react";
import { Link } from "react-router-dom";

//imported local files 
import Logo from '../assests/newLogo.png';


//other dependancies 
import MenuIcon from '@mui/icons-material/Menu';
 import styled from "styled-components"; //i used this to help with styling changes on one document for easier debugging so i used the babel api
 



 //the styled components inline styling which has allowed me to delete the css file and use state changes with css 
const Nav = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  background-color: #0060ff;
  
   #logo{
 width: 100%;
 height: 100px;
 padding-left: 20%;
 }

  #menu-bar {
    display: none;
  }
 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
 

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

 
    #menu-bar {
      padding: 4px;
      color:white;
      border: 3px solid white;
      display: inline;
      text-decoration: none;
 
      :hover {
        border-color: red;
      }
    }
  }
`;
 
const NavLinkList = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding-right: 40px;
  }
 
  @media (max-width: 768px) {
    padding-inline-start: 0;
    flex-direction: column;
    ${props =>
      props.toggled
        ? "opacity: 1;display: flex;"
        : "transition: opacity 1s ease-out;opacity: 0;height: 0;overflow: hidden;"};
  }
`;
 //this props.toggled allows for the list for to change back to a vertical order so that mobile users can interact with the menu
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-family: monospace;
  letter-spacing: 5px;
  word-spacing: 10px;
 
  :hover {
    color: red;
    text-decoration: underline;
    font-weight: bold
  }
 
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;
 
class Navbar extends Component {
  state = {
    toggled: false
  };
//ensure that the burger menu is not the default if on desktop 

  menuToggle = () => {
    const { toggled } = this.state;
    this.setState({ toggled: !toggled }); 
  };



  resetToggle = () => {
    if (window.innerWidth > 768) {  //the broswer stack says that 768px is a standard mobile responive breakpoint
      this.setState({ toggled: false });
    }
  };



  componentDidMount() {
    window.addEventListener("resize", this.resetToggle);
  }

//listner to check the size of the window and if it meets the breakpoint number of pixels, the menu will be toggled 

  render() {
    const { toggled } = this.state;







    return (
      <Nav>
        <div>
          <img src={Logo} id="logo" alt="the logo of the site that says Bad Design Museum"/>
          <span id="menu-bar">
            <span onClick={this.menuToggle}><MenuIcon/></span>
          </span>
        </div>
        <NavLinkList toggled={toggled}> {/* the navlinklist was changed with the styled components dependancy  */}
          <li>
            <StyledLink to="/">home</StyledLink>
          </li>
          <li>
            <StyledLink to="/Blog">blog</StyledLink>
          </li>
          <li>
            <StyledLink to="/Design">design</StyledLink>
          </li>
           <li>
            <StyledLink to="/Netart">artwork</StyledLink>
          </li>
        </NavLinkList>
      </Nav>
    );
  }
}
 
export default Navbar;
