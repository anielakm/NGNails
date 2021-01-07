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
    image: "/images/logo.png", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  },
  plugins: [

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    
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
        access_token: "IGQVJYbDdQUWlXLWZAueEZAJWDlpbVNGVDlJMEk0SllDTkhibnRTR3FFWE1meDh3aUFWMkZAERFpUcGdPRmhTbzFSd3p3YUlvUjVRbFM2M0s4NE9ibWNsSGJ2elBZARnR6ZADlWWEotN0lVWnFVckdjWW5icQZDZD",
      }
    },



  {
    resolve: "gatsby-source-wordpress",
    options: {
      // your WordPress source
      baseUrl: `ngnails.pl/`,
      protocol: `https`,
      // is it hosted on wordpress.com, or self-hosted?
      hostingWPCOM: false,
       // Specify which URL structures to fetch
        useACF:false,
        auth:{},
        verboseOutput: false,
       includedRoutes: [
        '**/posts',
        '**/tags',
        '**/categories',
        "**/media",
      ],
      // plugins: [
      //   {
      //     resolve: `gatsby-wordpress-inline-images`,
      //     options:
      //     {
      //       baseUrl: `ngnails.pl/`,
      //       protocol: `http`
      //     }
      //   }
      // ]
      

    }

  },

  `gatsby-transformer-sharp`, 
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      failOnError: false,
    },
  },
  

  ],
}
