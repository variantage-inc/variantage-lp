import Image from "next/image";

const SOLUTIONS = [
  {
    icon: "/images/branding-solutions-icon1.svg",
    width: 116,
    height: 124,
    title: "Logo Design",
    description: "Unique and memorable logos that represent your business.",
    descriptionWidth: 198,
  },
  {
    icon: "/images/branding-solutions-icon2.svg",
    width: 119,
    height: 121,
    title: "Brand Identity Kit",
    description: "Complete color palette, typography, and guidelines.",
    descriptionWidth: 266,
  },
  {
    icon: "/images/branding-solutions-icon3.svg",
    width: 121,
    height: 126,
    title: "Business Stationery",
    description: "Professional business cards and letterheads.",
    descriptionWidth: 198,
  },
  {
    icon: "/images/branding-solutions-icon4.svg",
    width: 120,
    height: 125,
    title: "Social Media Kit",
    description: "Branded templates for consistent marketing.",
    descriptionWidth: 214,
  },
  {
    icon: "/images/branding-solutions-icon5.svg",
    width: 138,
    height: 119,
    title: "Packaging Design",
    description: "Packaging that increases perceived value.",
    descriptionWidth: 198,
  },
];

export default function BrandingSolutions() {
  return (
    <section id="branding-solutions" className="w-full bg-[#e5fbff]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-10 pb-12 sm:px-6 md:px-8 md:pt-12 md:pb-14 lg:px-10 lg:pt-[59px] lg:pb-[64px]">
        <h2 className="font-[family-name:var(--font-poppins)] text-center text-[#1C304B] tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1.08px]">
          <span className="block text-[22px] font-normal leading-snug md:text-[28px] md:leading-normal lg:text-[36px] lg:leading-normal">
            Elevate Your Business with
          </span>
          <span className="block text-[32px] font-bold leading-tight md:text-[44px] md:leading-[1.1] lg:text-[61px] lg:leading-[0.995]">
            Our Branding Solutions
          </span>
        </h2>

        <ul className="mt-10 grid w-full grid-cols-1 gap-y-8 md:mt-14 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:mt-[88px] lg:flex lg:items-start lg:justify-between lg:gap-0">
          {SOLUTIONS.map((solution) => (
            <li
              key={solution.title}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="flex h-[70px] items-end sm:h-[80px] md:h-[100px] lg:h-[126px]">
                <Image
                  src={solution.icon}
                  alt=""
                  width={solution.width}
                  height={solution.height}
                  className="mix-blend-multiply h-auto w-14 sm:w-16 md:w-20 lg:h-auto lg:w-auto"
                />
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-[21px] font-bold leading-normal tracking-[-0.4px] text-[#C01F25] md:text-[20px] md:tracking-[-0.5px] lg:mt-[9px] lg:text-[24px] lg:tracking-[-0.72px]">
                {solution.title}
              </h3>
              <p className="mt-3 w-[88%] max-w-[320px] font-[family-name:var(--font-poppins)] text-[16px] font-normal leading-[1.45] tracking-[-0.3px] text-black md:w-auto md:text-[15px] md:tracking-[-0.4px] lg:mt-[23px] lg:max-w-none lg:text-[17px] lg:tracking-[-0.51px]">
                {solution.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
