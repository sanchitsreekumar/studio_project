import React,{useEffect} from "react";
import styled from "styled-components";

import {card2, card3} from '../components/animation';

import {useAnimation, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const Facts =()=>{

    const controls = useAnimation();
    const [ref, inView] = useInView({threshold:0.3});
    
    useEffect(()=>{
        if(inView){
            controls.start("show");
            
        }else{
            controls.start("hidden")
        }
    },[inView]);



    return(
        <StyledFacts ref={ref} >
            <div id='card-container'>
                <Card animate={controls} variants={card2}>
                <h2>it's a fact</h2>
                <h1>Always find who<br/>will do it better</h1>  
                    <p>Having started designing, we agree on the overall</p>
                    <p>project budget, which allows us to select interior items</p>
                    <p>exclusively within its framework</p>
                    <h3>D. Neiman &#8275;</h3>
                </Card>
                <Card animate={controls} variants={card3}>
                    <div id="card2">
                    <p>Monthly take no more than 5 designs to develop</p>
                    <p>because we follow quality of execution all works at</p>
                    <p>every stage of design</p>
                    </div>
                </Card>
            </div>
        </StyledFacts>
    )
}

export default Facts;


const StyledFacts = styled.div`
    min-height: 70vh;
    /* justify-content:center; */
    /* align-items:center; */
    /* text-align:start; */
    /* margin: 0 10rem 0 10rem; */

 
    h2{
        margin-top: 10rem;
        margin-bottom: 1rem;
        /* padding: 0 0 0 5rem; */
    }
    h1{
        margin-bottom: 1rem;
        /* text-align:center; */
        font-weight: lighter;
        font-size: 3rem;
        /* padding: 0 0 0 5rem; */
    }

    #card-container{
        /* display:flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items:end; */
        display:grid;
        grid-template-columns: 50% 1fr;
        gap:1rem;
        align-content:center;
        margin:0 5rem;
    }

`
const Card = styled(motion.div)`
    justify-self: center;
    align-self: end;
    /* background-color:yellow; */
    padding: 1rem 5rem;
    flex-grow:1;
    /* flex-basis:50%; */
    /* flex:1; */
    h3{
        padding-top: 2rem;
        font-size: 1rem;
    }
    p{
        font-size:0.8rem;
        line-height: 1.2rem;
        color:#bcc2d0;
    }

    #card2{
        padding-bottom:3rem;
    }

`