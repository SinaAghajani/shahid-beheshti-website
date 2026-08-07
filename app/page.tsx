import Biography from "@/components/home/Biography";
import BiographySection from "@/components/home/BiographySection";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import HeroSlider from "@/components/home/HeroSlider";
import QuoteSection from "@/components/home/QuoteSection";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <BiographySection />

      <Biography />

      <QuoteSection />

      <FeaturedBooks />
    </main>
  );
}
