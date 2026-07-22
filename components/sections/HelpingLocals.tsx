import Image from "next/image";
import { Fragment } from "react";

const CITIES = ["Toronto", "Markham", "Whitby", "Saskatchewan", "Other Cities"];

export default function HelpingLocals() {
  return (
    <section id="helping-locals" className="w-full bg-gradient-to-b from-[#E2F4FF] from-[2.582%] to-[#FAFCFE]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[43px] px-10 pt-[47px] pb-[62px] text-center">
        <h2 className="font-[family-name:var(--font-poppins)] text-[33px] font-medium leading-[59px] tracking-[-0.99px] text-[#171414]">
          Helping Local Businesses Across Canada
        </h2>

        <ul className="flex w-full items-center justify-between">
          {CITIES.map((city, index) => (
            <Fragment key={city}>
              {index > 0 && (
                <li
                  aria-hidden="true"
                  className="font-[family-name:var(--font-poppins)] text-[25.411px] font-medium text-[#171414]"
                >
                  |
                </li>
              )}
              <li className="flex flex-col items-center gap-[13px]">
                <Image
                  src="/images/tick-red.png"
                  alt=""
                  width={33}
                  height={33}
                  className="size-[33px]"
                />
                <span className="font-[family-name:var(--font-poppins)] text-[25.411px] font-medium leading-[59px] tracking-[-0.7623px] text-[#171414]">
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
