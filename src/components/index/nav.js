import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components'
import { theme } from "../../utilis/theme"
// import logo from '../../images/ngn-white.png'

const NavContainer = styled.nav`

.nav{
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: -5;
	background: transparent;
	backdrop-filter: blur(0px);
	transition: all 1s;


	.logo {
		position: absolute;
		bottom: 30px;
		left: -35px;
		right: 0;
		margin: auto;

		width: 75px;
	}

	.nav__bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 998;
		cursor: pointer;

	}

	

	&.active {
		

		background: rgba(255,255,255,0.5);
		backdrop-filter: blur(10px);
		z-index: 999999;

		.nav__container{
			transform: translateX(0);
			z-index: 999999999;
		}
		

	}

	.nav__container{

		transform: translateX(-100%);
		transition: all 1.2s;
		background: white;
		width: 100%;
		position: absolute;
		height: 100%;
		z-index: 999999;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		@media(min-width: 1200px) {
			width: 35%;
		}
		
		.close {
			position: absolute;
			top: 0;
			right: 0;
			width: 30px;
			height: 30px;
			margin: 20px;
			cursor: pointer;
	
			&__container {
				position: relative;
				
			}

			transition: all 0.3s;

			&:hover {
				transform: rotate(90deg);
			}
			
			span {
				width: 100%;
				height: 2px;
				background: ${theme.colors.beige};
				transform: rotate(45deg);
				display: block;
				position: absolute;
				top: 0;
				right: 0;
				margin-top: 50%;
				
	
				&:nth-child(2){
					transform: rotate(-45deg);
				}

			
			}
		}
	
		.nav__menu {
	
			
			@media (min-width: 576px){
				margin-left: -30px;
			}

			li{
				margin: 50px 0;
				cursor: pointer;
				position: relative;
				width: fit-content;
				transition: all 0.3s;
				font-size: 1.2em;
				text-transform: lowercase;

				@media (max-width: 575.9px){
					text-align: center;
					width: 100%;
				}

				@media (min-width: 576px){
					font-size: 1.4em;
				}


				@media(min-width: 1200px){
					font-size: 1.1em;
				}

				&:hover {
					color: ${theme.colors.beige};
					&:after {
						width: 100%;
					}
				}

				&:after{
					position: absolute;
					content:'';
					width: 0;
					height: 2px;
					background: ${theme.colors.beige};
					bottom: 0;
					left: 0;
					margin-bottom: -10px;
					transition: all 0.3s;

				}
			}
		}

		.nav__sm {

			display: flex;

			@media(min-width: 1024px){
				display: none;
			}
			
			li {
		
				a {
					background: transparent;
					width: 35px;
					height: 35px;
					padding: 5px;
					display: block;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					
					transition: all 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
				
				
					svg {
						width: 20px;
						height: 20px;
						fill: ${theme.colors.beige};
					}

					&:hover {
						background: ${theme.colors.beige};
						svg {
							fill: white;
						}
					}
				}
			}
		}

	}
}

	.menu {
		width: 46px;
		height: 46px;
		/* border-radius: 50%; */
		position: fixed;
		top: 20px;
		padding: 13px 9px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		flex-direction: column;
		cursor: pointer;
		transition: all .8s;
		z-index: 9999;

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


		&__item {
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
		&:hover {
			.menu__item:nth-child(2){width: 85%}
			.menu__item:nth-child(3){width: 70%}
		}
	}

`


	



