import Container from "@/components/layout/Container";
import { aboutData } from "@/data/about";
import Link from "next/link";

export default function Works() {
  return (
    <section
      className="
py-20
"
    >
      <Container>
        <div
          className="
flex
items-center
justify-between
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
            آثار و کتاب‌ها
          </h2>

          <Link
            href="/books"
            className="
rounded-full
bg-[#C9A227]
px-6
py-3
text-sm
text-black
"
          >
            مشاهده همه کتاب‌ها
          </Link>
        </div>

        <div
          className="
mt-10
grid
gap-6
md:grid-cols-3
"
        >
          {aboutData.works.map((item) => (
            <div
              key={item.title}
              className="
rounded-2xl
border
p-6
transition
hover:-translate-y-2
hover:shadow-lg
dark:bg-gray-900
"
            >
              <h3
                className="
text-xl
font-bold
"
              >
                {item.title}
              </h3>

              <p
                className="
mt-3
leading-7
text-gray-600
dark:text-gray-300
"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
