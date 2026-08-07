import Container from "@/components/layout/Container";
import { aboutData } from "@/data/about";

export default function Timeline() {
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
          مسیر زندگی
        </h2>

        <div
          className="
mt-12
space-y-8
"
        >
          {aboutData.timeline.map((item) => (
            <div
              key={item.year}
              className="
rounded-2xl
border
p-6
dark:bg-gray-900
"
            >
              <div
                className="
text-[#C9A227]
font-bold
"
              >
                {item.year}
              </div>

              <h3
                className="
mt-2
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
          ))}
        </div>
      </Container>
    </section>
  );
}
