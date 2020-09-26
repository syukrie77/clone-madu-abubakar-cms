module.exports = {
  siteMetadata: {
    title: `Madu Abu Bakar Asli!`,
    author: `MaduAbuBakar.Com`,
  },
  plugins: [
	{
	  resolve: `gatsby-source-filesystem`,
	  options: {
		name: `images`,
	    path: `${__dirname}/src/posts/images/`,
		},
	},
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
	  {
	    resolve: `gatsby-source-filesystem`,
	    options: {
	    name: `src`,
	    path: `${__dirname}/src/`,
	  },
      },
	   `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
	options: {
	  plugins: [
 	    `gatsby-remark-relative-images`,
	       {
	         resolve: `gatsby-remark-images`,
		 options: {
		   maxWidth: 750,
		   linkImagesToOriginal: false
		 }
	      }
	  ],
    }
    }
  ],
}