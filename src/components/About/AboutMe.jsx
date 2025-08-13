import profile from "@assets/images/about.jpg";
const AboutMe = () => {

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center pt-4">About Me</h2>
      <div className="border-b-4 border-gray-100 w-28 mx-auto mb-6"></div>

      <div className="grid grid-cols-2 md:grid-cols-2 items-center px-2 py-2 rounded-lg">
        <div className="mx-auto ">
          <img src={profile} alt="Profile" className="w-80" />
        </div>

        <div className="text-left max-w-100 mr-20">
          <p className="text-xl">
            Hi, I'm Indra — a Software Engineer who focused on efficiency, clean
            code, and problem-solving to create impactful digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
