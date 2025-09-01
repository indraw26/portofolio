import Navbar from "../common/Navbar/Navbar";
import SocialMedia from "../components/About/SocialMedia";
import Bio from "../components/About/Bio";
import AboutMe from "../components/About/AboutMe";
import Skill from "../components/About/ProgrammingSkill";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black/40 px-4 rounded-lg text-white w-full min-h-screen font-lato-regular py-15">
        <div className="py-8 flex flex-col mx-auto items-center">
          <div className="bg-black/60">
            <AboutMe/>
            <Bio />
            <Skill/>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
