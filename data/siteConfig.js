module.exports = {
  siteTitle: 'Hello! Welcome to my portfolio',
  siteDescription: `My portfolio resume`,
  keyWords: ['deepsingh', 'react', 'curriculum', 'deep singh', 'gatsby'],
  authorName: 'Deep Singh',
  twitterUsername: '@itzdeepsingh',
  githubUsername: 'gitdeepsingh',
  npmUsername: 'deepsingh',
  authorAvatar: '/images/avatar.png',
  authorDescription: `I am, a Bengaluru based software developer, passinate about coding and like to explore how softwares are engineered.<br />
                      Being in web development for more than 5 years, I always keep pace with new technologies. I love javascript and everything around it.
                      A year back, I started exploring mobile apps and became fascinated by react-native. Throughout my career,
                      I have worked for clients from Insurance, Healthcare, Banking and Finacial Services domains.<br />
                      During my leisure hours, I like to watch movies, hangout with friends and play soccer.`,
  skills: [
    {
      name: 'Javascript',
      level: 90
    },
    {
      name: 'HTML',
      level: 90
    },
    {
      name: 'CSS',
      level: 90
    }, {
      name: 'Angular',
      level: 70
    }, {
      name: 'React-Native',
      level: 60
    }, {
      name: 'React',
      level: 85
    }, {
      name: 'NodeJs',
      level: 70
    }, {
      name: 'GraphQL',
      level: 60
    },
  ],
  jobs: [
    {
      company: "Legato Health Technologies",
      begin: {
        month: 'nov',
        year: '2019'
      },
      duration: null,
      occupation: "Software Engineer II",
      description: "Working as a MER/AN stack developer on broker portal web app.(healthcare)"

    },
    {
      company: "Candela Labs",
      begin: {
        month: 'nov',
        year: '2018'
      },
      duration: '1 year',
      occupation: "Software Engineer",
      description: "Worked as a front-end developer on web and android applications.(insurance)"

    }, {
      company: "Cognizant Technology Solutions",
      begin: {
        month: 'feb',
        year: '2016'
      },
      duration: '2 years 11 months',
      occupation: "Programmer Analyst",
      description: "Worked as a front-end developer on web applications.(banking and financial services, healthcare)"
    },
    /* ... */
  ],
  npmPackages: [
    {
      name: 'react-simple-search',
      description: 'A convenient react component for searching through a given data set based on user input.',
      link: 'https://www.npmjs.com/package/react-simple-search'
    }
  ],
  social: {
    twitter: "https://twitter.com/@itzdeepsingh",
    linkedin: "https://www.linkedin.com/in/deepsingh7337675512/",
    github: "https://github.com/gitdeepsingh",
    email: "deepsinghh.js@gmail.com",
    npm: "https://www.npmjs.com/~deepsingh"
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