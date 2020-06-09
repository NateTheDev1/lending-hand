module.exports = {
  siteMetadata: {
    title: 'Lending Hand',
    description: 'Official Lending Hand Landing Page',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lending Hand',
        short_name: 'Lending Hand',
        start_url: '/',
        background_color: '',
        theme_color: '',
        display: '',
        icon: 'src/images/GiantLogo.svg', // This path is relative to the root of the site.
      },
    },
  ],
};
