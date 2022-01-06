import React, {useState, useEffect } from "react";
import styled from "styled-components";
import data from '../resources/data';


const Testimony = () =>{
    const [invoke, setInvoke] = useState(false)
    const [btnLeft, setBtnLeft] = useState(0)
    let dataLen = data.length - 1;
    
    function testLeft(){
        if(btnLeft<=0){
            // console.log("btn Left is 0", btnLeft)
            setBtnLeft(dataLen)
        }else{
            setBtnLeft(btnLeft-1)
            // console.log("decrease btn left",btnLeft)
        }
    }
    function testRight(){
        if(btnLeft >= dataLen){
            // console.log("btn Left >=2 so 0", btnLeft)
            setBtnLeft(0)
        }else{
            setBtnLeft(btnLeft + 1)
            // console.log("less<2 so +1 ",btnLeft)
        }
    }


    return(
        <StyledTestimony>
            {/* <button id="symbol">
                left arrow
            </button> */}
            <button id="symbol" onClick={() => testLeft()}>
            <i class="fas fa-angle-double-left"></i>
            </button>
            <div id="content">
                <h2>&#10077;</h2>
                <p>{data[btnLeft].content}
                </p>
                <h2>&#10078;</h2>
                <h3>{data[btnLeft].Name}&#8275;</h3>
            </div>
            <button id="symbol" onClick={() => testRight()}>
            <i class="fas fa-angle-double-right"></i>
            </button>
            {/* <button id="symbol" onClick={mapIncFunction()}>
                right arrow
            </button> */}
        </StyledTestimony>
    )
}

const StyledTestimony = styled.div`
    min-height: 70vh;
    padding: 0 5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* background-color:yellow; */
    #content{
        width:40rem;
    }
    h2{
        color:#bcc9d0;
        font-size: 3rem;
    }
    h3{
        padding-top: 2rem;
        font-size: 1rem;
    }
    p{
        font-size:0.8rem;
        line-height: 1.2rem;
        color:#bcc2d0;
    }
    #symbol{
        background:none;
        color:black;
        i{
            transform:scale(1.5);
            transition: all 0.75s ease;
        }
        &:hover{
            width:9.5rem;
            i{
                transform:scale(2)
            }
        }
    }
`

export default Testimony;