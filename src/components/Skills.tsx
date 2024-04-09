import { Element } from "react-scroll";
import SkillsContainer from "../containers/SkillsContainer";
import { skillsConfig } from "../constants/skillsConfig";

const Skills = () => {
  return (
    <Element
      name="skills"
      className="bg-[#0a192f] text-gray-300 w-full h-screen"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsConfig.map((skill) => (
            <SkillsContainer {...skill} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
