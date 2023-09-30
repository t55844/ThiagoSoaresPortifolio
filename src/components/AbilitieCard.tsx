export default function AbilitieCard(props: {
  title: string;
  description: string;
  img: string;
  size?: string;
}) {
  const { title, description, img, size } = props;
  return (
    <div
      className={`flex flex-col justify-around items-center md:w-2/5 h-96 m-3
    rounded-xl p-4
      bg-gradient-to-br from-gray-100 to-gray-400
    `}
    >
      <img className={`${size ? size : "w-32 h-32"}`} src={img} alt="" />
      <p>
        <title>{title}</title>
        {description}
      </p>
    </div>
  );
}
