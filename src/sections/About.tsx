import ChromeIcon from "@/assets/icons/chrome.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ICON from "@/assets/icons/square-js.svg";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeaderT } from "@/components/SectionHeaderT";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: ICON,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },

  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "30%",
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "💪",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeaderT
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who i am, what i do,and what inspires me."
        ></SectionHeaderT>
        <div className="mt-20 flex flex-col gap-8">
          <div className=" grid grid-cols-1 md:grid-cols-5 md:gap-8 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] lg:col-span-1 md:col-span-2 ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my prospective"
              ></CardHeader>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover"></Image>
              </div>
            </Card>
            <Card className="h-[320px] lg:col-span-2  md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools i use to create digital
                experience."
              ></CardHeader>
              <ToolboxItems className="" items={toolboxItems}></ToolboxItems>
              <ToolboxItems
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2"
                items={toolboxItems}
              ></ToolboxItems>
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] lg:col-span-2 md:col-span-3 p-0 flex flex-col">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              ></CardHeader>
              <div className="relative flex-1 ">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex absolute items-center gap-8 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] lg:col-span-1 md:col-span-2 p-0 relative">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              ></Image>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20  rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <Image
                  src={smileEmoji}
                  alt="smile"
                  className="size-20 "
                ></Image>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
