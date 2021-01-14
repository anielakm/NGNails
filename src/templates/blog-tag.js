import React, { Children } from "react"

import Article from '../components/blog/article'
import { graphql } from "gatsby"
import Layout from '../layouts/blog'


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
			
				{this.props.data.allWordpressPost.edges.map((item,i)=>(
					<Article key={i} content={item.node.content} thumbnail={item.node.featuredImage.node.sourceUrl} categories={item.node.categories.nodes} slug={item.node.slug} title={item.node.title} date={item.node.date} excerpt={item.node.excerpt}/>
				)).slice(0,this.state.postToShow)}



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

query TagsPage($slug: String!) {
 
    allWordpressPost(filter: { tags: { nodes: {elemMatch:  { slug: { eq: $slug }} } } }) {
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
          
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
          slug
          title
          excerpt
          date(formatString: "DD.MM.YYYY")
        }
        
        
      }
    }
  }
	
	`