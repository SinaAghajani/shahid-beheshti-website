import Container from "@/components/layout/Container";

export default function AboutQuote() {
  return (
    <section
      className="
py-24
bg-[#0F4C3A]
text-white
"
    >
      <Container>
        <div
          className="
mx-auto
max-w-4xl
text-center
"
        >
          <div
            className="
text-6xl
text-[#C9A227]
"
          >
            ❝
          </div>

          <p
            className="
mt-5
text-2xl
leading-loose
md:text-3xl
"
          >
            ما باید جامعه‌ای بسازیم که در آن انسان، آگاه، مسئول و آزاد رشد کند.
          </p>

          <div
            className="
mt-8
text-gray-200
"
          >
            شهید آیت‌الله دکتر بهشتی
          </div>
        </div>
      </Container>
    </section>
  );
}
