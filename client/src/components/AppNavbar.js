import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
              <NavbarBrand href="/">
                  <img
                      className="mr-2"
                      src="https://img.icons8.com/color/48/000000/test-partial-passed.png"
                      alt="Logo"
                  />
                  ShoppingList
              </NavbarBrand>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink target="_blank" href="https://github.com/Belchenkov">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    </div>
    );
  }
}

export default AppNavbar;