import React from 'react';
import * as ReactBootstrap from "react-bootstrap";

var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var Glyphicon = ReactBootstrap.Glyphicon;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var Carousel = ReactBootstrap.Carousel;
var Image = ReactBootstrap.Image;

    export const Header = () =>{
      return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><Glyphicon glyph="envelope" />React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Launch Meeting</NavItem>
              <NavItem eventKey={2} href="#">Join Meeting</NavItem>
            </Nav>
            <SignIn />
          </Navbar.Collapse>
        </Navbar> );

    }
