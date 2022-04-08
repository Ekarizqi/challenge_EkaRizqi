import React from 'react';
import {Col} from "reactstrap"
import logo from "../img/logo.png";
import fb from "../img/icon_facebook.png";
import ig from "../img/icon_instagram.png";
import twt from "../img/icon_twitter.png";
import mail from "../img/icon_mail.png";
import twc from "../img/icon_twitch.png";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </Column>
                    <Column>
                        <FooterLink href="#">Our Services</FooterLink>
                        <FooterLink href="#">Why Us</FooterLink>
                        <FooterLink href="#">Testimonial</FooterLink>
                        <FooterLink href="#">FAQ</FooterLink>
                    </Column>
                    <Column>
                        <p>Connect With Us</p>
                        <Row>
                        <Col>
                        <FooterLink href="https://facebook.com/"><img src={fb} alt="fb"/></FooterLink>
                        <FooterLink href="https://instagram.com/"><img src={ig} alt="ig"/></FooterLink>
                        <FooterLink href="https://twitter.com"><img src={twt} alt="twt"/></FooterLink>
                        <FooterLink href="https://gmail.com"><img src={mail} alt="mail"/></FooterLink>
                        <FooterLink  href="https://twitch.tv"><img src={twc} alt="twc"/></FooterLink>
                        </Col>
                        </Row>
                    </Column>
                    <Column>
                        <p>Copyright Binar 2022</p>
                        <FooterLink href="#"><img src={logo} alt='logo'/></FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    )
}

export default Footer;
