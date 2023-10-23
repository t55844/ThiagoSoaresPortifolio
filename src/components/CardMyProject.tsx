import Carousel from "./Carousel";

export default function CardMyProject(props: {
  title: string;
  description: string;
  images: string[];
  githubLink: string;
  siteLink: string;
}) {
  const { title, description, images, githubLink, siteLink } = props;
  return (
    <div className=" border p-4 rounded-lg shadow-md">
      <h3 className="m-auto md:w-1/2 p-2 text-xl mb-3 text-center border-b-4 border-gray-600 bg-gray-200 ">
        Projeto: {title}
      </h3>
      <div className="lg:flex justify-between items-center">
        <Carousel images={images} />
        <div className="shrink m-2 lg:w-1/3">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p>{description}</p>
          <p>
            Click no link do para o git Hub aqui{" "}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {githubLink}
            </a>
          </p>
          {/* Adicione links e botões para este item de trabalho */}
          <p>
            Click no link do para o site do projeto aqui{" "}
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {siteLink}
            </a>
          </p>
          {/* Adicione links e botões para este item de trabalho */}
        </div>
      </div>
    </div>
  );
}
