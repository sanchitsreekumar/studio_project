import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        font-family: "Helvetica";
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

`

export default GlobalStyle;