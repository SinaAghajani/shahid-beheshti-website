import Container from "@/components/layout/Container";
import BookCard from "@/components/books/BookCard";
import { books } from "@/data/books";

export default function BooksPage() {
  return (
    <main className="py-20">
      <Container>
        <section className="text-center">
          <h1
            className="
text-4xl
font-bold
text-[#0F4C3A]
dark:text-green-400
"
          >
            کتاب‌های شهید بهشتی
          </h1>

          <p
            className="
mx-auto
mt-5
max-w-2xl
leading-8
text-gray-600
dark:text-gray-300
"
          >
            مجموعه‌ای از آثار، نوشته‌ها و اندیشه‌های شهید آیت‌الله دکتر بهشتی
          </p>
        </section>

        <section
          className="
mt-14
grid
gap-8
sm:grid-cols-2
lg:grid-cols-4
"
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </section>
      </Container>
    </main>
  );
}
