import React from "react"
// import { Link } from "gatsby"
import styled from 'styled-components'
import Header from '../components/blog/header'
import Nav from '../components/blog/nav'
import Sidebar from '../components/blog/sidebar'
import GlobalStyle from '../styles/globalStyles'
import { theme } from "../utilis/theme"
import Footer from '../components/footer'
// import NavMobile from '../components/blog/nav-mobile'

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

const MainContainer = styled.div`

	padding: 0;

	@media (min-width: 576px){
		padding: 50px 0;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		position: relative;
		flex-wrap: wrap;

		@media (min-width: 992px){
			flex-wrap: nowrap
		}
	}

	.blog-list, .sidebar {
		background-color: white;
		padding: 20px;
		margin-top: 20px;
		
		@media (min-width: 992px){
			position: sticky;
			top: 0;
			margin-top: 0;
		}
	}
	.blog-list{
		@media (max-width: 991.9px){
			margin-bottom: 20px;
		}

	}

	.sidebar {
		width: 100%;
		@media (max-width: 991.9px){
			display: none;
		}
		

		@media (min-width: 992px){
			width: 29%;
		
		}	
	}

	
	

	.blog-list {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		@media (min-width: 992px){
			width: 69%;
		}

		>.btn {
			margin: 10px auto;

			&:hover {
				opacity: .8;
				background-color: ${theme.colors.beige};
				color: white;
			}
		}


	}

	@media (max-width: 575.99px){
		.container {
			padding: 0 15px;
		}
	}
	

	
	
`

export default function Layout({ children }) {

	function handleMenu(){
		document.querySelector('.burger').classList.toggle('active');
		document.querySelector('.blog-nav').classList.toggle('active');
	}
	return (

		<>

		<GlobalStyle />
	
		<header>
			<Header />
			<Nav />


			<Burger className="burger" onClick={handleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</Burger>

		</header>
	
		<main>
		<MainContainer>
		
			<div className="container">
				<section className="blog-list">
			
					{children}

				</section>
				<Sidebar/>
			</div>
		</MainContainer>
			
		</main>
	
		<footer>
			<Footer />
		</footer>
		
		</>

		

	)
  }