import React from 'react'
import Footer from '../components/footer'
import Header from '../components/blog/header'
import Main from '../components/blog/main'
import Nav from '../components/blog/nav'
import GlobalStyle from '../styles/globalStyles'
import { theme } from "../utilis/theme"
import 'swiper/swiper-bundle.css';
import Helmet from 'react-helmet'

import styled from 'styled-components'

const Burger = styled.div`

		width: 46px;
		height: 46px;
		/* border-radius: 50%; */
		position: fixed;
		top: 20px;
		padding: 13px 9px;
		justify-content: space-between;
		flex-wrap: wrap;
		flex-direction: column;
		cursor: pointer;
		transition: all .8s;
		z-index: 9999;
		display: none;

		@media (max-width: 991.99px){
			display: flex;
		}

		@media (max-width: 575.9px){
			right: 20px;
		}
		@media (min-width: 576px){
			left: 30px;
		}
			
	

		@media (min-width: 768px) {
			top: 40px;
			left: 40px;
			
		}

		@media (min-width: 920px) {
			top: 40px;
			left: 40px;
		
		}


		span {
			width: 100%;
			height: 2px;
			background: white;
			display: block;
			transition: all .3s;
			//margin: 2.5px 0;
			@media (min-width: 768px) {
				height: 3px;
			}
			@media (min-width: 920px) {
				height: 2px;
			}

		}

		&.active {
			span:last-child {
				display: none;
			}
			span {
				position: absolute;
				top: 20px;
				right: 7px;
				width: 70%;
				background: ${theme.colors.beige};
			}
			span:nth-child(1){
				transform: rotate(45deg);
			}
			span:nth-child(2){
				transform: rotate(-45deg);
			}
		}


`


class Blog extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			postToShow: 8,
		};
	  }

	handlePost = () => {
		  this.setState((state, props)=>({postToShow: this.state.postToShow + 8}));
	  }

	handleMenu(){
		document.querySelector('.burger').classList.toggle('active');
		document.querySelector('.blog-nav').classList.toggle('active');
	}
		

		  render() {

			return (

				<React.Fragment>
				<Helmet>
				<title>NGNails Blog| Gel Manicure and Nail Art Tutorials</title>
			  </Helmet>

					<GlobalStyle />

					<header>
						<Header />
						<Nav />

						<Burger className="burger" onClick={this.handleMenu} >
							<span></span>
							<span></span>
							<span></span>
						</Burger>
					
					</header>

					<main>
						<Main handlePost={this.handlePost} postToShow={this.state.postToShow} />
					</main>

					<footer>
						<Footer />
					</footer>
		
				</React.Fragment>

)
}
}


export default Blog;