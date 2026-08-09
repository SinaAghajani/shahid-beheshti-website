"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <header
      className="
        fixed
        top-5
        left-0
        right-0
        z-50
        px-4
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
          px-4
          py-3
          shadow-2xl
          backdrop-blur-xl
          transition-all
          duration-300
          sm:px-6
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
              relative
              h-10
              w-10
              shrink-0
              overflow-hidden
              rounded-full
              bg-[#C9A227]
            "
          ></div>

          <span
            className="
              hidden
              font-bold
              sm:block
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
                duration-200
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
            gap-2
          "
        >
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted
                ? theme === "dark"
                  ? "فعال کردن حالت روشن"
                  : "فعال کردن حالت تاریک"
                : "تغییر حالت نمایش"
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition
              duration-300
              hover:bg-[#C9A227]
              hover:text-black
            "
          >
            {!mounted ? (
              <Moon size={20} />
            ) : theme === "dark" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
