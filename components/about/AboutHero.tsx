"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import Container from "@/components/layout/Container";

export default function AboutHero() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 500], [0, 100]);

  const textY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section
      className="
      relative
      h-[600px]
      overflow-hidden
      rounded-b-[3rem]
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
          src="/images/about/beheshti-about.jpg"
          alt="شهید آیت الله دکتر بهشتی"
          fill
          sizes="100vw"
          priority
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

      {/* Content */}

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
        <Container>
          <div
            className="
            max-w-3xl
            text-white
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
              شهید آیت‌الله دکتر بهشتی
            </h1>

            <p
              className="
              mt-6
              max-w-2xl
              text-lg
              leading-9
              text-gray-200
              md:text-xl
              "
            >
              اندیشمند، فقیه، نویسنده و معمار اندیشه‌های فرهنگی و اجتماعی انقلاب
              اسلامی
            </p>

            <div
              className="
              mt-8
              h-1
              w-32
              rounded-full
              bg-[#C9A227]
              "
            />
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
