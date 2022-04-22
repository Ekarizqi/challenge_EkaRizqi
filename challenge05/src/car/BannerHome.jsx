import React from "react";
// import {Jumbotron} from "reactstrap";
import {Container, Col, Row} from "reactstrap";
import car from "../img/car.png";
import "./cari.css";


export default function BannerHome  () {
    return (
        <div>
            <Container style={{backgroundColor:"#F1F3FF"}}
            fluid>
                <Row>
                <Col style={{marginLeft:"60px", padding:"50px"}}>
                    <h2><b>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</b></h2>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </Col>
                <Col>
                    <div className="backgroundCar">
                        <img src={car} alt="car"/>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
        
    )
}
