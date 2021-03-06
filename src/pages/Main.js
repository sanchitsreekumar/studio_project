import React from "react";
import styled from "styled-components";
import sofa from '../imgs/sofa.jpg';

//Animation
import {motion} from 'framer-motion';
import {titleAnim, fade, containerAnim, photoAnim} from '../components/animation'

const Main =() =>{


    return(
        <StyledContainer>
            <StyledTop variants={containerAnim} initial="hidden" animate="show">
                <motion.h3 variants={titleAnim} >This is</motion.h3>
                <motion.h1 variants={titleAnim} >Studio by Interior</motion.h1>
            </StyledTop>
            <StyledBottom>
                <Card1>
                    <motion.div id="card-left"  variants={containerAnim} initial="hidden" animate="show">
                        <motion.h3 variants={titleAnim}>Feel the style</motion.h3>
                        <motion.p variants={titleAnim}>We create ergonomic spaces <br/> with individual design.</motion.p>
                        <motion.button variants={fade} initial="hidden" animate="show">Get Started</motion.button>
                    </motion.div>
                </Card1>
                <Card2>
                    <Hide>
                    <motion.img variants={photoAnim} initial="hidden" animate="show" src={sofa} alt="" />
                    </Hide>
                </Card2>
            </StyledBottom>
        </StyledContainer>
    )
}

export default Main;

const StyledContainer = styled.div`
    min-height: 90vh;
    width:100%;
    /* background-color:yellow; */
    /* position:relative;
    top:0; */
`
const StyledTop = styled(motion.div)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* background-color:green; */
    min-height:35vh;
    h1{
        font-weight: lighter;
        font-size:4rem;
    }
`
const StyledBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height:55vh;
`

const Card1 = styled.div`
    /* flex-grow: 1; */
    min-width: 30%;
    background-color: #F7f6f8;
    #card-left{
        /* background-color: #F7f6f8; */
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: start;
        margin: 0 5rem;
        padding: 2rem 0;

        p{
            padding: 1rem 0;
            line-height: 1.5rem;
        }
        

    }
    

`

const Card2 = styled.div`
    flex:1; 
    /* flex-shrink: 0; */
    /* min-height:55vh; */
    /* background-color:blue; */
    min-width: 60%;
    /* max-height: 55vh; */

            img{
                width: 100%;
                height: 55vh;
                object-fit: cover;
                display:block;
            }
        
`
const Hide = styled.div`
    overflow:hidden;
`

// const Card = styled.div`
//     flex-basis: 30rem;
    
//     #card-left{
//         background-color: #F7f6f8;
//         height:100%;
//         display:flex;
//         flex-direction:column;
//         justify-content:center;
//         align-items: start;
//         padding-left: 5rem;

//         p{
//             padding: 1rem 0;
//             line-height: 1.5rem;
//         }
//         button{
//             height: 3rem;
//             width: 9.5rem;
//             border:none;
//             color:white;
//             background-color:#18070D;
//             cursor:pointer;
//             transition:all 1s ease;
//             &:hover{
//                 width:12rem;
//             }
//         }

//     }
    
//     #card-right{
//         /* min-height:55vh; */
//         background-color:green;
//         /* min-width:100%; */
//         flex-grow: 3;
//             img{
//                 max-width: 100%;
//                 max-height: 100%;
//                 display: block;
//             }
//         }
// `

