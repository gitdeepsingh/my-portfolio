module.exports = {
  siteTitle: 'Welcome! I code for a living',
  siteDescription: `My portfolio resume`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Deep Singh',
  twitterUsername: '@itzdeepsingh',
  githubUsername: 'gitdeepsingh',
  authorAvatar: '/images/avatar.png',
  authorDescription: `I am passinate about coding and love to explore how softwares are engineered.<br />
                      Being in web development for more than 4 years, I always keep pace with new technologies.
                      In 2019, I started exploring mobile apps and became fascinated by react-native. Throughout my career,
                      I have worked in domains like Insurance, Healthcare, Banking and Finacial Services.<br />
                      During my leisure hours, I watch movies and play soccer.`,
  skills: [
    {
      name: 'HTML',
      level: 85
    },
    {
      name: 'CSS',
      level: 80
    },
    {
      name: 'Javascript',
      level: 75
    },
    {
      name: 'React',
      level: 75
    },
    {
      name: 'React-Native',
      level: 40
    },{
      name: 'Angular',
      level: 45
    },{
      name: 'NodeJs',
      level: 50
    },
  ],
  jobs: [
    {
      company: "Candela Labs",
      begin: {
        month: 'nov',
        year: '2018'
      },
      duration: null,
      occupation: "Software Engineer",
      description:"Working as front-end developer for desktop and android applications for Insurance market."
  
    }, {
      company: "Cognizant Technology Solutions",
      begin: {
        month: 'feb',
        year: '2016'
      },
      duration: '2 years 11 months',
      occupation: "Programmer Analyst",
      description: "Development and integration of web applications for Healthcare andB anking and Finacial Services domains."
    },
    /* ... */
  ],
  social: {
    twitter: "https://twitter.com/@itzdeepsingh",
    linkedin: "https://www.linkedin.com/in/deepsingh7337675512/",
    github: "https://github.com/gitdeepsingh",
    email: "deepsinghh.js@gmail.com"
  },
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/portfolio-icon.png',
  headerLinks: [
    {
      label: 'Deep Singh',
      url: '/',
    }
  ]
}