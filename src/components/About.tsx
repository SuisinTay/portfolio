import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello, I'm Sui Sin</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              similique culpa esse, eaque eius earum. Ea nulla magni alias
              ratione provident fuga quis, ipsum voluptatum iusto molestias.
              Magni, id! Rerum.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;