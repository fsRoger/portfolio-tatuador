

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-dark py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-5xl font-bold text-white">
                Vamos <p className="text-orange-600">criar sua próxima tattoo</p> personalizada?
              </h1>
              <p className="text-gray-400">
                {" "}
              </p>
            </div>
            <div className="grid place-items-center">
              <a
                href="#"
                className="inline-block rounded-lg font-semibold py-2 px-6 bg-orange-700 text-white hover:bg-orange-600 duration-200 tracking-widest uppercase "
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
