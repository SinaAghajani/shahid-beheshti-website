import Container from "@/components/layout/Container";
import { aboutData } from "@/data/about";
import { Brain, Scale, GraduationCap, Heart } from "lucide-react";

const icons = [Brain, Scale, GraduationCap, Heart];

export default function Values() {
  return (
    <section
      className="
py-20
bg-[#F8FAF5]
dark:bg-gray-950
"
    >
      <Container>
        <h2
          className="
text-center
text-3xl
font-bold
text-[#0F4C3A]
dark:text-green-400
"
        >
          ویژگی‌های برجسته و اندیشه‌ها
        </h2>

        <div
          className="
mt-12
grid
gap-8
sm:grid-cols-2
lg:grid-cols-4
"
        >
          {aboutData.values.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="
rounded-2xl
bg-white
p-6
text-center
shadow-sm
transition
hover:-translate-y-2
hover:shadow-xl
dark:bg-gray-900
"
              >
                <div
                  className="
mx-auto
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-[#0F4C3A]
text-white
"
                >
                  <Icon size={30} />
                </div>

                <h3
                  className="
mt-5
font-bold
text-lg
"
                >
                  {item.title}
                </h3>

                <p
                  className="
mt-3
text-sm
leading-7
text-gray-600
dark:text-gray-300
"
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
