import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap/lib';
import { Link } from 'react-router';

export default class NavBar extends Component {

  componentDidMount() {
    this.props.requestSession();
  }

  render() {
    const { username, requestLogout } = this.props;
    return (
      <div>
        <div>
          <Navbar inverse collapseOnSelect id="navbar">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={{ pathname: '/' }}>
                  Fresh Air
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <IndexLinkContainer to={{ pathname: '/service' }}>
                  <NavItem eventKey={1}>Services</NavItem>
                </IndexLinkContainer>
                <LinkContainer to={{ pathname: '/about' }}>
                  <NavItem eventKey={2}>About Us</NavItem>
                </LinkContainer>
                {
                  username 
                  ? (
                      <NavDropdown eventKey={3} title={username} id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Settings</MenuItem>
                        <MenuItem divider />
                        <MenuItem onClick={requestLogout} eventKey={3.2}>Logout</MenuItem>
                      </NavDropdown>
                    )
                  : (
                      <LinkContainer to={{ pathname: '/login' }}>
                        <NavItem eventKey={3}><i className="fa fa-user" aria-hidden="true" id="user-icon"></i>  Login/Sign Up</NavItem>
                      </LinkContainer>
                    )
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {
          this.props.children
        }
      </div>
    );
  }
}