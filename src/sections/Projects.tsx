import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleItem from "@/assets/icons/check-circle.svg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import GrainImage from "@/assets/images/grain.jpg";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import { Card } from "@/components/Card";
import { SectionHeaderT } from "@/components/SectionHeaderT";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeaderT
          eyebrow="Real-World Results"
          title=" Featured Projects"
          description=" See how transformed concepts into engaging digital experiences"
        ></SectionHeaderT>
      </div>
      <Card className="flex flex-col md:mt-20 mt-10 gap-20 px-4 ">
        {portfolioProjects.map((project) => (
          <div
            className="bg-gray-800 rounded-3xl  p-8  
            px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-0"
            key={project.title}
          >
            <div
              className="absolute inset-0 -z-10 opacity-5  "
              style={{
                backgroundImage: `url(${GrainImage.src})`,
              }}
            ></div>
            <div className="lg:grid lg:grid-cols-2 gap-16">
              <div className="lg:pb-16">
                <div
                  className=" bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold gap-2 uppercase 
                tracking-widest text-sm text-transparent bg-clip-text "
                >
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li
                      className="flex gap-2 text-sm md:text-base text-white/50"
                      key={result.title}
                    >
                      <CheckCircleItem className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 px-6 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-8 -md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
};
