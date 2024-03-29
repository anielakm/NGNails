import React, { Children } from "react"

import Article from '../components/blog/article'
import { graphql } from "gatsby"
import Layout from '../layouts/blog'
import Helmet from 'react-helmet'


class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		 postToShow: 6,
		};
	  }

	  render() {
	
	return (

    <Layout>
    
    <Helmet><title>{this.props.pathContext.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</title></Helmet>
			
				{this.props.data.allWordpressPost.edges.map((item,i)=>(
					<Article key={i} content={item.node.content} thumbnail={item.node.featuredImage.node.sourceUrl} categories={item.node.categories.nodes} slug={item.node.slug} title={item.node.title} date={item.node.date} excerpt={item.node.excerpt}/>
				)).slice(0,this.state.postToShow)};

				{
					this.state.postToShow < this.props.data.allWordpressPost.edges.length ? (
						<button href="" className="btn btn__beige" onClick={
					()=>{
						this.setState({postToShow: this.state.postToShow + 6})
					}
				}>Wczytaj więcej</button>
					) : null

				
				}
				
				
				
				
		</Layout>
	)}

}


export default Main;


export const query = graphql`

query CategoryPage($slug: String!) {
 
    allWordpressPost( filter: { categories: { nodes: {elemMatch: { slug: { eq: $slug }} } } }) {
      edges {
        node {
          content
          author {
            node {
              name
              id
            }
          }
          categories {
            nodes {
              id
              name
              slug
            }
          }
          tags {
            nodes {
              id
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
          excerpt
          date(formatString: "MM.DD.YYYY")
        }
      }
    }
  }
	
	`