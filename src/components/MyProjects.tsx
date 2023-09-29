export default function MyProjects() {
  return (
    <section className="work py-16" id="work">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 border-b-8 border-gray-300 bg-gray-200">
          portfólio
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-4">
          uma seleção do que construí
        </h3>
        {/* Substitua pelos itens do seu portfólio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ITEM DE PORTFÓLIO UM */}
          <div className="border p-4 rounded-lg shadow-md">
            <img
              src="imagem-do-item-de-trabalho-1.jpg"
              alt="Trabalho 1"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Trabalho 1</h4>
            <p>
              Descrição do Trabalho 1. Para quando você precisa de um tempo
              longe do seu parceiro, mas já tem um babá. Agora os casais podem
              ir a eventos diferentes em locais semelhantes e ao mesmo tempo.
            </p>
            {/* Adicione links e botões para este item de trabalho */}
          </div>

          {/* Adicione mais itens de trabalho aqui */}
        </div>
      </div>
    </section>
  );
}
