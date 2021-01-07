import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from '../layouts/blog'
import { theme } from "../utilis/theme"
import styled from 'styled-components'

const Article = styled.article`
max-width: 100%;
.thumbnail {
max-width: calc(100% + 40px);
margin-left: -20px;
margin-top: -20px;
}
p {
  margin: 20px 0;
}
h1 {
  margin: 30px 0;
  font-size: 1.4em;
  @media (min-width: 576px){
    font-size: 1.7em;
  }
}
h6 {
   margin: 0;
    font-family: ${theme.fonts.lato};
    font-size: .85em;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
footer {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.1);
  margin-bottom: 10px;
  margin-top: 70px;
  @media (max-width: 575.9px){
    flex-direction: column;
  }
  .categories {
    display: flex;
    align-items: center;
    h6 {
      margin-right: 10px;
    }
    a {
      color: ${theme.colors.beigeDark}
    }
  }
  .other {
    display: flex;
    ${'' /* @media (max-width: 575.9px){
      justify-content: flex-end
    } */}
    p {
      margin: 10px 20px 10px 0;
      font-size: .9em;
      display: flex; 
      align-items: center;
      svg {
        width: 17px;
        height: auto;
        margin-right: 7px;
        fill: ${theme.colors.gray}
      }
    }
    
  }
}
.tags {
  h6 {
    margin: 0 0 10px;
  }

  ul{
    display: flex;
  flex-wrap: wrap;
  gap:  4px 6px;
  li {
    background: ${theme.colors.beigeTransparent};
    color: ${theme.colors.grayLight};
    font-size: .7em;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 5px 7px;
    a {
      color: inherit
    }
    
  }

  }
  
}

iframe {
  max-width: 100%;
}

.products {
  background-color: ${theme.colors.beige};
  margin-left: -20px;
  width: calc(100% + 40px);
  padding: 15px 20px;
  color: white;
  margin-top: 50px;
  margin-bottom: 80px;

  @media (min-width: 576px){
    margin-left: -50px;
    width: calc(100% + 70px);
  }

  .wyroznione {
   font-size: 1.5em;
   font-family: ${theme.fonts.playf};
   margin-bottom: 20px;
   letter-spacing: .8px;
   font-weight: 600
   
  }
  ul {
    padding-left: 20px;
    margin-bottom: 15px;
  }
 
  ul li {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    &:before {
      content: '';
      display: block;
      width: 7px;
      height: 7px;
      background: white;
      border-radius: 50%;
      margin-top: 7px;
      margin-right: 15px
    }
  }
  a {
    color: white;
    transition: all .3s;
    margin: 0 5px;
    &:last-child {
      margin: 0 0 0 5px
    }
    &:hover {
      color: ${theme.colors.grayLight};
    }
  }

  

}

.breadcrumbs {
    margin-top: 20px;
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
       
        color:  ${theme.colors.gray};
      &:after {
        content: '/';
        margin: 0 5px;
        color: ${theme.colors.gray};
      
        
      }
      &:last-child:after {
        display: none;
      }
      a {
      color: ${theme.colors.grayLight};
     
      
    }}

    }
    
  }

`


export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      
    <Article>
    
        <img className="thumbnail" src={post.featured_media.source_url} alt=""/>

        <div className="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li> <Link to="/blog">Blog</Link>
              </li>
              <li>{post.title}</li>
          </ul>
        </div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      

        <footer>

        <div className="categories">
          <h6>{post.categories.length > 1 ? 'Kategorie: ' : 'Kategoria: '}</h6>
          <ul class="">
          {post.categories.map((cat,i)=> 
            (<li key={i}><Link to={cat.slug}>{cat.name}</Link></li>
            ))}
          </ul>

        </div>
        <div className="other">

          <p> 

          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 512 512" >
<g>
	<g>
		<path d="M492,352c11.046,0,20-8.954,20-20V120c0-44.112-35.888-80-80-80h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20
			v20h-91V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80
			C35.888,40,0,75.888,0,120v312c0,44.112,35.888,80,80,80h352c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20
			c-11.046,0-20,8.954-20,20c0,22.056-17.944,40-40,40H80c-22.056,0-40-17.944-40-40V120c0-22.056,17.944-40,40-40h25v20
			c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91v20c0,11.046,8.954,20,20,20
			c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v212C472,343.046,480.954,352,492,352z"/>
	</g>
</g>
<g>
	<g>
		<circle cx="125" cy="210" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="299" cy="210" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="386" cy="210" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="125" cy="297" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="125" cy="384" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="212" cy="210" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="212" cy="297" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="212" cy="384" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="299" cy="297" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="386" cy="297" r="20"/>
	</g>
</g>
<g>
	<g>
		<circle cx="299" cy="384" r="20"/>
	</g>
</g>

</svg>


          <span>{post.date}</span>
          </p>
          <p>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 482.9 482.9" >
          <g>
            <g>
              <path d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5
                c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6
                c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z
                M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4
                c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0
                c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"/>
              <path d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3
                c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7
                c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41
                c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56
                c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8
                c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3
                c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3
                C447,415.5,446.9,388.8,446.8,383.6z"/>
            </g>
          </g>

          </svg>

            <span>Aniela</span>
          </p>
        </div>


        </footer>

        

        <div className="tags">
        <h6>Tagi: </h6>
        <ul class="">
         {post.tags.map((tag,i)=> 
          (<li key={i}><Link to={`/tag/${tag.slug}`}>{tag.name}</Link></li>
          ))}
        </ul>
        </div>
       
        
        
       
    
    </Article>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          content
          date(formatString: "MM.DD.YYYY")
          excerpt
          slug
          title
          featured_media {
            id
            source_url
          }
          tags {
            name
            id
            slug
          }
          categories {
            id
            name
            slug
          }
          
          
        }
      }
    }
  }`