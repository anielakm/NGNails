import React from "react"
import styled from 'styled-components'
import { theme } from "../../utilis/theme"
import {Link} from 'gatsby'

const NavContainer = styled.div`
	background: white;
	transition: all .3s;
	/* display: none; */

	@media (max-width: 991.99px){
		/* display: block; */
		position: fixed;
		top: 0;
		right: 0;
		width: 75%;
		transform: translateX(150%);
		height: 100vh;
		z-index: 99;

		&.active {
			transform: translateX(0);
			ul {
				text-align: right;

				li:nth-last-child(2){
					display: none;
				}

				
			}
		}
		
		.container {
			height: 100%;
			flex-direction: column;
			justify-content: center;

		}
		ul {
			flex-direction: column;
			justify-content: center;
			height: 100%;

			.back {
				margin-top: 20px;
				display: flex;
				align-items: center;
				a {
					color: ${theme.colors.beige};
				}
				svg {
					fill: ${theme.colors.beige};
					max-width: 17px;
					margin-bottom: -2px;
					height: auto;
					margin-right: 15px;
				}
			}

		}
	}

	@media (min-width: 992px){
		padding: 10px 0;
		li:first-child, li:last-child {
			display: none;
		}
	}

	ul {
		display: flex;

		h3 {
			width: 100%;
		}

		li {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 10px;
			padding: 10px 20px;
			a {
				color: ${theme.colors.grayLight};
				width: 100%;
				height: 100%;
				position: relative;
				white-space: nowrap;

				&::after {
					content: '';
					display: block;
					position: absolute;
					bottom: -5px;
					left: 0;
					width: 0;
					height: 1px;
					transition: all .5s;
					background: ${theme.colors.grayList};

				}

				&:hover {
					color: ${theme.colors.beige};

					/* &::after {
						width: 100%;
						background: ${theme.colors.beige};
					} */

				}
				
				/* background-color: ${theme.colors.beigeDarkTransparent}; */

			}
		}
	}

`

const Nav = () => (
	<NavContainer className="blog-nav">

		<div className="container">
		
			<ul>
				<li><h3>Kategorie wpisów: </h3></li>
				<li><Link to="/manicure-hybrydowy">Manicure hybrydowy</Link></li>
				<li><Link to="/manicure-zelowy">Manicure zelowy</Link></li>
				<li><Link to="/zdobienia">Zdobienia</Link></li>
				<li><Link to="/nowosci">Testy produktów</Link></li>
				<li><Link to="/inne">Inne</Link></li>
				<li><Link to="/blog">Wszystkie posty</Link></li>
				<li><Link to="/">Strona główna</Link></li>
				<li className="back"><Link to="/"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
				viewBox="0 0 206.108 206.108"  >
		   <path d="M152.774,69.886H30.728l24.97-24.97c3.515-3.515,3.515-9.213,0-12.728c-3.516-3.516-9.213-3.515-12.729,0L2.636,72.523
			   c-3.515,3.515-3.515,9.213,0,12.728l40.333,40.333c1.758,1.758,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636
			   c3.515-3.515,3.515-9.213,0-12.728l-24.97-24.97h122.046c19.483,0,35.334,15.851,35.334,35.334s-15.851,35.334-35.334,35.334H78.531
			   c-4.971,0-9,4.029-9,9s4.029,9,9,9h74.242c29.408,0,53.334-23.926,53.334-53.334S182.182,69.886,152.774,69.886z"/>
		   
		   </svg>
		    <span>Powrót do strony głównej</span></Link></li>
			</ul>
		
		</div>
		
	</NavContainer>
)

export default Nav;