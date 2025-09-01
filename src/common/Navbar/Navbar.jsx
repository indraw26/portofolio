import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();
  const handleNavigateAbout = () => {
    navigate("/about");
  };

  const listNavBar = ["Home", "About", "Project"];

  return (
    <nav className="font-lato-regular text-white">
      <div
        className="flex-no-wrap fixed flex mx-auto justify-between items-center px-2 py-5 pl-12 pr-2 md:min-w-screen"
        style={{
          backgroundColor: "#4E65FF",
        }}
      >
        <span
          className="text-xs sm:text-xs md:text-sm lg:text-md cursor-pointer"
          onClick={handleNavigateAbout}
        >
          Indra Wijaya
        </span>
        <div className="flex gap-10 px-4 mx-10 text-xs sm:text-xs md:text-xs lg:text-sm">
          {listNavBar.map((item, index) => (
            <a
              key={index}
              href={item === "Home" ? "/" : `/${item}`.toLocaleLowerCase()}
              className={`inline-block transition-transform duration-200 hover:-translate-y-1 hover:text-cyan-300 
                ${
                  isActive(item === "Home" ? "/" : `/${item}`)
                    ? "text-cyan-300"
                    : ""
                }
              `}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
