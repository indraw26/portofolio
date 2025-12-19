const Project = () => {
  return (
    <div className="container mx-auto my-24 px-6">
      <div className="max-w-7xl mx-auto glass-effect-dark rounded-3xl p-8 md:p-12 animate-[fadeIn_0.8s_ease-out]">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-[float_3s_ease-in-out_infinite]">
            <span className="animated-gradient">
              Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-white/70">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
