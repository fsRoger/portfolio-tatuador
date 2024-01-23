import PersonImg from "../../assets/website/person.jpg";

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="">
            <img src={PersonImg} alt="" className="p-10" />
          </div>
          <div className="space-y-3 ">
            <p className="text-orange-700">Olá, eu sou Lucas Reis</p>
            <h1 className="text-5xl font-semibold">Tatuador</h1>
            <p>
              Bem-vindo ao meu portfólio, um espaço dedicado à arte da tatuagem.

              Neste espaço,<p className="text-orange-600 ">você encontrará uma variedade de estilos e designs que refletem a paixão e a dedicação que coloco em cada projeto.</p>Cada tatuagem é mais do que apenas uma marca na pele; é uma expressão única de identidade, história e significado.
            </p>
            <button className="uppercase rounded-lg bg-orange-700 hover:bg-orange-600 duration-500 py-2 px-6 text-white">
              Sobre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
