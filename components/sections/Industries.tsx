import Image from "next/image";

const INDUSTRIES = [
  {
    icon: "/images/1-spa-massage.svg",
    width: 67,
    height: 56,
    title: "Spa & Salons",
  },
  {
    icon: "/images/2-barber-shop.svg",
    width: 39,
    height: 67,
    title: "Barber Shops",
  },
  {
    icon: "/images/3-automotives.svg",
    width: 58,
    height: 63,
    title: "Automotive",
  },
  {
    icon: "/images/4-healthcare.svg",
    width: 59,
    height: 50,
    title: "Health Care",
  },
  {
    icon: "/images/5-real-estate.svg",
    width: 63,
    height: 60,
    title: "Real Estate",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="w-full bg-[#e5fbff]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-16 sm:px-6 md:px-8 md:pb-24 lg:px-10 lg:pb-[380px]">
        <h2 className="mt-8 font-[family-name:var(--font-poppins)] text-center text-[#1C304B] tracking-[-0.5px] md:mt-12 md:tracking-[-0.8px] lg:mt-[63px] lg:tracking-[-1.08px]">
          <span className="block text-[22px] font-normal leading-snug md:text-[28px] md:leading-normal lg:text-[36px] lg:leading-normal">
            We’re Expert
          </span>
          <span className="block text-[32px] font-bold leading-tight md:text-[44px] md:leading-[1.1] lg:text-[61px] lg:leading-[0.995]">
            in the industries we serve
          </span>
        </h2>

        <ul className="mt-10 flex w-full flex-wrap items-start justify-center gap-x-6 gap-y-8 md:mt-12 md:gap-x-8 md:gap-y-10 lg:mt-[65px] lg:flex-nowrap lg:justify-between lg:gap-x-0 lg:gap-y-0">
          {INDUSTRIES.map((industry) => (
            <li
              key={industry.title}
              className="flex w-[42%] flex-col items-center sm:w-[30%] md:w-[28%] lg:w-auto"
            >
              <div className="flex h-[69px] items-end">
                <Image
                  src={industry.icon}
                  alt=""
                  width={industry.width}
                  height={industry.height}
                />
              </div>
              <span className="mt-3 font-[family-name:var(--font-poppins)] text-[16px] font-medium leading-snug tracking-[-0.4px] text-[#1C304B] md:mt-5 md:text-[20px] md:leading-normal md:tracking-[-0.6px] lg:mt-[29px] lg:text-[27px] lg:leading-[51px] lg:tracking-[-0.81px]">
                {industry.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
