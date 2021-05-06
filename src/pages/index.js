import React from "react"
import dictionary from '../utilis/dictionary'
import GlobalStyle from '../styles/globalStyles'
import Header from "../components/index/header"
import Nav from '../components/index/nav'
import About from '../components/index/about'
import Blog from '../components/index/blog'
import Yt from '../components/index/yt'
// import Ig from '../components/index/ig'
import Footer from '../components/footer'
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Rellax from 'rellax'
import { theme } from "../utilis/theme"
import Helmet from 'react-helmet'


class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dictionary,
      lang: 'pl'
    };
  }

  changeLang = (lang) => {
    this.setState({ lang }, () => {
      console.log(this.state.lang)
    });

  }

  handleMenu = () => {
    document.querySelector('header .nav').classList.toggle('active');
  }

  componentDidMount(){
    var rellax1 = new Rellax('.rellax1',{
        speed: -0.5,
        center:true
    });
    var rellax2 = new Rellax('.rellax2',{
      speed: 1,
      center:true
    });

    Swiper.use([Navigation, Pagination, Autoplay]);

    let swiper = new Swiper('.swiper-container-blog', {

      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 1000,


      breakpoints: {
  
        576:{
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
          slidesOffsetBefore: leftMargin,
        },
        1900: {
          slidesPerView: 6, 
          spaceBetween: 20,
          slidesOffsetBefore: leftMargin,
        },
      

      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      

    });
  


    let swiper2 = new Swiper('.swiper-container2', {

      slidesPerView: 1,
      loop: true,
      init: true,
      autoplay: {
        delay: 3500,
      },

      breakpoints: {

        576:{
          init: false
        },

      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

    });

   


    const menuItems = document.querySelectorAll('.menu__item');
    const about = document.getElementById('about').offsetTop - 40;
    // const blog = document.getElementById('blog').offsetTop;
    const yt = document.getElementById('yt').offsetTop  - 40;
    // const ig = document.getElementById('ig').offsetTop - 40;
    const footer = document.getElementById('footer').offsetTop - 40;

    window.onscroll = function() {scrollFunction()};

  
    function scrollFunction() {
    if ((document.body.scrollTop > about && document.body.scrollTop < yt) || (document.documentElement.scrollTop > about && document.documentElement.scrollTop < yt)) {
      menuItems.forEach(item=>item.style.background = theme.colors.beige);
      // console.log('about')
    } 
    // else if ((document.body.scrollTop > yt && document.body.scrollTop < ig) || (document.documentElement.scrollTop > yt && document.documentElement.scrollTop < ig)) {
    //   menuItems.forEach(item=>item.style.background = 'white');
    //   // console.log('yt')
    // }  
    else if ((document.body.scrollTop > yt && document.body.scrollTop < footer) || (document.documentElement.scrollTop > yt && document.documentElement.scrollTop < footer)) {
      menuItems.forEach(item=>item.style.background = theme.colors.beige)
      // console.log('ig')
    }  else{
      menuItems.forEach(item=>item.style.background = 'white');
      // console.log('else')
    }
    }

    window.onresize = leftMargin();
    function leftMargin() {
      let width = document.querySelector('.blog-list').clientWidth;
      if(window.innerWidth > 1900){
        width = 1.5*(width / 6);
      }
      if((window.innerWidth > 1400) && (window.innerWidth < 1900)){
        width = (width / 4)/2;
      }
     
      document.getElementById('blog-white').style.width = width + 'px';
      document.getElementById('blog-white2').style.width = width + 'px';
      return width;
    }
    // window.onresize = leftMargin;
    // function leftMargin(){
    //   return document.querySelector('.container').offsetLeft;
    // }
  

    document.querySelector('.blog-list').addEventListener('mouseenter', ()=>{

      document.getElementById('blog-white').classList.add('active')
      document.getElementById('blog-white2').classList.add('active')

    })
    document.querySelector('.blog-list').addEventListener('mouseleave', ()=>{

      document.getElementById('blog-white').classList.remove('active');
      document.getElementById('blog-white2').classList.remove('active');
      

    })
    

  }

  limitWords(textToLimit, wordLimit){
  
    let finalText = '';
    let text2 = textToLimit.replace(/\s+/g, ` `);
    let text3 = text2.split(` `);
    let numberOfWords = text3.length;

    let i=0;

    if(numberOfWords > wordLimit){
    for(i=0; i< wordLimit; i++)
    finalText = finalText+' '+ text3[i]+' ';

    return finalText;
    }
    else return textToLimit;
    }

  render() {

    return (
      <>
        <GlobalStyle />
        <Helmet>
          <title>NGNails | Gel Manicure and Nail Art Tutorials</title>
        </Helmet>

        <header>
          <Nav dictionary={this.state.dictionary} lang={this.state.lang} handleMenu={this.handleMenu} />
          <Header lang={this.state.lang} changeLang={this.changeLang} />
         </header>
         <main>
          <About dictionary={this.state.dictionary} lang={this.state.lang} />
          <Blog dictionary={this.state.dictionary} lang={this.state.lang} limitWords={this.limitWords} />
          <Yt dictionary={this.state.dictionary} lang={this.state.lang} />
          {/* <Ig dictionary={this.state.dictionary} lang={this.state.lang} /> */}
         </main>
         <footer>
           <Footer dictionary={this.state.dictionary} lang={this.state.lang}/>
         </footer>

      </>
    )
  }
}
export default IndexPage
