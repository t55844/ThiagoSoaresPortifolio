import AbilitieCard from "./AbilitieCard";

export default function Abilities() {
  return (
    <section className="skills-tools py-16" id="skills-tools">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 border-b-8 border-gray-300 bg-gray-200">
          Habilidades e Ferramentas
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-4">
          Minha caixa de ferramentas e o que posso fazer
        </h3>
        <div className="flex justify-around items-center flex-wrap">
          {/* Substitua os ícones e rótulos das habilidades */}
          <AbilitieCard
            img="/nextjs-logo.png"
            size="w-40 h-30"
            title="Next.js"
            description="Usado por algumas das maiores empresas do mundo, Next.js permite que
            você crie aplicativos Web full-stack, estendendo os recursos mais
            recentes do React e integrando poderosas ferramentas JavaScript
            baseadas em Rust para compilações mais rápidas."
          />
          <AbilitieCard
            img="Python.png"
            title="Python"
            description="O python é bastante utilizado em data science, machine
            learning, desenvolvimento web, desenvolvimento de aplicativos,
            automação de scripts, fintechs e etc."
          />
          <AbilitieCard
            img="/ts-logo.png"
            title="TypeScript"
            description="TypeScript é uma linguagem de programação de código aberto
            desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela
            adiciona recursos avançados ao JavaScript, como a tipagem estática e
            interfaces, tornando mais fácil detectar e prevenir erros durante a
            fase de desenvolvimento"
          />
          <AbilitieCard
            img="/react-logo.png"
            title="React"
            description="JavaScript criado pelo Facebook (atual Meta) que é usado para criar
            interfaces de usuário (UI) em aplicativos web. Ele é popular por ser
            fácil de usar, altamente flexível e escalável, e é usado por muitas
            empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb"
          />
        </div>
        <div className="text-center mt-8">
          <h4>Atualmente trabalhando em:</h4>
          <p>
            Melhorando minhas habilidades em Python e React, e me divertindo
            Participação ativa em cursos e workshops relacionados a tecnologias
            de ponta, como React, TypeScript e Python. Autoaprendizado constante
            por meio de recursos online, livros, documentações técnicas e
            projetos 👨‍💻 como{" "}
            <a
              href="https://plants-lovers-8tzh4qijx-t55844.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              #Plants Lovers
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
