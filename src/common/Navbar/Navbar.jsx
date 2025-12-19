import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();
  
  const handleNavigate = (item) => {
    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    navigate(path);
  };

  const listNavBar = ["Home", "About", "Project"];

  return (
    <nav className="font-lato-regular text-white fixed top-0 left-0 right-0 z-50 animate-[slideDown_0.5s_ease-out]">
      <div className="glass-effect-dark mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 rounded-b-2xl">
        <div className="flex justify-between items-center">
          {/* Logo/Name with Animated Gradient */}
          <span
            className="text-base sm:text-lg md:text-xl font-semibold cursor-pointer transition-all duration-300 hover:scale-105 animated-gradient"
            onClick={() => handleNavigate("Home")}
          >
            Indra Wijaya
          </span>

          {/* Navigation Links */}
          <div className="flex gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base">
            {listNavBar.map((item, index) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const active = isActive(path);
              
              return (
                <button
                  key={index}
                  onClick={() => handleNavigate(item)}
                  className={`
                    relative px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg cursor-pointer
                    transition-all duration-300 ease-in-out
                    hover:bg-red-400/10
                    ${active ? 'text-red-400' : 'text-white/90'}
                  `}
                  style={{
                    animation: `slideDown 0.5s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  {item}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
