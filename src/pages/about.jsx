import Bio from "../components/About/Bio";
import AboutMe from "../components/About/AboutMe";
import Skill from "../components/About/ProgrammingSkill";

const About = () => {
  return (
    <div className="container mx-auto flex items-center justify-center px-4 my-24">
      <div className="max-w-6xl mx-auto glass-effect-dark rounded-3xl overflow-hidden animate-[fadeIn_0.8s_ease-out]">
        <div className="p-8 md:p-12 space-y-12">
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

export default About;
