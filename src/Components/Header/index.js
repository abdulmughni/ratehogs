import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem 
} from "mdbreact";

import Logo from '../../statics/images/logo.png';
import './header.css';

class Header extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
    const { type } = this.props;
    
    return (
        <MDBNavbar dark expand="md" className="rh-navbar">
            {
                !type &&
                <MDBNavbarBrand>
                    <img src={Logo} alt="Rate Hogs" className="img-fluid" />
                </MDBNavbarBrand>
            }            

            <MDBNavbarToggler onClick={this.toggleCollapse} />

            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav right>
                    <MDBNavItem active>
                        <MDBNavLink to="">Home</MDBNavLink>
                    </MDBNavItem>                    

                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2">Banking</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                            <MDBDropdownItem href="#!">Drop Down 1</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 2</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 3</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 4</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2">Loan</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                            <MDBDropdownItem href="#!">Drop Down 1</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 2</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 3</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 4</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2">Investments</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                            <MDBDropdownItem href="#!">Drop Down 1</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 2</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 3</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 4</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2">Insurance</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                            <MDBDropdownItem href="#!">Drop Down 1</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 2</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 3</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Drop Down 4</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>

                    <MDBNavItem>
                        <MDBNavLink to="/signin"><span className="nav-button">Sign in to Compare</span></MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>                
            </MDBCollapse>
        </MDBNavbar>
        );
    }
}

export default Header;
