import React,{useEffect, useState} from "react";
import styled from "styled-components";
import minimal from '../imgs/minimal.jpg';
import contemporary from '../imgs/contemporary.jpg'
import traditional from '../imgs/traditional.jpg'
import transitional from '../imgs/transitional.jpg'


import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { titleAnim, card2, card3, fade1 } from "../components/animation";


const InteriorDesign = () =>{

    const controls = useAnimation();
    const [ref, inView] = useInView({threshold:0.3});
    
    useEffect(()=>{
        if(inView){
            controls.start("show");
            
        }else{
            controls.start("hidden")
        }
    },[inView]);


    


    useEffect(()=>{
        const designLists = document.querySelectorAll('.design-lists');
            designLists.forEach((designList)=>{
                designList.addEventListener('click', (e)=>{
                    // console.log(e.target.id)
                    removeClassList()
                    designList.classList.add('active')
                    imgChanger(e)
                })
            })
            function removeClassList(){
                designLists.forEach((designList)=>{
                    designList.classList.remove('active')
                })
            }
    },[]);

    function imgChanger(e){
        let img = document.querySelector('.img')
        let imgContainer = document.querySelector('#img-container1')
        switch(e.target.id){
            case "1":
                img.src = minimal
                // console.log(imgContainer.innerHTML);
                // imgContainer.innerHTML += `<motion.img className="img" variants={fade1} animate={controls} src={minimal} alt="" />`
                break;
            case "2":
                img.src = contemporary
                // console.log(imgContainer.innerHTML);
                break;
            case "3":
                img.src = traditional
                break;
            case "4":
                img.src = transitional
                break;
            default:
                console.log("other ids")
        }

        // if(e.target.id == 2){
        //     img.src = contemporary
        // }else{
        //     console.log("other ids")
        // }
        
        
    }


    return(
        <StyledInterior ref={ref}>
            <motion.h1 variants={titleAnim} animate={controls}>Choose interior design style</motion.h1>
            <ul className="design-container">
                <motion.li className="design-lists active" id="1" animate={controls} variants={card2}>Minimalist</motion.li>
                <motion.li className="design-lists" id="2" animate={controls} variants={card2}>Contemporary</motion.li>
                <motion.li className="design-lists" id="3" animate={controls} variants={card3}>Traditional</motion.li>
                <motion.li className="design-lists" id="4" animate={controls} variants={card3}>Transitional</motion.li>
            </ul>
            <div id="img-container1">
                <motion.img className="img" variants={fade1} animate={controls} src={minimal} alt="" />
            </div>
           
        </StyledInterior>
    )

}


const StyledInterior = styled.div`
    min-height: 70vh;
    /* background-color:yellow; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 0 5rem;
    margin-bottom:10rem;
    h1{
        margin-top: 10rem;
        margin-bottom: 4rem;
        text-align:center;
        font-weight: lighter;
        font-size: 3rem;
    }
    ul{
        display:flex;
        justify-content:space-between;
        /* background-color:green; */
        list-style:none;
        min-width:30rem;
        margin-bottom: 4rem ;

        li{
            font-size:0.8rem;
            font-weight:bold;
            color:#bcc2d0;
            cursor:pointer
        }
        .design-lists.active{
            color:rgba(0,0,0,0.7);
        }
    }
    #img-container1{
        /* max-width:80%;
        max-height:70vh; */
        width:100%;
        height: 500px;
        /* background-color:green; */
        /* overflow:hidden; */ 

        .img{
            width:100%;
            height:100%;
            /* width:100%;
            height:70%; */
            display:block;
            object-fit:contain;
        }
    }
`


export default InteriorDesign;