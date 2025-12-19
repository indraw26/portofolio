import profile from "@assets/images/about.jpg";

const AboutMe = () => {
  return (
    <div className="text-white animate-[slideUp_0.6s_ease-out]">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center animate-[float_3s_ease-in-out_infinite]">
        <span className="animated-gradient">
          About Me
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto mb-10 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center animate-[scaleIn_0.6s_ease-out_0.2s_backwards]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <img 
              src={profile} 
              alt="Profile" 
              className="relative w-72 md:w-80 lg:w-96 rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="text-left space-y-4 animate-[slideUp_0.6s_ease-out_0.3s_backwards]">
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Hi, I'm <span className="font-semibold text-red-400">Indra</span> — a Software Engineer passionate about web
            development, databases, and information systems.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white/80">
            I'm a communicative and adaptable person who loves problem-solving to create impactful digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
