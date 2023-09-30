import Carousel from "./Carousel";

export default function CardMyProject(props: {
  title: string;
  description: string;
  images: string[];
  githubLink: string;
}) {
  const { title, description, images, githubLink } = props;
  return (
    <div className="border p-4 rounded-lg shadow-md">
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
