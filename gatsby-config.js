/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ngnails",
    titleTemplate: "ngnails template",
    author: 'Aniela Katana-Matłok',
    siteUrl: 'https://ngnails.pl',
    description: "NGNails.pl - tutoriale jak wykonać 'krok po kroku' manicure hybrydowy i żelowy, inspiracje paznokciowe na różne okazje oraz testy produktów hybrydowych i żelowych",
    url: "https://anielakm.pl", // No trailing slash allowed!
    image: "/logo.png", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  },
  plugins: [

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
   

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display:200,300,400,500,600,700,800,900', 'Lato:200,300,400,500,600,700,800,900']
        }
      }
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCguUVgW3EHhh-Mqc7QQqeYw'],
        apiKey: 'AIzaSyDbF6u7NDpsNEBy0ZCH63QotVEn_WUWa-E',
        maxVideos: 50 // Defaults to 50
      },
    },
    
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJXTU5FcDJESjQtZAElaV2FLelM4ZAmJZAajVNUXlLSEp5b0hobldseC1ZAOGg3WThXbS1VcXVkR3NwNU9ZAblhCOE1zdEtzM20xX2dfcFhydHlLV2lnNy10MFZALdVFnc0ZAabGpYUDl4bnoxMllQa1ZAlbwZDZD",
      }
    },
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `NGNails`,
      short_name: `NGNails`,
      icon: `src/images/ngn-logo.png`,
      start_url: `/`,
      background_color: `#d4beb3`,
      theme_color: `#d4beb3`,
      display: `standalone`,
    },
  },

    {

      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://www.blog-ngn.pl/graphql`,
          schema: {
            //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
            typePrefix: `Wordpress`,
          },
          type: {
            Post: {
              limit:
                process.env.NODE_ENV === `development`
                  ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                    50
                  : // and we don't actually need more than 5000 in production for this particular site
                    5000,
            },
          },
      },
    },


    

  
]
 

}
