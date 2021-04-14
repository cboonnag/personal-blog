module.exports = {

    author: "Chiraphat Boonnag",
    siteTitle: "cboonnag personal website",
    siteShortTitle: "CBOONNAG", // Used as logo text in header, footer, and splash screen
    siteDescription: "A one-page portfolio of cboonnag",
    siteUrl: "https://https://cboonnag.com/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: true, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@c.boonnag
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40c.boonnag",
    shownArticles: 6,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/cboonnag/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@c.boonnag"
        },
        {
            name: "Github",
            url: "https://github.com/cboonnag"
        },
        {
            name: "cbnote",
            url: "https://"
        },
        {
            name: "cv",
            url: "https://www.overleaf.com/project/5ce2c52d4e5b2436a4443a79"
        },

    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "Projects",
                url: "/#projects",

            },
            {
                name: "CB's Note",
                url: "/cbnote",
            },
            {
                name: "Research",
                url: "/research",
            },
            {
                name: "About Me",
                url: "/#about",
            },
        ],
      
        button: {
        },

    },

    footerLinks: [
    ]
   
}