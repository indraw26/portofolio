import instagram from "@assets/icons/instagram.png";
import linkedin from "@assets/icons/linkedin.png";
import discord from "@assets/icons/discord.png";
import github from "@assets/icons/github.png";

const Footer = () => {
  const mediaSocial = [
    {
      image: linkedin,
      link: "https://www.linkedin.com/in/indra-wijaya-o1204",
      title: "LinkedIn"
    },
    {
      image: github,
      link: "https://github.com/indraw26",
      title: "GitHub"
    },
    {
      image: instagram,
      link: "https://www.instagram.com/_.indrak._/",
      title: "Instagram"
    },
    {
      image: discord,
      link: "https://discordapp.com/users/arluxy",
      title: "Discord"
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 glass-effect-dark border-t border-red-500/20">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-center gap-4 sm:gap-6 overflow-visible">
          {mediaSocial.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-all duration-300 cursor-pointer flex items-center overflow-visible"
              title={item.title}
            >
              <div className="footer-icon-wrapper flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-500/20 transition-all duration-300 border border-white/10 group-hover:border-red-500/40 group-hover:scale-110">
                  <img src={item.image} alt={item.title} className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              {/* Sliding text label */}
              <span className="footer-icon-label absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-xl z-50 pointer-events-none">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
