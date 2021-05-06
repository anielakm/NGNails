import React from "react"
import styled from 'styled-components'
import { theme } from "../../utilis/theme"
// import post from '../../images/about-ngn.jpg'
import { useStaticQuery, graphql } from 'gatsby'

const IgContainer = styled.section`
	.instagram {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 50px;
		gap: 10px;

		@media (min-width: 576px){

			> a {
				max-width: 24%;
			}
		}
		@media (max-width: 575.9px){
			> a {
				display: none
			}
		}

		
	}

	.swiper-container2{
		@media (min-width: 576px){
			display: none
		}
		padding-bottom: 13px;
		.swiper-pagination{
			position: relative;
			.swiper-pagination-bullet {
				background-color: ${theme.colors.beige};
				opacity: .3;

				&-active {
					opacity: 1;
				}
			}

		}

	}
	
	
`

const Ig = ({ dictionary, lang }) => {

	// const data = useStaticQuery(graphql`
	// {

	// allInstagramContent(limit: 8) {
	// 	edges {
	// 	  node {
	// 		id
	// 		localImage {
	// 		  url
	// 		}
	// 	  }
	// 	}
	//   }

	//  }	  	
	  
    //  `)
    
	return (

	<IgContainer id="ig">

	<div className="container">
		<h2>Instagram.</h2>
	{/*<p>{lang === 'pl' ? dictionary.pl.ig : dictionary.en.ig}</p>*/}
	</div>
	<div className="container">
		<div className="instagram">

		{data.allInstagramContent.edges.map(item=>
            ( <a  key={item.node.id} href="https://www.instagram.com/ngnails.pl/" target="_blank">
				<img  src={item.node.localImage.url} alt=""/>
			</a> ))}

			<div className="swiper-container swiper-container2">
				<div className="swiper-wrapper">
				{data.allInstagramContent.edges.map(item=>
                           ( 
						   <div key={item.node.id} className="swiper-slide"><img src={item.node.localImage.url} alt=""/></div>
						   )
                            )}
				
				</div>
				<div className="swiper-pagination"></div>
				{/*  <div className="swiper-button-prev"></div>
						   <div className="swiper-button-next"></div>*/}


			</div>

		</div>
	</div>

	</IgContainer>);
}

export default Ig