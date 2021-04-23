import React, { Component } from 'react'
import { Nav, Navbar, Image } from 'react-bootstrap'
import { Linkedin } from 'react-bootstrap-icons'

class NavHeader extends Component {
    render(){
        return(
            <Navbar sticky="top" bsPrefix="nav-header navbar" >
                {/* <Nav bsPrefix="nav-link"> */}
                 <Image  href="/" src="./images/cmo.png" className="header-logo"/>
                    <Navbar.Brand bsPrefix="header-brand" >Cassandra Ortiz</Navbar.Brand>
                    <div class="links">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/justFun">Just Fun</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/cassandra-ortiz-11052523/"><Linkedin width="1em" height="1em" /></Nav.Link>
                    </div>
                {/* </Nav> */}
            </Navbar>
        )
    }
}

export default NavHeader