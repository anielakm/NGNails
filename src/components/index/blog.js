import React from "react"
import styled from 'styled-components'
import { theme } from "../../utilis/theme"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'

const BlogContainer = styled.section`
	background: white;
	overflow: hidden;
	.swiper-slide{
		max-height: 390px;
		img {
			width: 100%;
			height: 216px;
			object-fit: cover;

			@media (min-width: 576px){
				height: 118px;
			}
			@media (min-width: 992px){
				height: 195px;
			}
			@media (min-width: 1024px){
				height: 166px;
			}
			@media (min-width: 1250px){
				height: 226px;
			}
			
	
		
			@media (min-width: 2200px){
				height: 200px;
			}
		}
		h3, p{
			color: ${theme.colors.gray};
		}
	}
	.swiper-wrapper{
		padding-bottom: 40px;

		@media (min-width: 576px){
			padding-bottom: 50px;
		}
	
	}

	.swiper-nav {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		width: fit-content;
		z-index: 999;
	
		.swiper-pagination, .swiper-button-prev, .swiper-button-next{
			
			@media (min-width: 1400px){
				opacity: 0;
				transition: opacity .3s;
			}
		}

		.swiper-pagination{
			position: relative;
			margin: 0 30px 22px;
			z-index: 9999;
		
			

			.swiper-pagination-bullet {
				cursor: pointer;
				margin: 0 3px;
				width: 10px;
				height: 10px;
				background: ${theme.colors.beige};
				opacity: .3;
			}
			.swiper-pagination-bullet-active {
				background: ${theme.colors.beige};
				opacity: 1;
			}

		}
		.swiper-button-prev, .swiper-button-next{
			position: relative;
			height: 10px;
			width: 10px;
			@media (max-width: 576.9px){
				display: none
			}

			&:after {
				font-size: 1.2em;
			}
		}

		.swiper-button-prev, .swiper-button-next{
			color: ${theme.colors.beige};

			&:after {
				@media (max-width: 1400px){
					font-size: 1.5em
				}
				@media (max-width: 992px){
					font-size: 1.5em
				}
			}

		}
	}
	.blog-list {
		margin-top: 50px;
		position: relative;

		@media (max-width: 575.9px){
			padding: 0 15px;
			
		}

		@media (min-width: 576px) and (max-width: 1400px){
			padding: 0 60px;
		}

		@media (min-width: 992px){
			margin-top: 50px;
		}
		.bg-white{
			transition: all .5s;

			&.active{
			
				opacity: 0;
				animation: anim;
				animation-delay: .5s;
				
				@keyframes anim {
					from {
						z-index: 2;
					}
					to {
						z-index: -2;
					}
				}
			}
		}


		&:hover {
			.swiper-pagination, .swiper-button-prev, .swiper-button-next{
				opacity: 1;
			}
			.swiper-button-disabled {
				opacity: 0.35
			}
			
		}

		p{
			font-size: .9em;
		}

	}

	.blog-text {
		@media (max-width: 575.9px){
			text-align: left
		}
	}
	h2 {
		margin-top: 0
	}
	.btn {
		margin-top: 30px;
		margin-bottom: 0;
		display: inline-block;
	}

	.bg-white {
		position: absolute;
		top: 0;
		right: 0;
		width: 200px;
		height: 100%;
		background: white;
		z-index: 2;
		@media (max-width: 1400px){
			display: none
		}
		&#blog-white2{
			left: 0;
			right: unset;
		}
	}

	.swiper-container-blog {
		@media (max-width: 575.9px){
			overflow: hidden;
		}
	}

	
	
`

const Blog = ({ data, dictionary, lang }) => {


	const dataPosts = useStaticQuery(graphql`

	{
	
		allWordpressPost (limit: 10){
				edges {
				node {
					featured_media {
					source_url
					}
					categories {
					name
					}
					slug
					content
					title
					date(formatString: "DD.MM.YYYY")
					excerpt
				}
				}
			}
			}
	
	
	`)
	
	return (

	<BlogContainer id="blog">

	<div className="container t-center blog-text">
		<h2>Blog.</h2>
		{/*<p>{lang === 'pl' ? dictionary.pl.blog : dictionary.en.blog}</p>*/}
	</div>

	<div className="blog-list">

	<div className="bg-white" id="blog-white"></div>
	<div className="bg-white" id="blog-white2"></div>

		<div className="swiper-container-blog"> 
	
			<div className="swiper-wrapper">

			{dataPosts.allWordpressPost.edges.map((item,i)=>(
					
				<Link to={item.node.slug} key={i} className="swiper-slide">
					<img src={item.node.featured_media.source_url} alt=""/>
					<h3>{item.node.title}</h3>
					<p dangerouslySetInnerHTML={{__html: item.node.content.slice(0,160) }}></p>
				</Link>

				))}
		
		
			</div>

			<div className="swiper-nav">

			<div className="swiper-button-prev"></div>
			<div className="swiper-pagination"></div>
			<div className="swiper-button-next"></div>
	
			</div>
	
			
		</div>

	

		
	</div>

	<div className="container t-center"><Link to="/blog" className="btn btn__beige--t">zobacz więcej</Link></div>

	</BlogContainer>
	)
}

export default Blog