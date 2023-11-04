import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  primaryRgb: '240, 240, 240',
  secondaryRgb: '7, 8, 18',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  accent: '160, 100, 255',
};

export const darkTheme = {
  primaryRgb: '7, 8, 18',
  secondaryRgb: '240, 240, 240',
  gradient: 'linear-gradient(#091236, #1E215D)',
  accent: '150, 170, 255',
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: rgba(${({ theme }) => theme.primaryRgb}, 1);      
    color: rgba(${({ theme }) => theme.secondaryRgb}, 1); 
    transition: all 0.25s linear;height:2000px
  }

  .blur {
    background: rgba(${({ theme }) => theme.primaryRgb}, 0.5);
    backdrop-filter: blur(5px);
    filter: drop-shadow(0px 0px 90px rgba(${({ theme }) =>
      theme.primaryRgb}, 1));
    opacity: 90%;
    /* border-radius: 50% 90% 50% 50%; */
    z-index: 1000;
    position: fixed;
    width: 100vw;
    height: 100vh;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    pointer-events: none;
  }

  
.pill {
    border-radius: 50px;
    padding: 2px 20px;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    /* width: fit-content; */
    display: inline-block;
    background: rgba(${({ theme }) => theme.primaryRgb}, 1);
    color: rgba(${({ theme }) => theme.secondaryRgb}, 1);
    border: 1px solid rgba(${({ theme }) => {
      return theme === lightTheme ? theme.secondaryRgb : theme.primaryRgb;
    }}, 1);
  }
  
  .pill.secondary {
    background: rgba(${({ theme }) => theme.secondaryRgb}, 1);
    color: rgba(${({ theme }) => theme.primaryRgb}, 1);
    border: 1px solid rgba(${({ theme }) => {
      return theme === darkTheme ? theme.primaryRgb : theme.secondaryRgb;
    }}, 1);
  }
  
  .navx {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }
  

  .pageHeader{
     background: rgba(${({ theme }) => theme.accent}, 1);
  }
  .pageHeader h1{
 
  }


  button{
    letter-spacing: 1px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    background:none;
    color: rgba(${({ theme }) => theme.secondaryRgb}, 1);
    border: 1px solid rgba(${({ theme }) => theme.secondaryRgb}, 1);
  }
  button:hover{
    background: rgba(${({ theme }) => theme.secondaryRgb}, 1);
    color: rgba(${({ theme }) => theme.primaryRgb}, 1);
  }
  button.active{
    background: rgba(${({ theme }) => theme.secondaryRgb}, 1);
    color: rgba(${({ theme }) => theme.primaryRgb}, 1);
  }
    `;
