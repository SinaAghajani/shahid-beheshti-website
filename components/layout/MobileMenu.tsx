"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

const menuItems = [
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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="
        rounded-full
        p-2
        text-white
        bg-white/10
        "
      >
        <Menu size={26} />
      </button>

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            "
        >
          {/* Overlay */}

          <div
            onClick={() => setOpen(false)}
            className="
              absolute
              inset-0
              bg-black/50
              "
          />

          {/* Menu */}

          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-72
              bg-[#F8F5EC]
              p-6
              shadow-2xl
              dark:bg-gray-900
              "
          >
            <div
              className="
                flex
                items-center
                justify-between
                "
            >
              <h2
                className="
                  font-bold
                  text-[#0F4C3A]
                  dark:text-white
                  "
              >
                شهید بهشتی
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="
                  rounded-full
                  p-2
                  hover:bg-black/10
                  "
              >
                <X size={24} />
              </button>
            </div>

            <nav
              className="
                mt-10
                flex
                flex-col
                gap-4
                "
            >
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                      rounded-xl
                      px-4
                      py-3
                      text-gray-700
                      hover:bg-[#C9A227]/20
                      dark:text-gray-200
                      "
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
