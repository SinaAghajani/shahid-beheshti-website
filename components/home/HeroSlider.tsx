"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { motion, useScroll, useTransform } from "framer-motion";

import { heroSlides } from "@/data/hero";

export default function HeroSlider() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 500], [0, 120]);

  const textY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section
      className="
      px-4
      pt-28
      "
    >
      <Carousel
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselPrevious />

        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="h-[650px]">
              <div
                className="
  relative
  h-full
  w-full
  overflow-hidden
  rounded-[3rem]
  "
              >
                {/* Image */}

                <motion.div
                  style={{
                    y: imageY,
                  }}
                  className="
                    absolute
                    inset-0
                    "
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    priority={slide.id === 1}
                    className="
                      object-cover
                      "
                  />
                </motion.div>

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/80
                    via-black/50
                    to-transparent
                    "
                />

                {/* Text */}

                <motion.div
                  style={{
                    y: textY,
                  }}
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    "
                >
                  <div
                    className="
                      max-w-3xl
                      px-8
                      text-white
                      md:px-16
                      "
                  >
                    <h1
                      className="
                        text-4xl
                        font-bold
                        leading-relaxed
                        md:text-6xl
                        "
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="
                        mt-6
                        text-lg
                        leading-9
                        text-gray-200
                        "
                    >
                      {slide.description}
                    </p>

                    <Link
                      href={slide.link}
                      className="
                        mt-8
                        inline-block
                        rounded-full
                        bg-[#C9A227]
                        px-8
                        py-3
                        font-bold
                        text-black
                        transition
                        hover:scale-105
                        "
                    >
                      {slide.button ?? "مشاهده بیشتر"}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    </section>
  );
}
