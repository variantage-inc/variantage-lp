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
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-10 pb-[380px]">
        <h2 className="mt-[63px] font-[family-name:var(--font-poppins)] text-center text-[#1C304B] tracking-[-1.08px]">
          <span className="block text-[36px] font-normal leading-normal">
            We’re Expert
          </span>
          <span className="block text-[61px] font-bold leading-[0.995]">
            in the industries we serve
          </span>
        </h2>

        <ul className="mt-[65px] flex w-full items-start justify-between">
          {INDUSTRIES.map((industry) => (
            <li key={industry.title} className="flex flex-col items-center">
              <div className="flex h-[69px] items-end">
                <Image
                  src={industry.icon}
                  alt=""
                  width={industry.width}
                  height={industry.height}
                />
              </div>
              <span className="mt-[29px] font-[family-name:var(--font-poppins)] text-[27px] font-medium leading-[51px] tracking-[-0.81px] text-[#1C304B]">
                {industry.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
