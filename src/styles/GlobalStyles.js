import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    ::-webkit-scrollbar{
        background-color:white;
        width:10px;
    }
    
    ::-webkit-scrollbar-thumb{
        background-color:rgba(0,0,0,0.3);
        border-radius: 1000px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background-color:rgba(0,0,0,0.6);
    }
 


    html,body{
        height:100%;
        
    }

    body{
        font-family: "Helvetica";
        overflow-x:hidden;
    }
    h3{
        font-size: 1.5rem;
    }
    button{
            height: 3rem;
            width: 9.5rem;
            border:none;
            color:white;
            background-color:#18070D;
            cursor:pointer;
            transition:all 1s ease;
            &:hover{
                width:12rem;
            }
        }

        // Animations
        .cardAnimFlex[data-value="true"]{
        /* background-color:yellow; */
        
         }
        .cardAnimFlex[data-value="false"]{
        /* background-color:none; */
         }
         

`

export default GlobalStyle;