const Nav = ({ dictionary, lang, handleMenu }) => {



	return (

		<NavContainer>


		<div className="menu" onClick={handleMenu}>
			<span className="menu__item"></span>
			<span className="menu__item"></span>
			<span className="menu__item"></span>
		</div>


	<div className="nav">


		<div className="nav__bg" onClick={handleMenu}></div>
		<div className="nav__container" >

			<div className="close">
				<div className="close__container" onClick={handleMenu}>
					<span></span>
					<span></span>
				</div>

			</div>
			<ul className="nav__menu">
				<li onClick={() => {
					handleMenu();
					scrollTo('#about')
				}
				}  >{lang === 'pl' ? dictionary.pl.about_title : dictionary.en.about_title}</li>
				<li
					onClick={() => {
						handleMenu();
						scrollTo('#blog')
					}
					}
				>blog</li>
				<li
					onClick={() => {
						handleMenu();
						scrollTo('#yt')
					}
					}
				>youtube</li>
				<li
					onClick={() => {
						handleMenu();
						scrollTo('#ig')
					}
					}
				>instagram</li>
			</ul>

			<ul className="nav__sm">

				<li><a href="https://pinterest.com/ngnails/ngnails/" target="_blank"><svg id="Bold" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12.326 0c-6.579.001-10.076 4.216-10.076 8.812 0 2.131 1.191 4.79 3.098 5.633.544.245.472-.054.94-1.844.037-.149.018-.278-.102-.417-2.726-3.153-.532-9.635 5.751-9.635 9.093 0 7.394 12.582 1.582 12.582-1.498 0-2.614-1.176-2.261-2.631.428-1.733 1.266-3.596 1.266-4.845 0-3.148-4.69-2.681-4.69 1.49 0 1.289.456 2.159.456 2.159s-1.509 6.096-1.789 7.235c-.474 1.928.064 5.049.111 5.318.029.148.195.195.288.073.149-.195 1.973-2.797 2.484-4.678.186-.685.949-3.465.949-3.465.503.908 1.953 1.668 3.498 1.668 4.596 0 7.918-4.04 7.918-9.053-.016-4.806-4.129-8.402-9.423-8.402z" /></svg></a></li>
				<li><a href="https://www.facebook.com/ngnailspl/" target="_blank"><svg id="Bold" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" /></svg></a></li>
				<li><a href="https://www.instagram.com/ngnails.pl/" target="_blank"><svg viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg"><path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" /><path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" /><path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" /></svg></a></li>
				<li><a href="https://www.youtube.com/channel/UCguUVgW3EHhh-Mqc7QQqeYw?view_as=subscriber" target="_blank"><svg viewBox="0 -62 512.00199 512" xmlns="http://www.w3.org/2000/svg"><path d="m334.808594 170.992188-113.113282-61.890626c-6.503906-3.558593-14.191406-3.425781-20.566406.351563-6.378906 3.78125-10.183594 10.460937-10.183594 17.875v122.71875c0 7.378906 3.78125 14.046875 10.117188 17.832031 3.308594 1.976563 6.976562 2.96875 10.652344 2.96875 3.367187 0 6.742187-.832031 9.847656-2.503906l113.117188-60.824219c6.714843-3.613281 10.90625-10.59375 10.9375-18.222656.027343-7.628906-4.113282-14.640625-10.808594-18.304687zm-113.859375 63.617187v-91.71875l84.539062 46.257813zm0 0" /><path d="m508.234375 91.527344-.023437-.234375c-.433594-4.121094-4.75-40.777344-22.570313-59.421875-20.597656-21.929688-43.949219-24.59375-55.179687-25.871094-.929688-.105469-1.78125-.203125-2.542969-.304688l-.894531-.09375c-67.6875-4.921874-169.910157-5.5937495-170.933594-5.59765575l-.089844-.00390625-.089844.00390625c-1.023437.00390625-103.246094.67578175-171.542968 5.59765575l-.902344.09375c-.726563.097657-1.527344.1875-2.398438.289063-11.101562 1.28125-34.203125 3.949219-54.859375 26.671875-16.972656 18.445312-21.878906 54.316406-22.382812 58.347656l-.058594.523438c-.152344 1.714844-3.765625 42.539062-3.765625 83.523437v38.3125c0 40.984375 3.613281 81.808594 3.765625 83.527344l.027344.257813c.433593 4.054687 4.746093 40.039062 22.484375 58.691406 19.367187 21.195312 43.855468 24 57.027344 25.507812 2.082031.238282 3.875.441406 5.097656.65625l1.183594.164063c39.082031 3.71875 161.617187 5.550781 166.8125 5.625l.15625.003906.15625-.003906c1.023437-.003907 103.242187-.675781 170.929687-5.597657l.894531-.09375c.855469-.113281 1.816406-.214843 2.871094-.324218 11.039062-1.171875 34.015625-3.605469 54.386719-26.019532 16.972656-18.449218 21.882812-54.320312 22.382812-58.347656l.058594-.523437c.152344-1.71875 3.769531-42.539063 3.769531-83.523438v-38.3125c-.003906-40.984375-3.617187-81.804687-3.769531-83.523437zm-26.238281 121.835937c0 37.933594-3.3125 77-3.625 80.585938-1.273438 9.878906-6.449219 32.574219-14.71875 41.5625-12.75 14.027343-25.847656 15.417969-35.410156 16.429687-1.15625.121094-2.226563.238282-3.195313.359375-65.46875 4.734375-163.832031 5.460938-168.363281 5.488281-5.082032-.074218-125.824219-1.921874-163.714844-5.441406-1.941406-.316406-4.039062-.558594-6.25-.808594-11.214844-1.285156-26.566406-3.042968-38.371094-16.027343l-.277344-.296875c-8.125-8.464844-13.152343-29.6875-14.429687-41.148438-.238281-2.710937-3.636719-42.238281-3.636719-80.703125v-38.3125c0-37.890625 3.304688-76.914062 3.625-80.574219 1.519532-11.636718 6.792969-32.957031 14.71875-41.574218 13.140625-14.453125 26.996094-16.054688 36.160156-17.113282.875-.101562 1.691407-.195312 2.445313-.292968 66.421875-4.757813 165.492187-5.464844 169.046875-5.492188 3.554688.023438 102.589844.734375 168.421875 5.492188.808594.101562 1.691406.203125 2.640625.3125 9.425781 1.074218 23.671875 2.699218 36.746094 16.644531l.121094.128906c8.125 8.464844 13.152343 30.058594 14.429687 41.75.226563 2.558594 3.636719 42.171875 3.636719 80.71875zm0 0" /></svg></a></li>

			</ul>

			{/* <img className="logo" src={logo} alt="" /> */}

		</div>
	</div>


</NavContainer>


	)
}

	



export default Nav;

