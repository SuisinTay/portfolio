import { Element } from "react-scroll";
import WorkContainer from "../containers/WorkContainer";
import { workConfig } from "../constants/workConfig";

const Work = () => {
  return (
    <Element
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>

        {workConfig.map((work) => (
          <WorkContainer {...work} />
        ))}
      </div>
    </Element>
  );
};

export default Work;
