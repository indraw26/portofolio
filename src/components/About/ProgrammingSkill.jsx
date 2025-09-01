import Underscore from "../../common/Underscore/Underscore";

const Skill = () => {
  const skills = {
    blue: ["HTML", "CSS", "Javascript"],
    yellow: ["Java", "Python", "Dart", "PHP"],
    purple: ["Bootstrap", "Tailwind CSS"],
    green: ["Laravel", "Flutter", "React.Js"],
    red: ["MySQL", "MongoDB"],
  };

  const colorClasses = {
    blue: "text-white",
    yellow: "text-white",
    purple: "text-white",
    green: "text-white",
    red: "text-white",
  };

  const flatSkills = Object.entries(skills).flatMap(([color, items]) =>
    items.map((item) => ({ name: item, color }))
  );

  return (
    <div className="py-2 px-10 text-white mb-2 space-y-2">
      <h3 className="text-xl font-lato-bold">Programming Skills</h3>
      <Underscore style={"w-43"} />
      <p>
        {flatSkills.map((skill, index) => (
          <span
            key={`${skill.color}-${index}`}
            className={colorClasses[skill.color]}
          >
            {skill.name}
            {index < flatSkills.length - 1 && ", "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Skill;
