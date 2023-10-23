export default function About() {
  return (
    <section className="about bg-gray-100 py-16" id="about">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 border-b-8 border-gray-300 bg-gray-200">
          <strong>Thiago Soares</strong>
          <br></br>
          Front End Developer
        </h2>

        <div className="w-full text-xl font-bold m-auto p-3 md:w-1/2">
          Desenvolvedor FrontEnd a 1 ano, especializado em React,trabalho como
          freelancer
        </div>

        <h3 className="text-2xl font-semibold text-center mb-4">
          <div className=" flex flex-col md:flex-row justify-around items-center">
            <div className=" hover:bg-gray-500 p-4 rounded-xl m-2 md:w-2/5">
              <a
                className="flex items-center justify-around"
                href="https://www.linkedin.com/in/thiago-soares-9223a2229/"
              >
                <img className="w-20 h-20" src="/linkedin.png" alt="" />
              </a>
            </div>
            <div className=" hover:bg-gray-500 p-4 rounded-xl m-2 md:w-2/5">
              <a
                className="flex items-center justify-around"
                href="https://github.com/t55844"
              >
                <img className="w-20 h-20" src="/github.png" alt="" />
              </a>
            </div>
          </div>
        </h3>
      </div>
    </section>
  );
}
