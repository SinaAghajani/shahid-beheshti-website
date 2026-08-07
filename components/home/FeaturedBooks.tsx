import Container from "@/components/layout/Container";
import { books } from "@/data/books";
import BookCard from "@/components/books/BookCard";
import Link from "next/link";

export default function FeaturedBooks() {
  const featuredBooks = books.slice(0, 4);

  return (
    <section
      className="
      py-24
      "
    >
      <Container>
        <div
          className="
          text-center
          "
        >
          <h2
            className="
            text-3xl
            font-bold
            text-[#0F4C3A]
            dark:text-green-400
            "
          >
            کتاب‌های شهید بهشتی
          </h2>

          <p
            className="
            mt-3
            text-gray-600
            dark:text-gray-300
            "
          >
            برخی از آثار و نوشته‌های ایشان
          </p>
        </div>

        <div
          className="
          mt-10
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div
          className="
          mt-12
          flex
          justify-center
          "
        >
          <Link
            href="/books"
            className="
            rounded-full
            bg-[#0F4C3A]
            px-8
            py-3
            font-bold
            text-white
            transition
            hover:bg-[#C9A227]
            hover:text-black
            "
          >
            کتاب‌های بیشتر
          </Link>
        </div>
      </Container>
    </section>
  );
}
