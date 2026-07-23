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
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-10 pt-[59px] pb-[64px]">
        <h2 className="font-[family-name:var(--font-poppins)] text-center text-[#1C304B] tracking-[-1.08px]">
          <span className="block text-[36px] font-normal leading-normal">
            Elevate Your Business with
          </span>
          <span className="block text-[61px] font-bold leading-[0.995]">
            Our Branding Solutions
          </span>
        </h2>

        <ul className="mt-[88px] flex w-full items-start justify-between">
          {SOLUTIONS.map((solution) => (
            <li key={solution.title} className="flex flex-col items-start">
              <div className="flex h-[126px] items-end">
                <Image
                  src={solution.icon}
                  alt=""
                  width={solution.width}
                  height={solution.height}
                  className="mix-blend-multiply"
                />
              </div>
              <h3 className="mt-[9px] font-[family-name:var(--font-poppins)] text-[24px] font-bold leading-normal tracking-[-0.72px] text-[#C01F25]">
                {solution.title}
              </h3>
              <p
                className="mt-[23px] font-[family-name:var(--font-poppins)] text-[17px] font-normal leading-normal tracking-[-0.51px] text-black"
                style={{ width: solution.descriptionWidth }}
              >
                {solution.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
