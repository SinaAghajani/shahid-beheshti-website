"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

interface ImageItem {
  id: number;
  title: string;
  image: string;
}

interface Props {
  images: ImageItem[];
  current: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function ImageLightbox({
  images,
  current,
  onClose,
  onChange,
}: Props) {
  const item = images[current];

  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onChange(current === images.length - 1 ? 0 : current + 1);
      }

      if (event.key === "ArrowLeft") {
        onChange(current === 0 ? images.length - 1 : current - 1);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [current, images.length, onChange, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;

        const distance = touchStart - e.changedTouches[0].clientX;

        if (distance > 50)
          onChange(current === images.length - 1 ? 0 : current + 1);

        if (distance < -50)
          onChange(current === 0 ? images.length - 1 : current - 1);

        setTouchStart(null);
      }}
      className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/80
p-5
"
    >
      <button
        onClick={onClose}
        className="
absolute
right-5
top-5
rounded-full
bg-white/10
p-3
text-white
"
      >
        <X />
      </button>

      <a
        href={item.image}
        download
        className="
absolute
right-20
top-5
rounded-full
bg-white/10
p-3
text-white
"
      >
        <Download />
      </a>

      <button
        onClick={() =>
          onChange(current === 0 ? images.length - 1 : current - 1)
        }
        className="
absolute
left-5
rounded-full
bg-white/10
p-3
text-white
"
      >
        <ChevronLeft />
      </button>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="
relative
h-[80vh]
w-full
max-w-5xl
"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
object-contain
"
        />

        <p
          className="
absolute
bottom-8
w-full
text-center
text-lg
text-white
"
        >
          {item.title}
        </p>
      </motion.div>

      <button
        onClick={() =>
          onChange(current === images.length - 1 ? 0 : current + 1)
        }
        className="
absolute
right-5
rounded-full
bg-white/10
p-3
text-white
"
      >
        <ChevronRight />
      </button>
    </motion.div>
  );
}
