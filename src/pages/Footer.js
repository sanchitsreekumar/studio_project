import React from "react";
import styled from "styled-components";

const Footer = () =>{
    return(
        <StyledFooter>
            <Card>
                <h3>Values</h3>
                <a href="#">Accessibility</a>
                <a href="#">Education</a>
                <a href="#">Environment</a>
                <a href="#">Privacy</a>
            </Card>
            <Card>
                <h3>Contanct</h3>
                <a href="#">Live Chat</a>
                <a href="#">+80 33485562</a>
                <a href="#">hello@builder.io</a>
            </Card>
            <Card>
                <h3>Links</h3>
                <a href="#">Our Product</a>
                <a href="#">Quality Assurance</a>
                <a href="#">Reputation Marketing</a>
                <a href="#">SMO & PPC</a>
            </Card>
            <Card>
                <h3>Company</h3>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </Card>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    min-height: 40%;
    background-color:black;
    color:white;
    padding: 5rem 10rem;
    /* display:flex;
    justify-content:space-between;
    align-items:start; */
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap:1rem;
`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:start;
    /* width: 15rem;
    height: 10rem; */
    /* padding: 0 2rem; */
    line-height:1.5rem;
    /* margin-right: 2rem; */
    /* background-color:yellow; */
    h3{
        font-size:1rem;
        font-weight:lighter;
    }
    a{
        text-decoration:none;
        color:#bcc9d0;
        font-size:0.8rem;
        font-weight:lighter;
    }
`


export default Footer;