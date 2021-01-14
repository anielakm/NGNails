import React from "react"
import { theme } from "../../utilis/theme"
// import post from '../../images/about-ngn.jpg'
import styled from 'styled-components'
import { Link } from "gatsby"

const ArticleContainer = styled.article`

			width: 100%;
			margin-bottom: 50px;

			@media (min-width: 576px){
				width: 48%;
			}

			h3 {
				font-size: 1.1em;
				a {
					color: inherit
				}
			}
			p {
				font-size: .95em;
			}

			img {
				width: 100%;
				object-fit: cover;
				height: 175px;
				@media (min-width: 576px){
					height: 202px;
				}
			}

			.btn {
				padding: .75em 1.5em;
				font-size: .75em;
				display: block;
				margin-top: 20px;
				width: fit-content;
			}

			.blog-list__bar {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 10px;

				.category {
					
					a{
						color: ${theme.colors.beige};
						font-size: .9em;
						font-weight: 600; 
						margin-right: 5px;

						&:after {
							content:', '
						}
						&:last-child:after {
							content: ''
						}

					}
				}

				.date {
					display: flex;
					align-items: center;
					color: ${theme.colors.grayLight};
					font-size: .8em;
					/* font-weight: 600; */

					svg{
						margin-right: 5px;
						width: 14px;
						height: auto;
						fill: ${theme.colors.grayLight}
					}
				}
			}
	

	
`

const Article = ({thumbnail, categories, slug, title, date, excerpt, content}) => (

	<ArticleContainer className="blog-list__item">
	<Link to={`/${slug}`} className="thumbnail" >{thumbnail ? (<img src={thumbnail} alt=""/>) : null}</Link>
					
					<div className="blog-list__bar">
						<div className="category">
							{categories.nodes.map((cat,i)=>(
								<Link key={i} to={`/${cat.slug}`}>{cat.name}</Link>
							))}
						</div>
						<span className="date">
						
							{date}</span>
					</div>
					<h3><Link to={`/${slug}`} className="thumbnail" >{title}</Link></h3>
					
					<p dangerouslySetInnerHTML={{__html: excerpt.slice(0,200) + ' ...'}}></p>
					<Link to={`/${slug}`} className="btn btn__beige--t">czytaj więcej</Link>
				</ArticleContainer>

)

export default Article;