import Bio from "./About/Bio";
import AboutMe from "./About/AboutMe";
import Skill from "./About/ProgrammingSkill";

const AboutPage = () => {
  return (
    <div className="container mx-auto flex items-center justify-center px-4 sm:px-6 my-20">
      <div className="max-w-7xl mx-auto glass-effect-dark rounded-3xl overflow-hidden animate-[fadeIn_0.8s_ease-out]">
        <div className="p-6 sm:p-8 md:p-12 space-y-8 sm:space-y-10 md:space-y-12">
          <AboutMe />
          <div className="border-t border-white/10"></div>
          <Bio />
          <div className="border-t border-white/10"></div>
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
