import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Status from "@/components/Status";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span> Digital Marketer & SEO Specialist</span>
            <h1 className="h1">
              {" "}
              Hello I'm <br /> <span>Sajib Barua</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
           I turn digital presence into performance through strategic marketing, SEO mastery, and creative precision.
            </p>
          {/* btn and social medias */}
          <div className="flex flex-col xl:flex-row items-center gap-8 ">
            <Button 
            variant="outline"  size="lg" className="uppercase flex items-center gap-2">
               
              <span> Download CV</span>
              <FiDownload />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6"
              iconStyles=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
              />

            </div>
          </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>

      <Status/>
    </section>
  );
};
export default Home;
