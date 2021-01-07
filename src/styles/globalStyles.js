import { createGlobalStyle } from 'styled-components'
import { theme } from "../utilis/theme"

const GlobalStyle = createGlobalStyle`

  body {
    font-family: ${theme.fonts.lato};
    font-size: 14px;
    padding:0;
    margin:0;
    position: relative;
    color: ${theme.colors.gray};
    background-color: ${theme.colors.beigeUltraTransparent};

   @media (min-width: 1200px){
    font-size: 16px;
   }
  }
  section {
    padding: 50px 0;
    @media (min-width: 576px){
      padding: 100px 0;
    }
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${theme.fonts.playf};
      color: ${theme.colors.gray};
  }

  a {
      text-decoration: none;
  }

  *, *::before, *::after{
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
      outline: none;
  }

  .d-none {
    &-xs {
      @media (max-width: 767px) {
        display: none;
      }
    }

    &-sm {
      @media (max-width: 919px) {
        display: none;
      }
    }
    &-lg {
      @media (max-width: 1023px) {
        display: none;
      }
    }
  }

  h2 {
      
      font-size: 1.85em;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: .5em;

    
      @media (min-width: 576px){
        font-size: 2.65em;
      }
      // @media (min-width: 992 px){
      //   font-size: 2.5em;
      // }
     

  }

  h3 {
    font-size: 1.25em;
    line-height: 1.3em;
    margin: .75em 0 .5em;

    // @media (min-width: 576px){
    //   font-size: .8em;
    // }
    // @media (min-width: 1200px){
    //   font-size: 1.3em;
    // }
    // @media (min-width: 1400px){
    //   font-size: 1.2em;
    // }
  }
  h4 {font-size: 1em;}

  p {

      font-family: ${theme.fonts.lato};
      line-height: 1.55em;
      font-size: 1.05em;

      // @media (min-width: 576px) and (max-width: 1200px){
      //   @media (orientation:portrait){
      //     font-size: .55em
      //   }
      //   @media (orientation:landscape){
      //     font-size: 1.2em

      //   }
      // }
      
      // @media (min-width: 1400px){
      //   font-size: 1em;
      // }
     
  }

  .container {
      padding: 0 30px;

      @media (orientation: portrait){
          @media (min-height: 992px){
              padding: 0 60px;
          }
      }

      @media (min-width: 1366px) {
          max-width: 1200px;
          margin: auto;
      }
  }

  .container-fixed {
      @media(min-width: 1200px){
          max-width: 1140px;
          margin: auto;
      }
  }

  ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }

  img {
      max-width: 100%;
      max-height: 100%;
  }

  .bg-gray {
      background-color: ${theme.colors.beigeLight};
  }

  .btn {
    outline: none;
    border: none;
    text-transform: uppercase;
    font-size: .85em;
    letter-spacing: 1px;
    font-family: ${theme.fonts.lato} !important;
    padding: 1em 3em;
    transition: all .3s;

   

    &__beige--t {

      background: ${theme.colors.beigeTransparent};
      color:  ${theme.colors.grayLight} !important;

      &:hover {
        background: ${theme.colors.beigeLight};
      }

    }

    &__beige {
      background: ${theme.colors.beige};
      color: white;

      &:hover {
        background: white;
        color: ${theme.colors.grayLight}
      }
    }
  }

  .gatsby-image-wrapper {
    max-width: 100%;
  }

  .t-center {
    text-align: center;
  }

  @media (max-width: 1200px) { .rellax { transform: translate3d(0,0,0) !important; } }

`

export default GlobalStyle