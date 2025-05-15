"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiFacebook,
  SiMailchimp,
  SiAdobephotoshop,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Results-driven Digital Marketer with a strong focus on data, branding, and customer engagement. Passionate about creating scalable marketing strategies across various platforms.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sajib Barua",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 188 316 8140",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "SajibBarua.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "language",
      fieldValue: "English, Spanish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Worked across various industries to drive traffic, improve conversions, and build impactful brand awareness.",
  items: [
    {
      company: "MarketingPro Agency",
      position: "Senior Digital Marketer",
      duration: "2022 - Present",
    },
    {
      company: "Freelance Projects",
      position: "Marketing Strategist",
      duration: "2020 - 2022",
    },
    {
      company: "AdBoosters",
      position: "SEO & Ads Specialist",
      duration: "2019 - 2020",
    },
    {
      company: "BrandWise Ltd.",
      position: "Junior Marketer",
      duration: "2018 - 2019",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My experience",
  description:
    "Solid foundation in marketing principles, analytics, and content strategies with continued online education.",
  items: [
    {
      institution: "Google Skillshop",
      degree: "Certified in Google Ads & Analytics",
      duration: "2023",
    },
    {
      institution: "HubSpot Academy",
      degree: "Content Marketing Certification",
      duration: "2022",
    },
    {
      institution: "Coursera",
      degree: "Digital Marketing Specialization",
      duration: "2020-2021",
    },
    {
      institution: "University of Marketing",
      degree: "BBA in Marketing",
      duration: "2016 - 2020",
    },
  ],
};

// skill data
const skills = {
  title: "My skills",
  description:
    "Expert in SEO, SEM, analytics, email marketing, and digital ad campaigns. Always optimizing for performance and ROI.",
  skillList: [
    {
      icon: <SiGoogleanalytics />,
      name: "Google Analytics",
    },
    {
      icon: <SiGoogletagmanager />,
      name: "Tag Manager",
    },
    {
      icon: <SiFacebook />,
      name: "Meta Ads",
    },
    {
      icon: <SiMailchimp />,
      name: "Mailchimp",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left  ">
                <h3 className=" text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 " >
                          <span className="text-accent " >{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left " >{item.position}</h3>
                          <div className=" flex items-center gap-3  ">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left  ">
                <h3 className=" text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 " >
                          <span className="text-accent " >{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left " >{item.degree}</h3>
                          <div className=" flex items-center gap-3  ">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left ">
                    <h3 className="text-4xl font-bold  ">{skills.title}</h3>
                    <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 " >{skills.description} </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                            <div className=" text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon} </div>
                          </TooltipTrigger>
                          <TooltipContent >
                            <p className=" capitalize">{skill.name} </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title} </h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 " >{about.description} </p>
                <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index)=>{
                    return (
                      <li key={index} className=" flex items-center justify-center xl:justify-start gap-4 ">
                        <span className=" text-white/60 " >{item.fieldName}: </span>
                        <span className=" text-xl" > {item.fieldValue} </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
