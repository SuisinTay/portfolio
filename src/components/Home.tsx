import { HiArrowNarrowRight } from "react-icons/hi";
import { Element, Link } from "react-scroll";

const Home = () => {
  return (
    <Element name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="sm:text-7xl text-4xl font-bold text-[#ccd6f6]">
          Sui Sin
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a frontend developer specializing in creating user-facing
          interfaces for websites and applications, focus on implementing
          designs, enhancing user experience, and ensuring compatibility across
          different devices and browsers.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group flex text-white border-2 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600">
              View Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Home;
