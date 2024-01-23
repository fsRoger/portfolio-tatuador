
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Estilos Diversificados",
    icon: (
      <FaCameraRetro className="text-5xl text-orange-700 group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "Desde linhas finas e detalhes intrincados até designs audaciosos e vibrantes como você nunca viu.",
  },
  {
    name: "Técnica Impecável",
    icon: (
      <GiNotebook className="text-5xl text-orange-700 group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "Utilizo técnicas avançadas e materiais de alta qualidade para garantir que cada tatuagem seja durável",
  },
  {
    name: "Experiência Personalizada",
    icon: (
      <SlNote className="text-5xl text-orange-700 group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "Valorizo a colaboração com meus clientes para criar tatuagens que se alinham com suas visões e significados pessoais. ",
  },
];
const Skills = () => {
  return (
    <>
      <span id="about"></span>

      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 md:gap-4">
            {skillsData.map((skill) => (
              <div key={skill} className=" card group space-y-3 p-4 rounded-md bg-dark  hover:bg-orange-700 duration-300 transition-all text-white shadow-md">
                <div>{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-orange-700 group-hover:text-white duration-300"
                >
                  Saber mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
