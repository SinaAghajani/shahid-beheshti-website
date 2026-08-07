"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import { quotes } from "@/data/quotes";

export default function QuoteSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const nextQuote = () => {
    setIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  const previousQuote = () => {
    setIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  return (
    <section
      className="
      py-16
      md:py-24
      bg-[#0F4C3A]
      text-white
      "
    >
      <Container>
        <div
          className="
          mx-auto
          max-w-4xl
          text-center
          "
        >
          <div
            className="
            text-5xl
            text-[#C9A227]
            font-serif
            "
          >
            ❝
          </div>

          <div
            key={index}
            className="
            transition-opacity
            duration-700
            "
          >
            <p
              className="
              mt-6
              px-4
              text-xl
              leading-10
              md:text-3xl
              "
            >
              {quotes[index].text}
            </p>

            <div
              className="
              mx-auto
              mt-8
              h-px
              w-full
              bg-[#C9A227]/50
              "
            />

            <p
              className="
              mt-6
              text-gray-200
              "
            >
              {quotes[index].author}
            </p>
          </div>

          <div
            className="
            mt-10
            flex
            items-center
            justify-center
            gap-5
            "
          >
            <button
              onClick={previousQuote}
              className="
              rounded-full
              bg-white/10
              px-5
              py-2
              transition
              hover:bg-white/20
              "
            >
              ←
            </button>

            <span
              className="
              rounded-full
              bg-white/10
              px-5
              py-2
              text-sm
              "
            >
              {index + 1} / {quotes.length}
            </span>

            <button
              onClick={nextQuote}
              className="
              rounded-full
              bg-white/10
              px-5
              py-2
              transition
              hover:bg-white/20
              "
            >
              →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
