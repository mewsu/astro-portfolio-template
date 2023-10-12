type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "trumankckwong@gmail.com",
  title: "Hi, I’m Truman 👋",
  // profile: "/profile.webp",
  description:
    "Hey there! I'm a web developer with more than seven years in the industry, and I'm on the lookout for remote or hybrid gigs. I'm pretty solid with modern tech like React and Node.js, and I also know my way around CSS/Sass, HTML, and JavaScript. I'm excited to bring my skills and experience to the table and help your organization succeed. I'm open to working together and having a chat to see if we're a good fit. 😉",
  socials: [
    {
      label: "X",
      link: "",
    },
    {
      label: "Bento",
      link: "https://bento.me/trumankc",
    },
    {
      label: "Github",
      link: "https://github.com/mewsu",
    },
  ],
};

export default presentation;
