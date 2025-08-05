import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="font-lato-regular text-white">
      <div
        className="container flex mx-auto justify-between items-center  px-2 py-5 pl-12 pr-2 md:min-w-screen"
        style={{
          backgroundColor: "#a456db",
        }}
      >
        <span className="text-xs sm:text-xs md:text-sm lg:text-md">
          Indra Wijaya
        </span>
        <div className="flex gap-10 px-4 text-xs sm:text-xs md:text-xs lg:text-sm">
          <a
            className={`inline-block transition-transform duration-200 hover:-translate-y-1 hover:text-amber-200 ${
              isActive("/") ? "text-amber-200" : ""
            }`}
            href="/home"
          >
            Home
          </a>
          <a
            className={`inline-block transition-transform duration-200 hover:-translate-y-1 hover:text-amber-200 ${
              isActive("/about") ? "text-amber-200" : ""
            }`}
            href="/about"
          >
            About
          </a>
          <a
            className={`inline-block transition-transform duration-200 hover:-translate-y-1 hover:text-amber-200 ${
              isActive("/project") ? "text-amber-200" : ""
            }`}
            href="/project"
          >
            Portofolio
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
