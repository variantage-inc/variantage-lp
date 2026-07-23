"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
};

export type ImageLightboxProps = {
  /** Images available for navigation. */
  images: LightboxImage[];
  /** Index of the image to show first. Defaults to 0. */
  initialIndex?: number;
  /** Whether the lightbox is visible. */
  isOpen: boolean;
  /** Called when the user requests to close the lightbox. */
  onClose: () => void;
};

const TRANSITION_MS = 200;

export default function ImageLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Mount/unmount is delayed relative to `isOpen` so the fade transition
  // can play in both directions instead of the content disappearing instantly.
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setShouldRender(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen || !shouldRender) return;
    const timeout = setTimeout(() => setShouldRender(false), TRANSITION_MS);
    return () => clearTimeout(timeout);
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldRender]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrevious();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrevious]);

  if (!shouldRender || images.length === 0) return null;

  const currentImage = images[currentIndex];

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-200 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
      >
        <X className="h-6 w-6" />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:left-5"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
      )}

      <div className="relative h-[80vh] w-[90vw] max-w-5xl">
        <Image
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:right-5"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-[family-name:var(--font-poppins)] text-sm text-white/80">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
