import instagram from "@assets/icons/instagram.png";
import linkedin from "@assets/icons/linkedin.png";
import discord from "@assets/icons/discord.png";
import github from "@assets/icons/github.png";
import Underscore from "../../common/Underscore/Underscore";

const SocialMedia = () => {
  const mediaSocial = [
    {
      image: linkedin,
      link: "www.linkedin.com/in/indra-wijaya-o1204",
      title: "Indra Wijaya",
    },
    {
      image: github,
      link: "https://github.com/indraw26",
      title: "indraw26",
    },
    {
      image: instagram,
      link: "https://www.instagram.com/_.indrak._/",
      title: "_.indrak._",
    },
    {
      image: discord,
      link: "https://discordapp.com/users/arluxy",
      title: "arluxy",
    },
  ];

  return (
    <div className="mt-4 justify-center bg-blue-400/20 space-x-6 py-4 px-10 pb-6">
      <h3 className="text-xl w-full font-lato-bold">Social Media</h3>
      <Underscore style={"w-28 mb-2"} />

      <div className="w-full">
        {mediaSocial.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-2 px-2 rounded-lg mb-1 w-42 hover:bg-sky-800 transition-colors duration-300"
          >
            <img src={item.image} alt={item.title} className="w-6 h-6" />
            <span className="text-white font-lato-regular">: {item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
