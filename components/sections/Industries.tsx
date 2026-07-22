import Image from "next/image";

const PARTNER_LOGOS = [
  "/images/Partner-1.png",
  "/images/Partner-2.png",
  "/images/Partner-3.png",
  "/images/Partner-4.png",
  "/images/Partner-5.png",
  "/images/Partner-6.png",
  "/images/Partner-7.png",
  "/images/Partner-8.png",
];

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
    <section id="industries" className="w-full bg-[#ECF8FA]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-10 pt-[61px] pb-[380px]">
        <h2 className="font-[family-name:var(--font-poppins)] text-center text-[#1C304B] tracking-[-1.08px]">
          <span className="block text-[36px] font-normal leading-normal">
            Work we do
          </span>
          <span className="block text-[61px] font-bold leading-[0.995]">
            Client in showcase
          </span>
        </h2>

        <ul className="mt-[55px] grid w-full grid-cols-4 gap-x-[17px] gap-y-[14px]">
          {PARTNER_LOGOS.map((logo) => (
            <li
              key={logo}
              className="flex h-[160px] w-full items-center justify-center overflow-hidden rounded-[8px] bg-white"
            >
              <Image src={logo} alt="" width={241} height={124} />
            </li>
          ))}
        </ul>

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
