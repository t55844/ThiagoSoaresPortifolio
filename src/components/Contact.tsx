export default function Contact() {
  return (
    <section className="contact bg-gray-100 py-16" id="contact">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 border-b-8 border-gray-300 bg-gray-200">
          Contato
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-4">
          Entre em contato
        </h3>
        <div className="flex justify-between items-center m-5">
          <div className="w-2/5">
            <p className="mb-4">
              Deixando uma mensagem para dizer olá, pedir meu currículo ou ver
              se podemos construir algo incrível juntos? Ficarei feliz em ouvir
              de você!
            </p>
            <p className="mb-4">
              Preencha suas informações no formulário abaixo e estou ansioso
              para receber notícias suas!
            </p>
            {/* Adicione um formulário de contato aqui */}
          </div>
          <div className="w-full">
            <p className="mb-4 font-semibold">
              Se sentindo social? Me encontre também nestes espaços online!
            </p>
            <div className="flex justify-around items-center">
              <div className=" bg-gray-500 p-4 rounded-xl w-2/5">
                <a
                  className="flex items-center justify-around"
                  href="https://www.linkedin.com/in/thiago-soares-9223a2229/"
                >
                  <img className="w-20 h-20" src="/linkedin.png" alt="" />
                  Veja meu perfil no linkedin e me contrate
                </a>
              </div>
              <div className=" bg-gray-500 p-4 rounded-xl w-2/5">
                <a
                  className="flex items-center justify-around"
                  href="https://github.com/t55844"
                >
                  <img className="w-20 h-20" src="/github.png" alt="" />
                  Veja meu perfil no linkedin e me contrate
                </a>
              </div>
            </div>
            {/* Adicione links para redes sociais aqui */}
          </div>
        </div>
      </div>
    </section>
  );
}
