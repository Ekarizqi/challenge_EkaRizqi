import React from 'react';
import {FiTruck, FiHome} from "react-icons/fi";
import logo_s from "../../assets/logo-s";


function Blue(props) {
    return (
        <div className="sidebar d-flex flex-column sticky-top" style={{height: "100vh", width: "5%", background: "#0D28A6"}}>
            <div className="box d-flex justify-content-center align-items-center" style={{height: "64px"}}>
            <img src={logo_s} alt="small-logo" />
            </div>
            <div className="box d-flex justify-content-center align-items-center" style={{height: "64px", color: "#F4F5F7"}}>
            <div className="content-image text-center">
                <a href="/dashboard" className="text-decoration-none text-light">
                <FiHome />
                <p style={{margin:"0",fontSize:"10px"}}>Dashboard</p>
                </a>
            </div>
            </div>
            <div className="box d-flex justify-content-center align-items-center" style={{height: "64px", color: "#F4F5F7"}}>
            <div className="content-image">
                <a href="/cars" className="text-decoration-none text-light">
                <FiTruck />
                <p style="margin: 0; font-size: 10px;">Car</p>
                </a>
            </div>
            </div>
        </div>
    );
}

export default Blue;