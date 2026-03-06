import { useState, useEffect } from "react";
import profileUrl from "@assets/images/about.jpg";
import { aboutMeData } from "../../../const/about/aboutData";

const CACHE_KEY = "about_profile_image";
const CACHE_TIME_KEY = "about_profile_image_time";
const EXPIRATION_TIME = 15 * 60 * 1000; // 15 minutes

const AboutMe = () => {
  const [imageSrc, setImageSrc] = useState(profileUrl); // Default to URL while loading

  useEffect(() => {
    const cachedImage = localStorage.getItem(CACHE_KEY);
    const cacheTime = localStorage.getItem(CACHE_TIME_KEY);
    const now = new Date().getTime();

    if (cachedImage && cacheTime && now - parseInt(cacheTime, 10) < EXPIRATION_TIME) {
      setImageSrc(cachedImage);
    } else {
      fetch(profileUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result;
            try {
              localStorage.setItem(CACHE_KEY, base64data);
              localStorage.setItem(CACHE_TIME_KEY, now.toString());
            } catch (e) {
              console.warn("Storage quota exceeded, not caching image.");
            }
            setImageSrc(base64data);
          };
          reader.readAsDataURL(blob);
        })
        .catch(() => setImageSrc(profileUrl));
    }
  }, []);

  return (
    <div className="text-white animate-[slideUp_0.6s_ease-out]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center animate-[float_3s_ease-in-out_infinite]">
        <span className="animated-gradient">
          About Me
        </span>
      </h2>
      <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-8 sm:mb-10 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className="flex justify-center animate-[scaleIn_0.6s_ease-out_0.2s_backwards]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <img 
              src={imageSrc} 
              alt="Profile" 
              className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </div>
        </div>

        <div className="text-left space-y-3 sm:space-y-4 animate-[slideUp_0.6s_ease-out_0.3s_backwards]">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
            {aboutMeData.paragraphs[0]}
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
            {aboutMeData.paragraphs[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
