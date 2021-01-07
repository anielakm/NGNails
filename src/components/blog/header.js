import React from "react"
import logo from '../../images/ngn-logo.png'
import styled from 'styled-components'
import { theme } from "../../utilis/theme"
import {Link} from 'gatsby'



const HeaderContainer = styled.div`
	background-color: ${theme.colors.beige};
	display: flex;
	justify-content: center;

	img {
		margin: 50px 0;
		max-width: 130px;

		@media (min-width: 576px){
			max-width: 200px;
			margin: 70px 0;
		}
	}
`

const Header = () => (

	<>



	<HeaderContainer>

	<Link to="/blog">
	<img src={logo} alt="" />
	</Link>
		
	</HeaderContainer>
	</>
)

export default Header;