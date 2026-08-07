import Container from "@/components/layout/Container";
import { aboutData } from "@/data/about";
import { BookOpen, Users, Lightbulb, Building2 } from "lucide-react";

const icons = [BookOpen, Lightbulb, Users, Building2];

export default function Activities() {
  return (
    <section
      className="
py-20
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
          فعالیت‌های فرهنگی و اجتماعی
        </h2>

        <div
          className="
mt-12
grid
gap-8
md:grid-cols-2
"
        >
          {aboutData.activities.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="
group
rounded-2xl
border
p-8
transition
hover:-translate-y-2
hover:shadow-xl
dark:bg-gray-900
"
              >
                <div
                  className="
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-[#0F4C3A]
text-white
"
                >
                  <Icon size={28} />
                </div>

                <h3
                  className="
mt-5
text-xl
font-bold
"
                >
                  {item.title}
                </h3>

                <p
                  className="
mt-3
leading-8
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
