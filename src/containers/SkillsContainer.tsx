type TSkillsContainer = {
  image: string;
  skills: string;
};

const SkillsContainer = ({ image, skills }: TSkillsContainer) => (
  <>
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={image} alt="HTML" />
      <p className="my-4">{skills}</p>
    </div>
  </>
);

export default SkillsContainer;
