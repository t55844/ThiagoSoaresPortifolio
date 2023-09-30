export default function About() {
  return (
    <section className="about bg-gray-100 py-16" id="about">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 border-b-8 border-gray-300 bg-gray-200">
          Sobre
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-4">
          Quem é Thiago?
        </h3>
        <div className="flex flex-col md:flex-row items-center md:space-x-4 ">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src="/MyPhoto.jpg"
              alt="Thiago Soares"
              className="w-96 h-96 mx-auto md:ml-0 rounded-full mb-4"
            />
          </div>
          <div className="w-full p-3 md:w-1/2">
            <h4 className="text-xl font-semibold mb-2">
              Um Desenvolvedor Web movido pela curiosidade, com habilidades em
              Front-End e Back-End.
            </h4>
            <p className="mb-4">
              Sou apaixonado por dar vida aos aspectos técnicos e visuais de
              produtos digitais. Experiência do usuário, pixels bonitos e
              escrever código limpo, acessível e humano são importantes para
              mim. Eu presto atenção aos detalhes. E como seguidor das{" "}
              <a
                href="http://lawsofsimplicity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                leis da simplicidade
              </a>
              , de John Maeda, concordo que menos é mais.
            </p>
            <p className="mb-4">
              Tenho um{" "}
              <span className="font-semibold">
                Superior em Análise de Sistemas
              </span>{" "}
              pela{" "}
              <a
                href="https://portal.fmu.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Universidade FMU
              </a>{" "}
              🎓O curso desenvolve no estudante o domínio para especificar,
              projetar, desenvolver, implementar, documentar, manter e avaliar
              sistemas de computação, empregando metodologias, tecnologias e
              ferramentas de engenharia de software, linguagens de programação e
              banco de dados.
            </p>
            <p className="mb-4">
              Fico mais feliz quando estou criando, aprendendo, explorando e
              pensando em como melhorar as coisas. Atualmente, resolvendo
              problemas aparentemente simples que encontro na web ou desafios
              para expandir meus conhecimentos
            </p>
            <div className="text-center md:text-left">
              <a href="#contact" className="text-blue-500 hover:underline">
                entre em contato!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
