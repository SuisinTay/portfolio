type TWorkContainer = {
  image: string;
  title: string;
  webUrl: string;
  githubUrl: string;
};

const WorkContainer = ({ image, title, webUrl, githubUrl }: TWorkContainer) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider">
            {title}
          </span>
          <div className="pt-8 text-center">
            <a href={webUrl}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href={githubUrl}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkContainer;
