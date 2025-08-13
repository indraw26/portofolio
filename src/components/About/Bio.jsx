import LabelText from "../../common/LabelText/LabelText";
import Underscore from "../../common/Underscore/Underscore";

const Bio = () => {
  const skillInternRsup = ["Laravel", "Javascript", "Bootstrap 5", "MySQL"];

  return (
    <div className="py-4 px-10 text-white mb-2">
      <div className="text-xl font-lato-bold">
        <h3 className="font-lato-bold">Bio</h3>
        <Underscore style={"w-8"}/>
      </div>

      <div className="mt-2 space-y-2">
        <div className="grid grid-cols-[200px_1fr]">
          <p className="text-md font-medium">2004</p>
          <p className="text-md">: Born in Palembang, Indonesia</p>
        </div>
        <div className="grid grid-cols-[200px_1fr]">
          <p className="text-md font-medium">2018-2021</p>
          <p className="text-md">
            : Graduate from{" "}
            <span className="text-purple-300">YPI Tunas Bangsa Palembang</span>{" "}
            Higschool, with a majoin in{" "}
            <span className="font-bold">social sciences</span>.
          </p>
        </div>
        <div className="grid grid-cols-[200px_1fr]">
          <p className="text-md font-medium">
            2021–2025 <span className="text-gray-400 text-md">(3.5 year)</span>
          </p>
          <p className="text-md">
            : Graduate with a bachelor degree in{" "}
            <span className="text-purple-300">Information Systems </span>
            from{" "}
            <span className="text-purple-300">
              University Multi Data Palembang
            </span>{" "}
          </p>
        </div>
        <div className="grid grid-cols-[200px_1fr]">
          <p className="text-md font-medium">2024, Feb - Juni</p>
          <p className="text-md">
            : Internship at{" "}
            <span className="text-purple-300">
              RSUP dr. Mohammad Hoesin Palembang
            </span>{" "}
            as a Full Stack developer
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          {skillInternRsup.map((item, index) => (
            <LabelText key={index} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
