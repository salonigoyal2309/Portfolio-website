import React,{ Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'

export default class TopBar extends Component{

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 250;
          const navLink = document.querySelectorAll('.nav-link');
          const activeLink = document.querySelector('.active');
          const navBarCollapse = document.querySelector('.navbar-collapse');
          const navBar = document.querySelector('.navbar');
          const navbarBrand = document.querySelector('.navbar-brand');
          
          if (isTop) {

              for(let i=0;i<navLink.length;i++) navLink[i].setAttribute('style','color: #A89F7F !important;');
              activeLink.setAttribute('style','color: #EBE6DB !important;');
              navBar.setAttribute('style','background-color: black; opacity: 0.8');
              navBarCollapse.setAttribute('style', 'text-align: left; padding-left: 3%');
              navbarBrand.setAttribute('style','color:  #ECE9D6 !important;');

          }
          else{

            for(let i=0;i<navLink.length;i++) navLink[i].setAttribute('style','color: black !important;');
            activeLink.setAttribute('style','color: green !important;');
            navBar.setAttribute('style','background-color: white');
            navBarCollapse.setAttribute('style', 'background-color: white; opacity: 1; text-align: left; padding-left: 3%');
            navbarBrand.setAttribute('style','color:  black !important;');

         }
        });
      }

    render(){
        return(
            <>
            <Navbar transparent expand="lg" fixed="top" >
            <Navbar.Brand href="/" > SALONI </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navItem" >
                <li className="nav-item" >
                        <Link
                        href="#home"
                        to="home"
                        activeClass="active"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        href="#about"
                        to="about"
                        activeClass="active"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        href="#skills"
                        to="skills"
                        activeClass="active"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        href="#projects"
                        to="projects"
                        activeClass="active"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        href="#contact"
                        to="contact"
                        activeClass="active"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
        )
    }
}