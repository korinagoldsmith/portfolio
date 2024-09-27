// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Korina",
  middleName: "",
  lastName: "Goldsmith",
  message: "Full stack developer using technology to make positive impacts.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/korinagoldsmith",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/korinagoldsmith/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/korinagoldsmith/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "Hey! I'm Korina, a junior computer science student at Georgia Tech with a passion for business, sustainability, and artificial intelligence. On campus, I'm part of research involving XAI and HCAI with [Dr. Kim](https://faculty.cc.gatech.edu/~jkim693/), a team creating a virtual twin for a sustainable bottling plant in the [Bahamas](https://sites.gatech.edu/i2ce/team-2/), and I'm a program facilitator for the [Grand Challenges](https://grandchallenges.gatech.edu/) leadership program. Additionally, I enjoy creating my own projects and working on startups. Check out my blog posts, projects, and GitHub for my latest work! Outside of academics, I enjoy snowboarding, reading, listening to music, and traveling.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "korinagoldsmith", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: ["spotify"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "Python", value: require("../assets/img/logo_python.png") },
    { name: "JavaScript", value: require("../assets/img/logo_javascript.png") },
    { name: "HTML/CSS", value: require("../assets/img/logo_html.png") },
  ],
  librariesFrameworks: [
    { name: "React", value: require("../assets/img/logo_react.png") },
  ],
  otherSkills: [
    { name: "Git", value: require("../assets/img/logo_git.png") },
    { name: "Docker", value: require("../assets/img/logo_docker.png") },
    { name: "Figma", value: require("../assets/img/logo_figma.png") },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
const blog = {
  show: true,
  heading: "Blog",
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog };
