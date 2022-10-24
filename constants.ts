export const METADATA = {
  title: "Marcy Montross | Porfolio",
  description: "Designing and developing sites for nearly 10 years.",
  steUrl: "https://heymarcy.com/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Projects",
    ref: "work",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const EMAIL = "marcy.montross@gmail.com";

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tools: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Petfinder - Member Site",
    image: "/projects/petfinder.jpg",
    blurImage: "/projects/blur/petfinder-blur.jpg",
    description: "Dashboard/CMS for shelters to list pet that need homes.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.petfinder.com/",
    tools: ["typescript", "nextjs", "tailwind"],
  },
  {
    name: "myOKR Website",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.myokr.co/",
    tools: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "DLT Labs Website",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tools: ["figma", "angular", "gsap"],
  },
  {
    name: "Another Client",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tools: ["figma", "angular", "gsap"],
  },
];
