"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ImageLightbox, { type LightboxImage } from "@/components/ui/ImageLightbox";

const CHECKLIST_ITEMS = [
  "Stand Out From Competitors",
  "Build Trust & Credibility",
  "Attract More Local Customers",
];

const GALLERY_IMAGES: LightboxImage[] = [
  { src: "/images/11.webp", alt: "Coffee shop branding kit mockup" },
  { src: "/images/22.webp", alt: "Beauty and health branding kit mockup" },
  { src: "/images/33.webp", alt: "Branding kit mockup" },
  { src: "/images/44.webp", alt: "Branding kit mockup" },
  { src: "/images/55.webp", alt: "Branding kit mockup" },
];

const GALLERY_WIDTH = 726;
const AUTOPLAY_INTERVAL_MS = 4500;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Autoplay runs continuously for the lifetime of the component: it never
  // pauses on hover and is never cleared by dot clicks or lightbox opens.
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  function goToSlide(index: number) {
    setActiveIndex(index);
  }

  function openLightbox() {
    setIsLightboxOpen(true);
  }

  const activeImage = GALLERY_IMAGES[activeIndex];

  return (
    <section id="hero" className="relative w-full bg-[#E2F4FF]">
      <div className="relative mx-auto h-[959px] max-w-[1440px]">
        <p className="absolute top-[25px] left-[13px] font-[family-name:var(--font-poppins)] text-[24px] leading-[73px] font-normal tracking-[-0.72px] text-[#C01F25] uppercase">
          For Small Businesses In Canada
        </p>

        <h1 className="absolute top-[98px] left-[11px] w-[1052px] font-[family-name:var(--font-poppins)] text-[64.883px] leading-[75px] font-bold tracking-[-1.9465px] text-[#142539]">
          Build a Brand That Customers Remember & Trust
        </h1>

        <p className="absolute top-[295px] left-[13px] w-[654px] font-[family-name:var(--font-poppins)] text-[30.411px] leading-[43px] font-normal tracking-[-0.9123px] text-[#142539]">
          Professional branding kits for small businesses across Canada. Build
          credibility, attract customers, and stand out from competitors.
        </p>

        <ul className="absolute top-[493px] left-[15px] flex w-[496px] flex-col">
          {CHECKLIST_ITEMS.map((item) => (
            <li key={item} className="flex h-[63px] items-center gap-[26px]">
              <Image
                src="/images/tick-green.png"
                alt=""
                width={33}
                height={33}
                className="size-[33px]"
              />
              <span className="font-[family-name:var(--font-poppins)] text-[25.411px] font-medium tracking-[-0.7623px] text-[#171414]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="absolute top-[771px] left-[18px] flex h-[88px] items-center gap-[19px]">
          <a
            href="#lead-form"
            className="flex h-[88px] w-[347px] items-center justify-center rounded-[8px] bg-[#1C304B] px-[31px] py-[12px] transition-colors hover:bg-[#142539]"
          >
            <span className="font-[family-name:var(--font-poppins)] text-[20px] font-bold text-white">
              GET MY BRANDING KIT
            </span>
          </a>

          <Image
            src="/images/google-five-rating.png"
            alt="Google Rating 5.0 stars"
            width={275}
            height={88}
            className="rounded-[4.971px] object-cover"
          />
        </div>

        <div className="absolute top-[273px] left-[704px] h-[480.068px] w-[726px] overflow-hidden rounded-[18.15px]">
          <button
            type="button"
            onClick={openLightbox}
            aria-label={`View ${activeImage.alt} full size`}
            className="relative block size-full cursor-zoom-in"
          >
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{
                width: GALLERY_IMAGES.length * GALLERY_WIDTH,
                transform: `translateX(-${activeIndex * GALLERY_WIDTH}px)`,
              }}
            >
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={image.src}
                  className="relative h-full w-[726px] shrink-0"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="726px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </button>

          <div className="absolute bottom-[15px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[10px]">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1} of ${GALLERY_IMAGES.length}`}
                aria-current={index === activeIndex}
                className={`size-[10px] rounded-full shadow-[0_0_2px_rgba(0,0,0,0.5)] transition-colors ${
                  index === activeIndex
                    ? "bg-[#C01F25]"
                    : "bg-white/80 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        images={GALLERY_IMAGES}
        initialIndex={activeIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
}
