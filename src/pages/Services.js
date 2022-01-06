import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {titleAnim, card} from '../components/animation';

import {useAnimation, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';


// function Animation(){
//     const controls = useAnimation();
//     const [ref, inView] = useInView();
    
//     useEffect(()=>{
//         if(inView){
//             controls.start("show");
//         }else{
//             controls.start("hidden")
//         }
//     },[controls,inView]);
//     return(
//         <motion.h1 
//         ref={ref}
//         animate={controls}
//         initial="hidden"
//         variants={titleAnim}
//        >
//            Service Packages
//        </motion.h1>
//     )
// }

const Services = () =>{
    const controls = useAnimation();
    const [ref, inView] = useInView({threshold:0.5});
    const [value, setValue] = useState(false);
    
    useEffect(()=>{
        if(inView){
            controls.start("show");
            setValue(true)
            
        }else{
            controls.start("hidden")
            setValue(false) 
        }
    },[controls,inView]);
    return(
        <StyledServices>
           <motion.h1 ref={ref} animate={controls} initial="hidden" variants={titleAnim}>
                Service Packages
            </motion.h1>
            <div id='card-container'>
                <Card ref={ref} layout animate={controls} initial="hidden" variants={card} className="cardAnimFlex" data-value={value}>
                    <h3>Sketch design project</h3>
                    <p>Furniture Planning Solutions.</p>
                    <p>General concepts and stylistic collage.</p>
                    <p>Minimum set of working drawings for a contractor.</p>
                </Card>
                <Card  animate={controls} initial="hidden" variants={card} >
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
    position:relative;
    z-index: 3;
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
const Card = styled(motion.div)`
    /* background-color:yellow; */
    padding: 2rem 5rem;
    h3{
        padding-bottom: 2rem;
    }
    p{
        line-height: 1.8rem;
    }
 //for card animation check global styles
`