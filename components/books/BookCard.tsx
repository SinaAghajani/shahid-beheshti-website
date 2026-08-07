import Image from "next/image";
import { Book } from "@/types/book";
import Link from "next/link";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div
      className="
group
overflow-hidden
rounded-2xl
border
bg-white
transition
hover:-translate-y-2
hover:shadow-xl
dark:bg-gray-900
"
    >
      <div
        className="
relative
h-80
bg-gray-100
dark:bg-gray-800
"
      >
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="
object-cover
transition
duration-500
group-hover:scale-105
"
        />
      </div>

      <div
        className="
p-5
"
      >
        <h3
          className="
text-xl
font-bold
text-[#0F4C3A]
dark:text-green-400
"
        >
          {book.title}
        </h3>

        <p
          className="
mt-3
line-clamp-3
text-sm
leading-7
text-gray-600
dark:text-gray-300
"
        >
          {book.description}
        </p>

        <Link
          href={book.url}
          target="_blank"
          className="
mt-5
inline-block
rounded-full
bg-[#C9A227]
px-5
py-2
text-sm
text-black
"
        >
          مشاهده کتاب ↗
        </Link>
      </div>
    </div>
  );
}
