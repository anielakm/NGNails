const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost(sort: {fields: [date]}) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "MM.DD.YYYY")
            
            
          }
        }
      }

      allWordpressCategory {
        edges {
          node {
            name
            slug
            id
          }
        }
      }

      allWordpressTag {
        edges {
          node {
            name
            slug
            id
          }
        }
      }
    }

  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        path: node.slug,
        // path to template
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    });


    result.data.allWordpressCategory.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        // pathPrefix: `/${slug}`,
        path: node.slug,
        // path to template
        component: path.resolve(`./src/templates/blog-category.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
          name: node.name,
        },
      })
    });

    result.data.allWordpressTag.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        path: `/tag/${node.slug}`,
        // path to template
        component: path.resolve(`./src/templates/blog-tag.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
          name: node.name
        },
      })
    });


    
  });

}