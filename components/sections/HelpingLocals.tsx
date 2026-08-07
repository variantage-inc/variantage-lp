import Image from "next/image";
import { Fragment } from "react";

const CITIES = ["Whitby", "Ajax", "Pickering", "Oshawa", "Other Cities"];

export default function HelpingLocals() {
  return (
    <section id="helping-locals" className="w-full bg-gradient-to-b from-[#E2F4FF] from-[2.582%] to-[#FAFCFE]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-5 pt-8 pb-10 text-center md:gap-8 md:px-8 md:pt-10 md:pb-12 lg:gap-[43px] lg:px-10 lg:pt-[47px] lg:pb-[62px]">
        <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#171414] md:text-[26px] md:leading-[36px] md:tracking-[-0.7px] lg:text-[33px] lg:leading-[59px] lg:tracking-[-0.99px]">
          Helping Local Businesses Across Canada
        </h2>

        <ul className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-5 md:gap-x-8 md:gap-y-6 lg:flex-nowrap lg:justify-between lg:gap-x-0 lg:gap-y-0">
          {CITIES.map((city, index) => (
            <Fragment key={city}>
              {index > 0 && (
                <li
                  aria-hidden="true"
                  className="hidden font-[family-name:var(--font-poppins)] text-[25.411px] font-medium text-[#171414] lg:block"
                >
                  |
                </li>
              )}
              <li className="flex flex-col items-center gap-2 md:gap-3 lg:gap-[13px]">
                <Image
                  src="/images/tick-red.png"
                  alt=""
                  width={33}
                  height={33}
                  className="size-[22px] md:size-[28px] lg:size-[33px]"
                />
                <span className="font-[family-name:var(--font-poppins)] text-[14px] font-medium leading-[20px] tracking-[-0.3px] text-[#171414] md:text-[18px] md:leading-[26px] md:tracking-[-0.45px] lg:text-[25.411px] lg:leading-[59px] lg:tracking-[-0.7623px]">
                  {city}
                </span>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
