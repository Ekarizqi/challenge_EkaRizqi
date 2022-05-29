import React from "react";
import { FaBars } from "react-icons/fa";
import {FiTruck, FiHome} from "react-icons/fi";
import logo_s from "../../assets/logo-s.png";
import logo_b from "../../assets/logo-b.png";
import { Nav, Navbar, Form } from "reactstrap";
import { FormControl, Button } from "react-bootstrap";

const Sidenav = () => {
    return (
        <div>
            <div className="container">
                <div className="wrapper d-flex align-items-stretch" style={{height: "100vh", width: "5%", background: "#0D28A6"}}>
                    <div className="container" >
                        <img src={logo_s} alt="small-logo" />
                        <ul className="list-unstyled components mb-5">
                            <li>
                                <a href="/dashboard" className="text-decoration-none text-light">
                                    <FiHome />
                                    <p style={{margin:"0",fontSize:"10px"}}>Dashboard</p>
                                </a>
                            </li>
                            <li>
                                <a href="/cars" className="text-decoration-none text-light">
                                    <FiTruck />
                                    <p style="margin: 0; font-size: 10px;">Car</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="container">
                    <ul className="list-unstyled components mb-5">
                        <li>
                            <a href="/">Dashboard</a>
                        </li>
                        <li>
                            <a href="/">dashboard </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="">
                <div className="nav">
                    <div className="container-fluid">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id='navbarScroll'>
                            <Nav
                                className='me-auto my-2 my-lg-0'
                                style={{ maxHeight: '100px'}}
                                navbarScroll>
                                <img src={logo_b} alt="big logo" />
                                <FaBars />
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type="search"
                                    placeholder="search"
                                    className='me-2'
                                    aria-label='search'
                                />
                                <Button variant="primary" className='btn-search'>Search</Button>
                            </Form>
                            <img alt='profil'  className='logo-profil' />
                            <div className='akun-name'>
                                Unis Badri
                            </div>
                            {/* <Fi /> */}
                        </Navbar.Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
