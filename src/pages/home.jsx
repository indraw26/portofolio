import background1 from "@assets/background.jpeg";

const Home = () => {
  return (
    <>
      <nav className="font-lato-regular text-white">
        <div className="container flex mx-auto justify-between items-center bg-red-500 px-2 py-5 pl-12 pr-2">
          <span className="text-md">Indra Wijaya</span>
          <div className="flex gap-10 text-md">
            <a className="inline-block transition-transform duration-200 hover:-translate-y-1 hover:text-gray-300" href="#home">
              Home
            </a>
            <a className="inline-block transition-transform duration-200 hover:-translate-y-1 hover:text-gray-300" href="#about">
              About
            </a>
            <a className="inline-block transition-transform duration-200 hover:-translate-y-1 hover:text-gray-300" href="/project">
              Portofolio
            </a>
          </div>
        </div>
      </nav>
      <div id="home" className="container mx-auto min-h-[1200px]">
        <div className="flex flex-col px-4 pt-24 text-center leading-tight text-white">
          <p className="text-3xl font-bold font-montserrat">
            Hi, I'm{" "}
            <span
              className="text-secondary text-red-400 drop-shadow-xl inline-block transition-transform duration-200 hover:-translate-y-1"
              style={{
                textShadow: "4px 2px 2px rgba(239, 68, 68, 0.6)",
              }}
            >
              Indra Wijaya
            </span>
            !
            <br />
            <span
              className="text-secondary text-sky-400 drop-shadow-xl inline-block transition-transform duration-200 hover:-translate-y-1"
              style={{
                textShadow: "4px 2px 2px rgba(14, 165, 233, 0.6)",
              }}
            >
              Software Engineer
            </span>{" "}
            from Palembang
          </p>
          <div className="flex flex-col px-4 py-6 gap-5 text-sm">
            <p className="px-4 sm:px-16 md:px-32 lg:px-64 leading-relaxed font-monserrat">
              I'm a developer who enjoys turning ideas into functional and
              elegant code. I focus on writing clean, <br />
              and I continuously grow through every project, challenge, and line
              I write.
            </p>
            <p className="px-4 sm:px-16 md:px-32 lg:px-64 leading-relaxed font-monserrat">
              So, that's our small chat. You've been here looking through my
              website. Let me spill the tea 🍵.
              <br /> Welcome to my art-work and don't hesitate to discover more
              thing about me 🙂.
            </p>
          </div>
          <div className="flex gap-2 mx-auto items-center justify-between">
            <button
              className="bg-blue-400 py-2 px-4 rounded-md font-lato-regular text-sm transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter =
                  "drop-shadow(0px 6px 12px rgba(83, 147, 252, 0.8))")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter =
                  "drop-shadow(0px 2px 4px rgba(83, 147, 252, 0.8))")
              }
            >
              More about me
            </button>
            <button
              className="bg-red-400 py-2 px-4 rounded-md font-lato-regular text-sm transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter =
                  "drop-shadow(0px 2px 12px rgba(246, 72, 59, 0.8))")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter =
                  "drop-shadow(0px 2px 4px rgba(246, 72, 59, 0.8))")
              }
            >
              Work Result
            </button>
          </div>
        </div>
      </div>
      <div id="about">tedhasiudgasoidgsaiodg</div>
    </>
  );
};

export default Home;
