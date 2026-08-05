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
  const slideWidthPercent = 100 / GALLERY_IMAGES.length;

  return (
    <section id="hero" className="relative w-full bg-[#E2F4FF]">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-14 sm:gap-10 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 xl:block xl:h-[959px] xl:gap-0 xl:px-0 xl:py-0">
        <p className="order-1 font-[family-name:var(--font-poppins)] text-sm leading-normal font-normal tracking-[-0.3px] text-[#C01F25] uppercase sm:text-base md:text-lg xl:absolute xl:top-[25px] xl:left-[13px] xl:order-none xl:text-[24px] xl:leading-[73px] xl:tracking-[-0.72px]">
          For Small Businesses In Canada
        </p>

        <h1 className="order-2 w-full font-[family-name:var(--font-poppins)] text-4xl leading-tight font-bold tracking-tight text-[#142539] sm:text-5xl md:text-6xl lg:text-[56px] xl:absolute xl:top-[98px] xl:left-[11px] xl:order-none xl:w-[1052px] xl:text-[64.883px] xl:leading-[75px] xl:tracking-[-1.9465px]">
          Build a Brand That Customers Remember & Trust
        </h1>

        <p className="order-3 w-full font-[family-name:var(--font-poppins)] text-lg leading-normal font-normal tracking-normal text-[#142539] sm:text-xl md:text-2xl lg:text-[26px] xl:absolute xl:top-[295px] xl:left-[13px] xl:order-none xl:w-[654px] xl:text-[30.411px] xl:leading-[43px] xl:tracking-[-0.9123px]">
          Professional branding kits for small businesses across Canada. Build
          credibility, attract customers, and stand out from competitors.
        </p>

        <ul className="order-5 flex w-full flex-col gap-1 xl:absolute xl:top-[493px] xl:left-[15px] xl:order-none xl:w-[496px] xl:gap-0">
          {CHECKLIST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-3 py-2 sm:gap-4 xl:h-[63px] xl:gap-[26px] xl:py-0">
              <Image
                src="/images/tick-green.png"
                alt=""
                width={33}
                height={33}
                className="size-[33px] shrink-0"
              />
              <span className="font-[family-name:var(--font-poppins)] text-base font-medium tracking-normal text-[#171414] sm:text-lg md:text-xl xl:text-[25.411px] xl:tracking-[-0.7623px]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="order-6 flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center xl:absolute xl:top-[771px] xl:left-[18px] xl:order-none xl:h-[88px] xl:w-auto xl:flex-row xl:items-center xl:gap-[19px]">
          <a
            href="#lead-form"
            className="flex w-full items-center justify-center rounded-[8px] bg-[#1C304B] px-6 py-4 transition-colors hover:bg-[#142539] sm:w-auto sm:px-8 xl:h-[88px] xl:w-[347px] xl:px-[31px] xl:py-[12px]"
          >
            <span className="font-[family-name:var(--font-poppins)] text-base font-bold text-white sm:text-lg xl:text-[20px]">
              GET MY BRANDING KIT
            </span>
          </a>

          <Image
            src="/images/google-five-rating.png"
            alt="Google Rating 5.0 stars"
            width={275}
            height={88}
            className="h-auto w-auto max-w-[275px] rounded-[4.971px] object-cover"
          />
        </div>

        <div className="order-4 relative aspect-[726/480] w-full overflow-hidden rounded-[18.15px] xl:absolute xl:top-[273px] xl:left-[704px] xl:order-none xl:aspect-auto xl:h-[480.068px] xl:w-[726px]">
          <button
            type="button"
            onClick={openLightbox}
            aria-label={`View ${activeImage.alt} full size`}
            className="relative block size-full cursor-zoom-in"
          >
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{
                width: `${GALLERY_IMAGES.length * 100}%`,
                transform: `translateX(-${activeIndex * slideWidthPercent}%)`,
              }}
            >
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={image.src}
                  className="relative h-full shrink-0"
                  style={{ width: `${slideWidthPercent}%` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1280px) 726px, 100vw"
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
