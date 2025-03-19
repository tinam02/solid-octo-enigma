import styled, { createGlobalStyle } from 'styled-components';

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

export const ProjSummary = styled.div(props => ({
  display: 'grid',
  gridTemplateColumns: '70px 1fr',
  paddingTop: 10,
}));

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: rgba(${({ theme }) => theme.primaryRgb}, 1);      
    color: rgba(${({ theme }) => theme.secondaryRgb}, 1); 
    transition: all 0.25s linear; 
  }

  a{
     text-decoration: underline;
  }

  .markdown *{
    white-space: pre-wrap ;
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
    top: 5px;
    left: 0;
    width: 100%;
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

 .project  header:hover{
 background: linear-gradient(180deg, rgba(135,2,250,1) 0%, rgba(0,0,0,0) 100%); 
  }
  .dividerx{
    width:1px;
    height:100%;
    border-right:1px solid rgba(${({ theme }) => theme.secondaryRgb}, 1);
    background: rgba(${({ theme }) => theme.secondaryRgb}, 1);
  }

  

  .borderColor{
    border-color: rgba(${({ theme }) => theme.secondaryRgb}, 1);
  }


  // Swiper
  .swiper {
    max-width: 80vw;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    max-height:max-content;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    max-height:800px;
    max-width:750px;
   }

   .swiper-slide figcaption{
    background: rgba(${({ theme }) => theme.primaryRgb}, 0.5);
   }

  .swiper-button-next,
          .swiper-button-prev {
           height:80px;
           width:80px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url("/img/paperclip.png");

           }

          .swiper-button-prev {
            transform: rotate(40deg);

          }

          .swiper-button-next {
            transform: rotate(220deg);

          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }
  
 .marquee-container {
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  display: flex;
  gap: 2rem;
}

.marquee {
  display: flex;
  gap: 2rem;
  animation: marquee 5s linear infinite;
}

.marquee-text {
  font-size: 16px;
  font-weight: bold;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}


    `;
