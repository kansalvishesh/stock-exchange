import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import classes from "../CSS/navbar.module.css";
import { NavLink} from "react-router-dom";

const CustomNavbar = ()=>{
    return(
        <>
        <div>
        <Navbar className={classes.Navbar} expand="sm">
            <Navbar.Brand href="#home">
            <span style={{color:"white",fontFamily:"Lexend Giga"}}>Stock Exchange <i class="fas fa-chart-line"></i></span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavLink style={{color:"white",fontFamily:"Lexend Giga"}} to="/">Home</NavLink>

                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        </>
    )
}
export default CustomNavbar;