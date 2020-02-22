import styled, { css } from "styled-components";
export const HeaderContainer = styled.header`
         display: flex;
         background-color: #035b8f;
         align-items: center;
         height: 15vh;
         justify-content: space-between;

         button {
           border: none;
         }
         p,
         h1,
         h2,
         h3,
         h4,
         h5,
         h6 {
           margin: 0;
         }
         .flex {
           display: flex;
           justify-content: center;
           align-items: center;
         }
         .imageMain {
           flex-basis: 40%;
         }
         .imagediv {
           height: 100px;
           width: 150px;
           margin-left: 20%;
         }
         .logo {
           max-width: 150px;
           max-height: 100px;
           width: auto;
           height: auto;
         }
         .navBar {
           flex-basis: 60%;
           /* display:flex; */
         }
         .navBarSub {
           margin: auto;
           width: max-content;
         }
         .ul {
           display: inline-flex;
         }

         .header_button {
           width: max-content;
           padding: 10px 15px;
           border-radius: 20px;
           border: none;
           background-color: orangered;
           color: white;
           opacity: 0.7;
           font-weight: bold;
         }
         .header_button:hover {
           cursor: pointer;
           opacity: 1;
         }
         .li {
           list-style: none;
           width: max-content;
         }
         .header_a {
           text-decoration: none;
           color: #fff;
           margin-right: 15px;
           margin-left: 15px;
           padding-bottom: 2px;
         }
         .header_a:hover {
           border-bottom: 3px solid orangered;
         }

         /* --------------------responsiveness----- */
         .menu_icon_div {
           display: none;
           grid-gap: 7px;
         }
         .menu_icon {
           width: 25px;
           border: 2px solid orangered;
           opacity: 0.7;
         }
         @media (max-width: 650px) {
           .menu_icon_div {
             display: grid;
             margin-left: 3vw;
           }
           header {
             flex-direction: column;
             justify-content: center;
           }
           .imageMain {
             display: flex;
             width: 100%;
             align-items: center;
             justify-content: space-between;
             position: relative;
           }
           .logo {
             max-width: 70px;
             max-height: 70px;
             width: auto;
             height: auto;
           }
           .header_a {
             color: black;
           }
           .menu_icon_div {
            margin-left: 7vw;
           }
           .navBar {
             background-color: #035b8fed;
             position: absolute;
             top: 10vh;
             width:100vw;
             overflow: hidden;
             left:0;
             right:0;
             margin; auto;
             display: ${props => (props.openMenu ? css` block ` : css`none`)};
             animation: dropdown .3s ease-in forwards ;
           }
           @keyframes dropdown {
             0% {
               height: 0px;
               padding: 0;
             }
             20% {
               height: 40px;
               padding: 4px 0;
             }
             40% {
               height: 80px;
               padding: 8px 0;
             }
             60% {
               height: 120px;
               padding: 12px 0;
             }
             80% {
               height: 160px;
               padding: 16px 0;
             }
             100% {
               height: 240px;
               padding: 24px 0;
             }
           }

           .navBarSub,
           .ul {
             flex-direction: column;
           }
           .li,
           .header_button {
             margin: 20px;
           }
           .li {
             margin-right: 30px;
             margin-left: 0;
           }
           .menu_icon_div:hover {
             cursor: pointer;
           }

           header {
             height: 10vh;
           }
           /* .header_a:hover {
    border-bottom: 3px solid orangered;
    color: orangered;
  } */
         }
       `;
