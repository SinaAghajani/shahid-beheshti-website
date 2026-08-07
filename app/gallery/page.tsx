import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="py-20">
      <section
        className="
mb-12
text-center
"
      >
        <h1
          className="
text-4xl
font-bold
text-[#0F4C3A]
dark:text-green-400
"
        >
          تصاویر شهید بهشتی
        </h1>

        <p
          className="
mt-4
text-gray-600
dark:text-gray-300
"
        >
          نگاهی به تصاویر تاریخی و ماندگار
        </p>
      </section>

      <GalleryGrid />
    </main>
  );
}
