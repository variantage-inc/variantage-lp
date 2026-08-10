import Image from "next/image";
import { Phone, CircleArrowRight } from "lucide-react";

const PHONE_NUMBER = "+1 647 250 7504";

export default function Header() {
  return (
    <header id="header" className="w-full">
      {/*
        Below 1440px the header stacks into two rows: logo + CTA share the
        first line (a real flex row, dissolved via `contents` from sm up),
        the phone number gets its own full-width second line. From sm
        (640px) up there is room for one line, so the wrapper's `contents`
        lets logo/phone/CTA sort into a single flex row, with `order-3` on
        the CTA and `ml-auto` on the phone number pushing the phone+CTA
        pair flush right — mathematically identical to the old two-item
        `justify-between` (phone becomes the first item of that pushed
        group, CTA follows it via a fixed gap). At 1440px+ every value
        collapses back to the original fixed sizes, so desktop is unchanged.
      */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-5 md:gap-6 md:px-8 lg:gap-8 lg:px-10 min-[1440px]:h-[167px] min-[1440px]:gap-12 min-[1440px]:px-0 min-[1440px]:py-0">
        <div className="flex items-center justify-between gap-3 sm:contents">
          <Image
            src="/images/Variantage-logo-branding-page.svg"
            alt="Variantage"
            width={255}
            height={66}
            preload
            className="h-auto w-[150px] shrink-0 sm:w-[150px] md:w-[180px] lg:w-[210px] min-[1440px]:w-[255px]"
          />

          <a
            href="#branding-solutions"
            className="flex h-11 shrink-0 items-center justify-center gap-1 rounded-[10px] bg-[#C11F24] px-3 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-[#A1181C] sm:order-3 sm:h-12 sm:gap-2 sm:px-5 sm:text-xs md:h-14 md:px-6 md:text-sm lg:h-[60px] min-[1440px]:h-[66px] min-[1440px]:w-[200px] min-[1440px]:px-0 min-[1440px]:text-sm"
          >
            Discover More
            <CircleArrowRight
              className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5"
              strokeWidth={2}
            />
          </a>
        </div>

          <a
            href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}
            className="hidden items-center gap-2 text-sm font-semibold text-[#142539] sm:ml-auto sm:flex sm:shrink-0 sm:gap-3 sm:text-base"
          >
            <Phone className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" strokeWidth={2} />
            <span className="whitespace-nowrap">{PHONE_NUMBER}</span>
        </a>
      </div>
    </header>
  );
}
