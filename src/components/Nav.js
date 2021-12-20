import React from "react";

import styled from 'styled-components';

const Nav = () => {
    return(
        <StyledNav>
            <StyledLeft>
                <p>img</p>
                <h2>Builder</h2>
            </StyledLeft>
            <StyledRight>
                <ul>
                    <li>Team</li>
                    <li>About Us</li>
                    <li>Portfolio</li>
                    <li>Work With Us</li>
                    <li>News</li>
                </ul>
            </StyledRight>
        </StyledNav>
    )
}

export default Nav;


const StyledNav = styled.div`
    min-height: 10vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: grey; */
    padding: 1rem 5rem;
    border-bottom: 1px solid #bcc2d0;
`

const StyledLeft = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
    h2{
        margin-left: 5px;
        font-size: 1.2rem;
        font-family: "Times New Roman";
        font-weight: 600;
    }

`
const StyledRight = styled.div`
    ul{
        display:flex;
        justify-content: center;
        align-items: center;
        /* background-color: yellow; */
        list-style:none;

        li{
            padding-left: 2rem;  // change it for responsive design
            font-size: 0.8rem;
            font-weight: 400;
        }
    }   
`