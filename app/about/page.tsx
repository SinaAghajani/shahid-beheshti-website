import AboutHero from "@/components/about/AboutHero";
import AboutQuote from "@/components/about/AboutQuote";
import Activities from "@/components/about/Activities";
import Education from "@/components/about/Education";
import Timeline from "@/components/about/Timeline";
import Values from "@/components/about/Values";
import Works from "@/components/about/Works";
import Container from "@/components/layout/Container";
import { aboutData } from "@/data/about";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <section className="py-20">
        <Container>
          <h2
            className="
text-3xl
font-bold
text-[#0F4C3A]
dark:text-green-400
"
          >
            زندگی‌نامه
          </h2>

          <p
            className="
mt-6
leading-9
text-gray-700
dark:text-gray-300
"
          >
            {aboutData.intro}
          </p>
        </Container>
      </section>

      <Timeline />

      <Education />

      <Activities />

      <Values />
      <AboutQuote />

      <Works />
    </main>
  );
}
