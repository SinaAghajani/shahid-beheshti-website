"use client";

import { useState } from "react";

import Container from "@/components/layout/Container";
import ImageCard from "./ImageCard";
import ImageLightbox from "./ImageLightbox";

import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Container>
      <div
        className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
"
      >
        {galleryImages.map((item, index) => (
          <ImageCard
            key={item.id}
            image={item.image}
            title={item.title}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>

      {selected !== null && (
        <ImageLightbox
          images={galleryImages}
          current={selected}
          onClose={() => setSelected(null)}
          onChange={(index) => setSelected(index)}
        />
      )}
    </Container>
  );
}
