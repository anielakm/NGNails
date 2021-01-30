import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const AboutContainer = styled.section`

	@media (max-width: 575.9px){
		margin: 0;
		padding: 0;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		
		@media (max-width: 575.9px){
		padding: 0
		}
	}
	.col-1{
		width: 100%;
		@media (min-width: 576px){
			width: 45%;
		}
	};
	.col-2{
		width: 55%;
		display: flex;
		padding-left: 50px;
		flex-direction: column;
		justify-content:center;

		@media (max-width: 575.9px){
			width: 100%;
			padding: 30px;

		}
		
		@media(min-width: 1200px){
			padding-left: 150px;
			margin-bottom: -50px;
		}
	}

	.about__img--1{
		height: 300px;
		max-width: 100%;

		@media (min-width: 576px){
			max-width: 85%;
		}
		@media (min-width: 992px){
			height: 400px;
		}

		@media(min-width: 1200px){
			height: 480px;
		}

	}
	.about__img--2{
		display: block !important;
		margin-right: 0;
		margin-left: auto;
		margin-top: -70px;
		width: 170px !important;
		height: 170px !important;
		@media (max-width: 575.9px){
			display: none !important
		}
		
		@media(min-width: 1200px){
			margin-top: -120px;
			width: 270px !important;
			height: 270px !important
		}
	}



`

function About({ data, dictionary, lang }){

	

	return (
		<StaticQuery
		  query={graphql`
			query AboutImg {
				file1: file(name: {eq: "about-ngn"}) {
					childImageSharp {
					fluid(maxWidth: 1000, quality: 100){
						...GatsbyImageSharpFluid
					}
		  
					}
		
	 			 },
				file2: file(name: {eq: "about-ngn2"}) {
					childImageSharp {
						fixed(width: 270){
						...GatsbyImageSharpFixed
					}
		  
					}
		
	 			 }
			}
		  `}
		  render={data => (
			<AboutContainer className="section about" id="about">
		<div className="container ">
			<div className="col-1">
					<Img className="about__img--1 rellax1" data-rellax-speed="-10" fluid={data.file1.childImageSharp.fluid} loading="eager" />
					<Img className="about__img--2 rellax2" data-rellax-speed="-7" fixed={data.file2.childImageSharp.fixed} loading="eager" />
			</div>
			<div className="col-2">
				<div className="about__text">
					<h2>{lang === 'pl' ? dictionary.pl.about_title : dictionary.en.about_title}</h2>
					<p>{lang === 'pl' ? dictionary.pl.about : dictionary.en.about}</p>
				</div>
			</div>
		</div>
	</AboutContainer>
		  )}
		/>
	  )


}

	


export default About;