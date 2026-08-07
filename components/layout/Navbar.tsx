"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import MobileMenu from "./MobileMenu";

const links = [
  {
    title: "خانه",
    href: "/",
  },
  {
    title: "درباره شهید بهشتی",
    href: "/about",
  },
  {
    title: "کتاب‌ها",
    href: "/books",
  },
  {
    title: "تصاویر",
    href: "/gallery",
  },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="
      fixed
      top-5
      left-0
      right-0
      z-50
      "
    >
      <nav
        className="
        mx-auto
        flex
        max-w-6xl
        items-center
        justify-between
        rounded-[2rem]
        border
        border-white/20
        bg-[#0F4C3A]/90
        px-6
        py-3
        shadow-2xl
        backdrop-blur-xl
        transition-all
        duration-300
        dark:bg-gray-900/90
        "
      >
        <Link
          href="/"
          className="
          flex
          items-center
          gap-3
          text-white
          "
        >
          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#C9A227]
            font-bold
            text-[#0F4C3A]
            "
          ></div>

          <span
            className="
            font-bold
            "
          >
            شهید بهشتی
          </span>
        </Link>

        <div
          className="
          hidden
          items-center
          gap-8
          md:flex
          "
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
              text-sm
              text-white
              transition
              hover:text-[#C9A227]
              "
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
            rounded-full
            bg-white/10
            p-2
            text-white
            transition
            hover:bg-[#C9A227]
            hover:text-black
            "
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
