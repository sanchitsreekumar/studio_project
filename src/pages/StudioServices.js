import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import building from '../imgs/building.jpg';

import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { titleAnim, card1, fade1 } from "../components/animation";

const StudioServices = () =>{

    const controls = useAnimation();
    const [ref, inView] = useInView({threshold:0.20});


/*

    //Check the scroll position of the page
    const scrollRef = useRef();
    const scrollHandler = () =>{
        let scrollPos = scrollRef.current.getBoundingClientRect().top;
        let scrollPosVal = Math.ceil(scrollPos);
        if(scrollPosVal <= 400 && scrollPosVal > 10 ){
            console.log("position reached")
            controls.start('show');
        }
     
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
          window.removeEventListener("scroll", scrollHandler, true);
        };
      }, []);




*/




    useEffect(()=>{
        if(inView){
            controls.start('show');
        }
        if(!inView){
            controls.start('hidden');
        }
    }, [inView])



    return(
        <StyledStudioServices 
        // ref={scrollRef}
        ref={ref}
        >
            <motion.h1  variants={titleAnim} animate={controls}>Studio Services</motion.h1>
            <StyledContainer>
                <motion.div id="img-container" variants={fade1} animate={controls} initial="hidden">
                    <img src={building} alt="building" />
                </motion.div>
                <Cards variants={card1} animate={controls} initial="hidden">
                    <Card variants={card1}>
                        <h4>Architecture</h4>
                        <p>Design and visualization</p>
                        <button>Read</button>
                    </Card>
                    <Card variants={card1}>
                        <h4>Design</h4>
                        <p>Interior and exterior</p>
                        <button>Read</button>
                    </Card>
                    <Card variants={card1}>
                        <h4>3D</h4>
                        <p>Panoramic tour</p>
                        <button>Read</button>
                    </Card>
                    
                </Cards>

            </StyledContainer>
            <motion.button id="btn-margin"  variants={titleAnim} animate={controls} initial="hidden">Learn more</motion.button>
        </StyledStudioServices>
    )
}

export default StudioServices;


const StyledStudioServices = styled.div`
    min-height: 70vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#F7f6f8;
    h1{
        margin-top: 10rem;
        margin-bottom: 4rem;
        text-align:center;
        font-weight: lighter;
        font-size: 3rem;
    }
    #btn-margin{
        margin-bottom: 10rem;
    }
`

const StyledContainer = styled.div`
    min-width: 60vw;
    /* background-color:yellow;     */
    position: relative;
    top:0;
    left:0; 
    display:flex;
    margin-bottom: 4rem;

    #img-container{
        width: 60%;
        height: 90vh;
        /* background-color:green; */
        overflow:hidden;
        

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display:block;
        }
    }

  

`

const Cards = styled(motion.div)`
    width:40%;

`
const Card = styled(motion.div)`
    background-color:white;
    height: 33.33%;
    width: 100%;
    border: 1px solid #F7f6f8;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding: 3rem 3rem 0 3rem;

    h4{
        font-size: 1.2rem;
    }

    p{
        padding: 1rem 0;
        font-size: 0.8rem;
    }

    button{
        border:none;
        background-color:white;
        color:black;
        font-weight: bold;
        text-align:start;
        transition: all .5s ease;
        &:hover{
            transform:translateX(5px);
        }
    }
`