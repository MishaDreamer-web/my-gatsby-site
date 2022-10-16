module.exports = {
  siteMetadata: {
    title: 'My First Gatsby Site',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',
  ],
};
