"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import { homeBiography } from "@/data/about";

export default function BiographySection() {
  return (
    <section
      className="
py-24
"
    >
      <Container>
        <div
          className="
grid
items-center
gap-12
md:grid-cols-2
"
        >
          {/* Image */}

          <div
            className="
relative
mx-auto
h-[420px]
w-[320px]
overflow-hidden
rounded-[3rem]
shadow-xl
"
          >
            <Image
              src={homeBiography.image}
              alt={homeBiography.title}
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
              {homeBiography.title}
            </h2>

            <p
              className="
mt-6
leading-9
text-gray-600
dark:text-gray-300
"
            >
              {homeBiography.description}
            </p>

            <div
              className="
mt-8
grid
grid-cols-3
gap-4
"
            >
              {homeBiography.stats.map((item) => (
                <div
                  key={item.label}
                  className="
rounded-2xl
bg-[#F8FAF5]
p-4
text-center
dark:bg-gray-900
"
                >
                  <div
                    className="
text-xl
font-bold
text-[#C9A227]
"
                  >
                    {item.value}
                  </div>

                  <p
                    className="
mt-2
text-sm
"
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
