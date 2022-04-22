import React from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse,  NavItem, NavLink, Button,} from "reactstrap";
import logo from "../img/logo.png";

const Header = () => {
    return (
      <div>
    <Navbar style={{backgroundColor:"#F1F3FF", paddingLeft:"10px", paddingRight:"10px"}}
      expand="md"
      light
    >
      <NavbarBrand href="/">
       <img src={logo} alt="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="ms-auto"
          navbar
        >
          <NavItem>
            <NavLink href="/components/">
              Our Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Why Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">
              Testimonial
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">
              FAQ
            </NavLink>
          </NavItem>
          <Button
            color="success"
          >
            Register
          </Button>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
    )
  }

  export default Header;