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
    name: "Cathy M.",
    role: "Gemelit",
    quote:
      "Variantage transformed our social media with premium, elegant designs that truly showcase our jewelry and cosmetics. Mujtaba treated our brand like his own, bringing creativity, professionalism, and attention to every detail. I highly recommend them to any business looking to build a stronger online presence.",
  },
  {
    name: "Jason B.",
    role: "ViPhy Corp.",
    quote:
      "Variantage turned our vision into a professional healthcare brand and designed an outstanding patient management platform with an exceptional mobile experience. Mujtaba and Atif have been incredible partners throughout the journey. We highly recommend them for branding, UI/UX, and digital product development.",
  },
  {
    name: "Rita S.",
    role: "Relax N Glow Spa",
    quote:
      "Variantage completely elevated our online presence through Google optimization, social media, and creative marketing campaigns. We've seen more inquiries, new clients, and stronger visibility since working together. Their creativity, consistency, and genuine support have been outstanding.",
  },
  {
    name: "Syed A.",
    role: "Bongi UK",
    quote:
      "We've worked with Variantage for over seven years across multiple web development and branding projects. They consistently deliver professional, cost-effective solutions with exceptional quality. A reliable team I would confidently recommend to any business.",
  },
  {
    name: "Daisy & R.",
    role: "Daisy Family Wellness",
    quote:
      "Variantage has been our trusted marketing partner for over two years, handling everything from our website and digital marketing to signage and print materials. Their team is responsive, dependable, and makes managing our brand effortless. We couldn't ask for a better partner.",
  },
];

const CARD_WIDTH = 416.65;
const CARD_GAP = 45;
const VISIBLE_CARDS = 3;
const PAGE_COUNT = TESTIMONIALS.length - VISIBLE_CARDS + 1;
const CAROUSEL_WIDTH = CARD_WIDTH * VISIBLE_CARDS + CARD_GAP * (VISIBLE_CARDS - 1);

function TestimonialCard({ name, role, quote }: Testimonial) {
  return (
    <div className="relative flex h-[360px] w-[416.65px] shrink-0 flex-col overflow-hidden rounded-[15px] bg-white shadow-[0px_0px_22px_-9px_rgba(0,0,0,0.25)]">
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

      <div className="flex h-full flex-col pt-[88px] pr-[40px] pb-[32px] pl-[54px]">
        <p className="font-[family-name:var(--font-poppins)] text-[13px] leading-[1.6] font-normal tracking-[-0.39px] text-black">
          {quote}
        </p>

        <div className="mt-auto pt-[16px]">
          <p className="font-[family-name:var(--font-poppins)] text-[18px] leading-normal font-bold tracking-[-0.54px] text-black">
            {name}
          </p>
          <p className="font-[family-name:var(--font-poppins)] text-[14px] leading-normal tracking-[-0.42px] text-black">
            {role}
          </p>
        </div>
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
