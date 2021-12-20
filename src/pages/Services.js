import React from "react";
import styled from "styled-components";

const Services = () =>{
    return(
        <StyledServices>
            <h1>Service Packages</h1>
            <div id='card-container'>
                <Card>
                    <h3>Sketch design project</h3>
                    <p>Furniture Planning Solutions.</p>
                    <p>General concepts and stylistic collage.</p>
                    <p>Minimum set of working drawings for a contractor.</p>
                </Card>
                <Card>
                    <h3>Full design project</h3>
                    <p>Furniture Planning Solutions.</p>
                    <p>General concepts and stylistic collage.</p>
                    <p>Minimum set of working drawings for a contractor.</p>
                    <p>Photorealistic visualization for a room.</p>
                </Card>
            </div>
        </StyledServices>
    )
}

export default Services;

const StyledServices = styled.div`
    min-height: 70vh;
    h1{
        margin-top: 10rem;
        margin-bottom: 4rem;
        text-align:center;
        font-weight: lighter;
        font-size: 3rem;
    }

    #card-container{
        display:flex;
        justify-content: center;
    }

`
const Card = styled.div`
    /* background-color:yellow; */
    padding: 2rem 5rem;
    h3{
        padding-bottom: 2rem;
    }
    p{
        line-height: 1.8rem;
    }
`