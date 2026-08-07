import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { biography } from "@/data/biography";

export default function Biography() {
  return (
    <section
      className="
py-20
"
    >
      <Container>
        <div
          className="
grid
gap-10
md:grid-cols-2
items-center
"
        >
          {/* Image */}

          <div
            className="
relative
h-[450px]
overflow-hidden
rounded-2xl
"
          >
            <Image
              src={biography.image}
              alt="شهید بهشتی"
              fill
              className="
object-cover
"
            />
          </div>

          {/* Content */}

          <div>
            <h2
              className="
text-3xl
font-bold
text-[#0F4C3A]
dark:text-green-400
"
            >
              درباره شهید بهشتی
            </h2>

            <p
              className="
mt-6
leading-9
text-gray-700
dark:text-gray-300
"
            >
              {biography.short}
            </p>

            <ul
              className="
mt-6
space-y-3
"
            >
              {biography.features.map((item) => (
                <li
                  key={item}
                  className="
flex
items-center
gap-2
text-gray-600
dark:text-gray-400
"
                >
                  <span
                    className="
h-2
w-2
rounded-full
bg-[#C9A227]
"
                  />

                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="
mt-8
inline-block
rounded-full
bg-[#0F4C3A]
px-8
py-3
text-white
transition
hover:bg-[#C9A227]
hover:text-black
"
            >
              مطالعه زندگی‌نامه
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
