import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  primaryRgb: "255, 255, 255",
  secondaryRgb: "0, 0, 0",
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme = {
  primaryRgb: "0, 0, 0",
  secondaryRgb: "255, 255, 255",
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
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
    border: 1px solid rgba(${({ theme }) => theme.secondaryRgb}, 1);
  }
  
  .pill.secondary {
    background: rgba(${({ theme }) => theme.secondaryRgb}, 1);
    color: rgba(${({ theme }) => theme.primaryRgb}, 1);
    border: 1px solid rgba(${({ theme }) => theme.secondaryRgb}, 1);
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
  
    `;
