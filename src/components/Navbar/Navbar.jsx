import React, { Component } from 'react';
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavbarComp extends Component {
  state = {
    isNavOpen: false,
  };

  navToggle = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };
  render() {
    return (
      <Navbar expand="sm" className="bg-dark navbar-dark">
        <div className="container">
          <NavbarBrand>
            {' '}
            <Link to="/overall" className="navbar-brand">
              Covid
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.navToggle}></NavbarToggler>
          <Collapse navbar isOpen={this.state.isNavOpen}>
            <Nav navbar className="ml-auto">
              <NavItem>
                <Link to="/overall" className="nav-link">
                  Overall
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/countries" className="nav-link">
                  Country
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/specificcountry" className="nav-link">
                  States
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavbarComp;
