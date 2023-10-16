export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "React - Whack a mole",
    techs: ["ReactJS", "CSS", "HTML"],
    link: "https://quirky-albattani-bc7423.netlify.app/",
  },
  {
    title: "React - Pacman",
    techs: ["ReactJS", "CSS", "HTML"],
    link: "https://unruffled-galileo-2cdbae.netlify.app/",
  },
  {
    title: "React - Memory match",
    techs: ["ReactJS", "CSS", "HTML"],
    link: "https://jovial-albattani-55082a.netlify.app/",
  },
];

export default projects;
