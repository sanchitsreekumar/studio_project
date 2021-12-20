import React from "react";
import styled from "styled-components";
import furniture from '../imgs/furniture1.jpg'

const Design = () =>{
    return(
        <StyledDesign>
            <div id="design-left">
                <div>
                    <h1>Choose your
                        <br/>own design
                    </h1>
                    <p>We love when "less words, more work" and
                        create a design that you want to look at forever.
                    </p>
                    <button>More details</button>
                </div>
            </div>
            <div id="design-right">
                <img src={furniture} alt="" />
            </div>
        </StyledDesign>
    )
}

export default Design;

const StyledDesign = styled.div`
    min-height: 90vh;
    padding: 0 5rem;
    display:flex;
    flex-wrap:wrap;
    justify-content:center; 
    align-items:center;

    #design-left{
        /* min-width:30rem; */
        display:flex;
        flex:1;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        /* background-color:yellow; */
        /* padding:5rem; */
        div{
            width:25rem;
            /* background-color:green; */

            h1{
                font-weight: lighter;
                font-size:3rem;
                padding:0 0 2.5rem 0;
             }
             p{
                line-height: 1.8rem;
                padding:0 0 2.5rem 0;
            }
        }
    }

`