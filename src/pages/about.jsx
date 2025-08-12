import Navbar from "../components/Navbar";
import homeBackground from "@assets/homeBackground.jpg";
import profile from "@assets/profile.png";
import Maintance from "./maintance";

const About = () => {
  const isPagefinished = false;

  return (
    <div>
      {isPagefinished ? (
        <div>
          <Navbar />
          <div className="w-[800px] mx-auto min-h-[1200px]">
            <div
              className="py-2 px-4 min-h-35 mt-4 flex flex-col-2 gap-4 border rounded-xl"
              style={{
                backgroundColor: "#a456db",
              }}
            >
              <div className="relative">
                <img
                  src={profile}
                  alt=""
                  className="rounded-full w-26 mx-10 mt-2"
                  style={{
                    border: "2px #CC66DA solid ",
                  }}
                />
              </div>
              <div className="font-monserrat mt-6">
                <h2 className="text-3xl font-bold text-white">Indra Wijaya</h2>
                <h2 className="text-lg text-white">Software Engineer/</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Maintance/>
      )}
    </div>
  );
};

export default About;
