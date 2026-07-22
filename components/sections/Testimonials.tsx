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
const CARD_GAP = 44;
const VISIBLE_CARDS = 3;
const PAGE_COUNT = TESTIMONIALS.length - VISIBLE_CARDS + 1;

function TestimonialCard({ name, role, quote }: Testimonial) {
  return (
    <div
      className="relative h-[282px] w-[416.65px] shrink-0 overflow-hidden rounded-[8px] bg-white shadow-[0px_0px_22px_-9px_rgba(0,0,0,0.25)]"
    >
      <span
        className={`${pontanoSans.className} absolute top-0 left-[21px] text-[77px] leading-none tracking-[-2.31px] text-[#DAB234]`}
      >
        &ldquo;
      </span>

      <div className="absolute top-[30px] left-[129px] flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="flex h-[25px] w-[25px] items-center justify-center"
          >
            <Star className="h-[19px] w-[19px] fill-[#DAB234] text-[#DAB234]" />
          </span>
        ))}
      </div>

      <p className="absolute top-[68px] left-[129px] w-[264px] font-[family-name:var(--font-poppins)] text-[16px] leading-normal tracking-[-0.48px] text-black">
        {quote}
      </p>

      <div className="absolute top-[189px] left-[129px]">
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
    <section id="testimonials" className="w-full bg-[ok ev#F3F6FC]">
      <div className="mx-auto max-w-[1440px] px-10 pt-[56px] pb-[62px]">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-[39px] leading-[58px] font-bold tracking-[-1.17px] text-[#142539]">
          What Our Clients Say !
        </h2>

        <div className="mt-[25px] mx-auto w-[1337.95px] overflow-hidden">
          <div
            className="flex gap-[44px] transition-transform duration-500 ease-in-out"
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
      </div>
    </section>
  );
}
