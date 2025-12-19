import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex items-center justify-center px-4 min-h-screen">
      <div className="flex flex-col text-center text-white max-w-5xl w-full animate-[fadeIn_0.8s_ease-out]">
        
        <div className="mb-12 space-y-6 animate-[slideUp_0.6s_ease-out]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat-bold leading-tight">
            Hi, I'm{" "}
            <span 
              className="inline-block animated-gradient animate-[float_3s_ease-in-out_infinite]"
              style={{
                animation: "float 3s ease-in-out infinite, glowPulse 3s ease-in-out infinite"
              }}
            >
              Indra Wijaya
            </span>
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-montserrat-bold text-white/90">
            <span 
              className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent inline-block"
              style={{
                animation: "float 3s ease-in-out infinite 0.5s"
              }}
            >
              Software Engineer
            </span>
            {" "}from Palembang
          </p>
        </div>

        <div className="space-y-6 mb-12 max-w-3xl mx-auto animate-[slideUp_0.6s_ease-out_0.2s_backwards]">
          <p className="text-lg md:text-xl leading-relaxed font-lato-regular text-white/80">
            I'm a developer who enjoys learning new technology. I focus on writing clean code, 
            and I continuously grow through every project, challenge, and line I write.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-lato-regular text-white/70">
            Welcome to my portfolio. Feel free to explore my work and learn more about me.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[slideUp_0.6s_ease-out_0.4s_backwards]">
          <button
            className="group px-8 py-4 rounded-xl font-lato-regular text-base transition-all duration-300 hover:scale-105 glass-effect border border-red-500/30 hover:border-red-500/50 min-w-[200px] cursor-pointer"
            onClick={() => navigate('/about')}
          >
            <span className="text-red-400 group-hover:text-red-300 flex items-center justify-center gap-2">
              More about me
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          
          <button
            className="group px-8 py-4 rounded-xl font-lato-regular text-base transition-all duration-300 hover:scale-105 glass-effect border border-purple-500/30 hover:border-purple-500/50 min-w-[200px] cursor-pointer"
            onClick={() => navigate('/project')}
          >
            <span className="text-purple-400 group-hover:text-purple-300 flex items-center justify-center gap-2">
              View Projects
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
