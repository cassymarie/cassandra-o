import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Linkedin } from 'react-bootstrap-icons'
import '../styles/nav.css'

class NavHeader extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark" sticky="top" bsPrefix="nav-header navbar" >
                <Navbar.Brand  bsPrefix="header-brand" >My Name</Navbar.Brand>
                <Nav  bsPrefix="nav-links">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/justFun">Just Fun</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/cassandra-ortiz-11052523/"><Linkedin width="1em" height="1em" /></Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavHeader