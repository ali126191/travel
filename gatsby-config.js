module.exports = {
  pathPrefix: `/travel`,
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: `http://ali126191.github.io`,

  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    // {
    //   resolve: 'gatsby-plugin-html2amp',
    //   options: {
    //     files: ['post/**/index.html', 'index.html'],
    //     publicPath: 'public',
    //     gaConfigPath: 'gaConfig.json',
    //     dist: 'public/dist'
    //   }
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-responsive-iframe`],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/travel/',
        background_color: '#a00037', // Header color
        theme_color: '#d81b60', // Mobile bar color
        display: `standalone`,
        icon: `src/assets/img/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
        // icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}