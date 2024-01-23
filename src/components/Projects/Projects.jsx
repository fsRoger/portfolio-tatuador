
import web1 from "../../assets/website/black.jpg";
import web2 from "../../assets/website/colors.jpg";
import web3 from "../../assets/website/tatuando.jpg";
import web4 from "../../assets/website/person2black.jpg";

const ProjectsData = [
  {
    id: 1,
    name: "Aquarela",
    image: web3,
    link: "#",
  },
  {
    id: 2,
    name: "Black work",
    image: web2,
    link: "#",
  },
  {
    id: 3,
    name: "Traços finos",
    image: web4,
    link: "#",
  },
  {
    id: 4,
    name: "Free hand",
    image: web1,
    link: "#",
  },
];

const Projects = () => {
  return (
    <>
      <span id="project"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="uppercase text-3xl font-bold">
                Projetos em destaque
              </h1>

            </div>
            <div>
              <button className="rounded-lg bg-orange-700 hover:bg-orange-600 duration-500 py-2 px-6 text-white">
                Ver todos
              </button>
            </div>
          </header>
          {/* card section */}
          <section>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 gap-2 md:gap-6">
              {/* card */}
              {ProjectsData.map(({ id, name, image, link }) => {
                return (
                  <div key={id}>
                    <div className="rounded-sm h-[340px] sm:h-[460px] w-full bg-dark/80 grid place-items-center p-3 sm:p-6 shadow-md">
                      <img src={image} alt="" className="h-[310px] sm:h-[400px] w-full h-full object-cover" />
                    </div>
                    <div className="pt-4 space-y-3">
                      <h1 className="text-3xl font-bold">{name}</h1>
                      <div>
                        <a href={link} className="text-orange-700 uppercase">
                          Saber mais
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
