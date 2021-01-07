import React from "react"
import { theme } from "../../utilis/theme"
import styled from 'styled-components'
import Article from '../../components/blog/article'
import Sidebar from '../../components/blog/sidebar'
import { StaticQuery, graphql } from "gatsby"

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

		@media (max-width: 575.9px){
			.btn {
				margin: 40px auto 10px;
			}
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
			cursor: pointer;

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
class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		 postToShow: 6,
		};
	  }

	  render() {
	
	return (

		<StaticQuery
		query={graphql`
			query MyQuery {
			allWordpressPost {
				edges {
				node {
					featured_media {
					source_url
					}
					categories {
					name
					slug
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
		`}
		render={( data ) => (
		<MainContainer>
			<div className="container">
				<section className="blog-list">
			
				{data.allWordpressPost.edges.map((item,i)=>(
					<Article key={i} content={item.node.content} thumbnail={item.node.featured_media.source_url} categories={item.node.categories} slug={item.node.slug} title={item.node.title} date={item.node.date} excerpt={item.node.excerpt}/>
				)).slice(0,this.state.postToShow)}
				
				<button href="" className="btn btn__beige" onClick={
					()=>{
						this.setState({postToShow: this.state.postToShow + 6})
					}
				}>Wczytaj więcej</button>
				</section>
				<Sidebar/>
			</div>
		</MainContainer>
	)}
	/>

	)

}
}


export default Main;