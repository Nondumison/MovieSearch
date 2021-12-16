// import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, Container } from 'react-bootstrap';


const Header = () => {
 

  return (

    <Navbar collapseOnSelect fixed="top" expand="sm" style={{backgroundColor:"#fabb00"}}  >


  
    <NavbarBrand id="navbar-brand mr-auto " href="/Awesome" style={{backgroundColor:"#646464"}} >
    Awesome<br/>Movies
  </NavbarBrand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " style={{color:"#646464"}}/>
  
  <Navbar.Collapse id="responsive-navbar-nav " style={{color:"#646464"}} >
    <Nav class="navbar-nav justify-content-center" >
     
      <Nav.Link href="/" style={{color:"#646464"}}>Home</Nav.Link>
      <Nav.Link href="/popular" style={{color:"#646464"}}>Pupular<br/>Movies</Nav.Link>
      <Nav.Link href="/Developer" style={{color:"#646464"}}>About the<br/>developer</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>

  



    </Navbar>











    
  );
};

export default Header;