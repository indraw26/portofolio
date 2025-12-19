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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-6">
          {mediaSocial.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110 cursor-pointer"
              title={item.title}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-500/20 transition-all duration-300 border border-white/10 group-hover:border-red-500/40">
                <img src={item.image} alt={item.title} className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
