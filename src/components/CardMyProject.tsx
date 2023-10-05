import Carousel from "./Carousel";

export default function CardMyProject(props: {
  title: string;
  description: string;
  images: string[];
  githubLink: string;
}) {
  const { title, description, images, githubLink } = props;
  return (
    <div className="m-8 border p-4 rounded-lg shadow-md">
      <h3 className="m-auto md:w-1/2 p-2 text-xl mb-3 text-center border-b-4 border-gray-600 bg-gray-200 ">
        Projeto: {title}
      </h3>
      <Carousel images={images} />
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{description}</p>
      <p>
        Click no link do projeto aqui{" "}
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
    </div>
  );
}
