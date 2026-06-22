"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGroup {
  title: string;
  images: GalleryImage[];
}

const groups: GalleryGroup[] = [
  {
    title: "Academics & Classroom",
    images: [
      { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Students studying" },
      { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Students in classroom" },
      { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Science lab" },
    ],
  },
  {
    title: "Campus & Infrastructure",
    images: [
      { src: "https://images.unsplash.com/photo-1762972921985-d77aaeb4630a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "School building" },
      { src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Modern library interior" },
    ],
  },
  {
    title: "Sports & Athletics",
    images: [
      { src: "https://images.unsplash.com/photo-1662065932069-f285d5dc7df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Basketball game" },
      { src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Sports field" },
    ],
  },
  {
    title: "Library & Resources",
    images: [
      { src: "https://images.unsplash.com/photo-1763811938053-2e88eba977a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Modern library" },
    ],
  },
  {
    title: "Cultural Events",
    images: [
      { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Cultural event" },
    ],
  },
];

export default function GalleryGrid() {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const selectedGroup = activeGroup !== null ? groups[activeGroup] : null;

  const openAlbum = (index: number) => {
    setActiveGroup(index);
    setCurrentSlide(0);
  };

  const closeModal = () => {
    setActiveGroup(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (selectedGroup) {
      setCurrentSlide((prev) => (prev + 1) % selectedGroup.images.length);
    }
  };

  const prevSlide = () => {
    if (selectedGroup) {
      setCurrentSlide(
        (prev) => (prev - 1 + selectedGroup.images.length) % selectedGroup.images.length
      );
    }
  };

  return (
    <>
      {/* Album Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {groups.map((group, groupIdx) => (
          <div
            key={group.title}
            onClick={() => openAlbum(groupIdx)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-ink/50 mb-4">
              <Image
                src={group.images[0].src}
                alt={group.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
              {/* Camera icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-display text-cream text-lg sm:text-xl mb-1">
              {group.title}
            </h3>
            <p className="font-body text-stone text-sm">
              {group.images.length} {group.images.length === 1 ? "image" : "images"}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedGroup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-cream hover:text-terracotta transition-colors duration-300 z-20"
              aria-label="Close gallery"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Album Title */}
            <div className="text-center mb-6">
              <h3 className="font-display text-cream text-xl sm:text-2xl">
                {selectedGroup.title}
              </h3>
            </div>

            {/* Image Container */}
            <div className="relative aspect-video bg-ink overflow-hidden">
              {selectedGroup.images.map((image, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === currentSlide
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}

              {/* Prev Button */}
              {selectedGroup.images.length > 1 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 flex items-center justify-center bg-ink/40 hover:bg-ink/60 transition-colors duration-300 border-r border-sand/20"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5 text-cream"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {selectedGroup.images.length > 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 flex items-center justify-center bg-ink/40 hover:bg-ink/60 transition-colors duration-300 border-l border-sand/20"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5 text-cream"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Slide Counter + Dot Pagination */}
            <div className="flex items-center justify-between mt-6">
              <p className="font-body text-stone text-sm">
                {currentSlide + 1} / {selectedGroup.images.length}
              </p>

              {selectedGroup.images.length > 1 && (
                <div className="flex gap-2">
                  {selectedGroup.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        idx === currentSlide ? "bg-terracotta" : "bg-sand"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              <div className="w-16" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
