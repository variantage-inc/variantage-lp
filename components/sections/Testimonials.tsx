"use client";

import { useState } from "react";
import { Pontano_Sans } from "next/font/google";
import { Star } from "lucide-react";

const pontanoSans = Pontano_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "John D.",
    role: "Marketing Manager",
    quote:
      "Our new branding helped us attract more premium clients. The team made the whole process simple from start to finish.",
  },
  {
    name: "Sarah L.",
    role: "Business Owner",
    quote:
      "Working with this team completely changed how customers find us online. Bookings have gone up every month since launch.",
  },
  {
    name: "Michael R.",
    role: "Operations Manager",
    quote:
      "Our new branding helped us attract more premium clients. Our new branding helped us attract more customers overall.",
  },
  {
    name: "Emily S.",
    role: "Clinic Director",
    quote:
      "The website and marketing support gave our clinic a professional presence that patients trust from the first visit.",
  },
  {
    name: "David K.",
    role: "Restaurant Owner",
    quote:
      "Our online reviews and reservations improved right away. It's been a great partnership for growing our restaurant.",
  },
];

const CARD_WIDTH = 416.65;
const CARD_GAP = 45;
const VISIBLE_CARDS = 3;
const PAGE_COUNT = TESTIMONIALS.length - VISIBLE_CARDS + 1;
const CAROUSEL_WIDTH = CARD_WIDTH * VISIBLE_CARDS + CARD_GAP * (VISIBLE_CARDS - 1);

function TestimonialCard({ name, role, quote }: Testimonial) {
  return (
    <div className="relative h-[282px] w-[416.65px] shrink-0 overflow-hidden rounded-[15px] bg-white shadow-[0px_0px_22px_-9px_rgba(0,0,0,0.25)]">
      <span
        className={`${pontanoSans.className} absolute top-0 left-[21px] text-[104px] leading-none tracking-[-3.12px] text-[#DAB234]`}
      >
        &ldquo;
      </span>

      <div className="absolute top-[43px] left-[53px] flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="flex h-[25px] w-[25px] items-center justify-center"
          >
            <Star className="h-[20px] w-[20px] fill-[#DAB234] text-[#DAB234]" />
          </span>
        ))}
      </div>

      <p className="absolute top-[88px] left-[54px] w-[322px] font-[family-name:var(--font-poppins)] text-[14px] leading-normal tracking-[-0.42px] text-black">
        {quote}
      </p>

      <div className="absolute top-[188px] left-[54px]">
        <p className="font-[family-name:var(--font-poppins)] text-[18px] leading-normal font-bold tracking-[-0.54px] text-black">
          {name}
        </p>
        <p className="font-[family-name:var(--font-poppins)] text-[14px] leading-normal tracking-[-0.42px] text-black">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="w-full bg-[#ECF8FA]">
      <div className="mx-auto max-w-[1440px] px-10 pt-[100px] pb-[100px]">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-[39px] leading-[58px] font-bold tracking-[-1.17px] text-[#142539]">
          Why Local Businesses Rate Us 5 Stars
        </h2>
        <p className="mt-[14px] text-center font-[family-name:var(--font-poppins)] text-[17px] leading-normal tracking-[-0.51px] text-black">
          Don&apos;t just take our word for it — here&apos;s what real clients
          say about working with us.
        </p>

        <div
          className="mt-[48px] mx-auto overflow-hidden"
          style={{ width: `${CAROUSEL_WIDTH}px` }}
        >
          <div
            className="flex gap-[45px] transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (CARD_WIDTH + CARD_GAP)}px)`,
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-[54px] flex items-center justify-center gap-[13px]">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonials ${i + 1} to ${i + VISIBLE_CARDS}`}
              aria-current={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              className={`size-[14px] rounded-full border-2 border-[#142539] transition-colors ${
                i === activeIndex ? "bg-[#142539]" : "bg-white"
              }`}
            />
          ))}
        </div>

        <div className="mt-[36px] flex justify-center">
          <a
            href="https://share.google/1XPj66iUVSEErvlp5"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-[6px] font-[family-name:var(--font-poppins)] text-[15px] font-medium tracking-[-0.3px] text-[#142539] transition-colors hover:text-[#C11F24]"
          >
            Read more reviews on Google
            <span className="transition-transform group-hover:translate-x-[3px]">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
