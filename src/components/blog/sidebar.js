import React, {useState, useEffect} from "react"
import { theme } from "../../utilis/theme"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import {Link} from 'gatsby'
import { Helmet } from 'react-helmet';
import SidebarAds from './sidebar-ads'
import Fb from '../../images/fb.png'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


const SidebarContainer = styled.aside`
	section {
		padding: 0;
		margin: 40px 0 20px;
		&:first-child{
			margin-top: 0;
		}
		&:last-child {
			margin-bottom: 0
		}
	}
	.fb-page {
		max-width: 100%;
		width: 100%;
		iframe, span {
			width: 100%;
			max-width: 100%;
		}
	}
	h3 {
		font-family: ${theme.fonts.lato};
		margin-top: 0;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		font-size: .85em;
		color: ${theme.colors.beigeDark};
	}

	.yt {
		&__item {
			display: flex;
			align-items: flex-start;
			margin: 25px 0;

			img {
				width: 125px;
				height: auto;

			}
			h4 {
				width: calc(100% - 125px);
				padding-left: 15px;
				font-size: 12px;
				text-transform: uppercase;
				font-family: ${theme.fonts.lato};
				margin: 0;
			}
		}
	}

	.tags {
		ul {
			display: flex;
			flex-wrap: wrap;
			gap: 3px 5px;

			li a {
				color: rgba(0,0,0,.4);
				text-transform: uppercase;
				font-size: .75em;
				letter-spacing: .5px;
				padding: 5px;
				display: inline-block;
				background-color: ${theme.colors.beigeLight};

				span {
					margin-left: 5px;
					background-color: ${theme.colors.beige};
					color: white;
					padding: 0 3px;
					display: inline-block;
				}
			}
		}
	}

	.ig {
	
		.swiper-container {
			padding-bottom: 25px;
		}
		.swiper-button-prev, .swiper-button-next {
			
			cursor: pointer;
			position: absolute;
			top: unset;
			bottom: 0;
			height: 20px;
		

			&:after {
				color: ${theme.colors.beigeDark};
				width: 100%;
				height: 100%;
				font-size: 24px;
				
			}

		}
		

		.swiper-button-prev:after {
			content: '←';
			
		}
		.swiper-button-next:after {
			content: '→'
		}
		.swiper-pagination-bullet {
			background: ${theme.colors.beige};
			cursor: pointer;

		}
		.swiper-pagination{
			bottom: 0;
			width: fit-content;
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			z-index: 999;
		}

	}
	
`


const Sidebar = () => {
	const [count, setCount] = useState(0);

	const data = useStaticQuery(graphql`
	{

	    allWordpressTag(sort: {order: DESC, fields: count}, limit: 20) {
			edges {
			node {
				id
				name
				slug
				count
			}
			}
		}

		allInstagramContent(limit: 8) {
		edges {
		  node {
			id
			localImage {
			  url
			}
		  }
		}
	}

		allYoutubeVideo(limit: 3) {
			edges {
			  node {
				id
				title
				thumbnail {
				  url
				}
			  }
			}
		  }
	  

	  
	
	 }	  	
	  
	 `)

	 useEffect(() => {
		Swiper.use([Navigation, Pagination, Autoplay]);
	

	let swiper = new Swiper('.swiper-sidebar', {

		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
					
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			},
		speed: 1000,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
				
  
		  pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		  }
		
  
	  });
	  });
	
	 
	 

	return(

	<SidebarContainer className="sidebar">

<Helmet>
    {/*<script async={true} defer={true} crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=2186738638294469&autoLogAppEvents=1" />*/}
</Helmet>
	
		{/* <section>
			<h3>Szukaj</h3>
			<form action="">
				<input type="text"/>
				<input type="submit"/>
			</form>
		</section> */}

		{/*

		<section>

		<h3>Youtube</h3>

		<div className="yt">

		 {data.allYoutubeVideo.edges.map(item=>(
			<a key={item.node.id} className="yt__item" target="_blank" rel="noreferrer">
			<img  src={item.node.thumbnail.url} alt=""/>
			<h4>{item.node.title}</h4>
			</a>
		))}
		
		</div>
		
		</section>
		 */}
		<section>

		<h3>Facebook</h3>

		{/*<div className="fb-page" data-href="https://www.facebook.com/ngnailspl/" data-tabs="timeline" data-width="" data-height="120" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ngnailspl/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ngnailspl/">NGNails</a></blockquote></div>*/}
<a href="https://www.facebook.com/ngnailspl/" target="_blank"><img src={Fb} alt=""/></a>
		
		</section>
		<section>

		<h3>Instagram</h3>

		<div className="ig">

			<div className="swiper-container swiper-sidebar">
			
				<div className="swiper-wrapper">

					{data.allInstagramContent.edges.map(item=>(
						<div key={item.node.id} className="swiper-slide"><a href="https://www.instagram.com/ngnails.pl/" target="_blank"><img  src={item.node.localImage.url} alt=""/></a></div>
					))}
				
				</div>

	

				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
					
				<div className="swiper-pagination"></div>
				
		
				
			</div>
		
		</div>
		
		</section>
		<section className="tags">

		<h3>Popularne tagi</h3>

		<ul>
		{data.allWordpressTag.edges.map(item=>
        ( item.node.count > 0 ? (<li key={item.node.id}><Link to={`/tag/${item.node.slug}`}>{item.node.name}<span>{item.node.count}</span></Link></li>) :null )
        )}

		</ul>
		
		</section>

		<section>
		<div className="ad-class">
        {/* add your slot id  */}
     <SidebarAds slot="1161767180" />
</div>
</section>

	</SidebarContainer>

	)

	
	}

	

export default Sidebar;