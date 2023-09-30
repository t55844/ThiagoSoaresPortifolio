import CardMyProject from "./CardMyProject";

export default function MyProjects() {
  return (
    <section className="work py-16" id="work">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 border-b-8 border-gray-300 bg-gray-200">
          projeto
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-4">
          Um projeto de exemplo que eu fiz e que esta ativo na internet
        </h3>
        {/* Substitua pelos itens do seu portfólio */}
        <div className="">
          <CardMyProject
            title="Plants Lovers"
            description="Introdução Plants Lovers é uma plataforma baseada na web projetada para que os amantes de plantas explorem, aprendam e acompanhem suas plantas favoritas. É o lugar perfeito para se conectar com outros entusiastas de plantas, descobrir novas espécies e construir sua própria coleção digital de plantas."
            githubLink="https://github.com/t55844/plants-lovers"
            images={["/Plants2.PNG", "/Plants1.PNG", "/Plants3.PNG"]}
          />
        </div>
      </div>
    </section>
  );
}
