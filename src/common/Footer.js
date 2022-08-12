import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterElements";

function Footer() {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Email: hello@fleo.io</Heading>
                        <FooterLink href="#">Phone: +91 87654 44000</FooterLink>
                        <FooterLink href="#">Address: No. 1207/343, 9th Main, Sector 7, HSR Layout, Bengaluru, Karnataka - 560102 </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Fleo</Heading>
                    </Column>
                    <Column>
                        <FooterLink href="#">
                            Fleo shows you the areas that need your attention, it will be your go-to tool for internal business reviews
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    )
}

export default Footer;