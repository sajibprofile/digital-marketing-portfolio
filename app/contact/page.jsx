"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 123 456 789",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hello@digimarketer.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Digital District, Marketing City 56789",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Left: Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's grow your brand together.</h3>
              <p className="text-white/60">
                Whether you're launching a new campaign or looking to scale your online presence, I’d love to hear about your goals.
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone number" />
              </div>

              {/* Service Selector */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Marketing Services</SelectLabel>
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                    <SelectItem value="smm">Social Media Marketing</SelectItem>
                    <SelectItem value="ads">Google/Facebook Ads</SelectItem>
                    <SelectItem value="email">Email Marketing</SelectItem>
                    <SelectItem value="branding">Brand Strategy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Share your vision or project details..."
              />

              {/* Submit Button */}
              <Button className="max-w-40">Send message</Button>
            </form>
          </div>

          {/* Right: Contact Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
