import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import furniture from '../imgs/furniture1.jpg'

import {motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";

import {blockHide, containerAnim, fade} from '../components/animation';


// let topPos = el.getBoundingClientRect().top + document.documentElement.scrollTop
// console.log(topPos)

// window.addEventListener("scroll", (event) => {
//     let scroll = window.scrollY;
//     console.log("scroll", scroll)
// });


const Design = () =>{

    const controls = useAnimation();
    const controls2 = useAnimation();
    const [ref, inView] = useInView({threshold:0.35});


/* EXTRA CODE FOR SCROLL (UNNECESSARY)
    //Check the scroll position of the page
    const scrollRef = useRef();
    const scrollHandler = () =>{
        let scrollPos = scrollRef.current.getBoundingClientRect().top;
        let scrollPosVal = Math.ceil(scrollPos);
        if(scrollPosVal <= 400 && scrollPosVal > 10 ){
            console.log("position reached")
            controls.start('show');
        }
        else if(scrollPosVal > 200 || scrollPosVal < -600 ) {
            controls.start('hidden')
        } 
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
          window.removeEventListener("scroll", scrollHandler, true);
        };
      }, []);

      */

    // Add the animation when the page is in View
    useEffect(()=>{
        if(inView){
            controls.start('show');
            controls2.start('show');
        }
        if(!inView){
            controls.start({y:100, opacity:0, transition:{duration:1}});
            controls2.start({y:0, opacity:1, transition:{duration:1}});
        }
    },[inView]);


    return(
        <StyledDesign  
        // ref={scrollRef}
        ref={ref}
        >
            <motion.div id="design-left" variants={containerAnim} animate={controls}>
                <div>
                    <motion.h1>Choose your
                        <br/>own design
                    </motion.h1>
                    <motion.p>We love when "less words, more work" and
                        create a design that you want to look at forever.
                    </motion.p>
                    <motion.button>More details</motion.button>
                </div>
            </motion.div>
            <div>
                <img src={furniture} alt="" />
            </div>
            <motion.div 
            id="block-hide"
            variants={blockHide} animate={controls2}
            >

            </motion.div>
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
    position:relative;
    overflow:hidden;
    /* background-color:yellow; */

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

    #block-hide{
        width:27rem;
        height:90vh;
        background-color:white;
        margin: 0 5rem;
        position:absolute;
        top:0;
        right:0;
    }

`