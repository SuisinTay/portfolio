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
            <p>Hello, I'm Sui Sin!</p>
          </div>
          <div>
            <p>
              Hailing from the charming town of Malacca, I proudly wield a
              Software Engineering Degree from Taylor's University. With two
              years of frontend wizardry under my belt, I'm on a mission to
              sprinkle magic across the webosphere! From crafting captivating
              websites to conjuring up delightful user experiences, I thrive on
              pushing boundaries and turning pixels into pure joy. Let's embark
              on an adventure together and create some digital wonders! 🚀✨
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
