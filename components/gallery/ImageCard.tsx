import Image from "next/image";

interface Props {
  image: string;
  title: string;
  onClick: () => void;
}

export default function ImageCard({ image, title, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
group
relative
cursor-pointer
overflow-hidden
rounded-2xl
"
    >
      <div
        className="
relative
aspect-square
"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
object-cover
transition
duration-500
group-hover:scale-110
"
        />
      </div>

      <div
        className="
absolute
inset-x-0
bottom-0
bg-black/50
p-4
text-white
opacity-0
transition
group-hover:opacity-100
"
      >
        {title}
      </div>
    </div>
  );
}
