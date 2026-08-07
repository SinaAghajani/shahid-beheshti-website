import Link from "next/link";
import { BookOpen, Images, UserRound } from "lucide-react";

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

export default function Footer() {
  return (
    <footer
      className="
mt-20
rounded-t-[3rem]
bg-[#0F4C3A]
px-6
pb-8
pt-16
text-white

dark:bg-gray-950
"
    >
      <div
        className="
mx-auto
grid
max-w-6xl
gap-12
md:grid-cols-3
"
      >
        {/* معرفی */}

        <div>
          <h2
            className="
text-2xl
font-bold
text-[#C9A227]
"
          >
            شهید آیت‌الله دکتر بهشتی
          </h2>

          <p
            className="
mt-5
leading-8
text-gray-200
"
          >
            اندیشمند، فقیه و متفکری که دانش، اخلاق و مسئولیت اجتماعی را در مسیر
            ساخت جامعه‌ای آگاه دنبال کرد.
          </p>
        </div>

        {/* لینک ها */}

        <div>
          <h3
            className="
text-xl
font-bold
"
          >
            دسترسی سریع
          </h3>

          <ul
            className="
mt-5
space-y-4
"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
text-gray-200
transition
hover:text-[#C9A227]
"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* بخش ارزش ها */}

        <div>
          <h3
            className="
text-xl
font-bold
"
          >
            بخش‌های سایت
          </h3>

          <div
            className="
mt-5
space-y-4
"
          >
            <Link
              href="/books"
              className="
flex
items-center
gap-3
text-gray-200
hover:text-[#C9A227]
"
            >
              <BookOpen size={20} />
              آثار و کتاب‌ها
            </Link>

            <Link
              href="/gallery"
              className="
flex
items-center
gap-3
text-gray-200
hover:text-[#C9A227]
"
            >
              <Images size={20} />
              آرشیو تصاویر
            </Link>

            <Link
              href="/about"
              className="
flex
items-center
gap-3
text-gray-200
hover:text-[#C9A227]
"
            >
              <UserRound size={20} />
              زندگی‌نامه
            </Link>
          </div>
        </div>
      </div>

      <div
        className="
mx-auto
mt-12
max-w-6xl
border-t
border-white/20
pt-6
text-center
text-sm
text-gray-300
"
      >
        © ۱۴۰۵ تمامی حقوق محفوظ است
      </div>
    </footer>
  );
}
