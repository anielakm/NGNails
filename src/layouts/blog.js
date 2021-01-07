import React from "react"
// import { Link } from "gatsby"
import styled from 'styled-components'
import Header from '../components/blog/header'
import Nav from '../components/blog/nav'
import Sidebar from '../components/blog/sidebar'
import GlobalStyle from '../styles/globalStyles'
import { theme } from "../utilis/theme"
import Footer from '../components/footer'


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
	return (

		<>

		<GlobalStyle />
	
		<header>
			<Header />
			<Nav />
			{/* <NavMobile/> */}
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