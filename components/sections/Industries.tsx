import Image from "next/image";

const PARTNER_LOGOS = [
  {
    logo: "/images/Partner-1.png",
    website: "https://relaxnglowspa.com/",
  },
  {
    logo: "/images/Partner-2.png",
    website: "https://lovelydaycare.ca/",
  },
  {
    logo: "/images/Partner-3.png",
    website: "https://www.mybabyyo.com/",
  },
  {
    logo: "/images/Partner-4.png",
    website: "https://www.itailor.com/",
  },
  {
    logo: "/images/Partner-5.png",
    website: "https://www.hotelire.ca/customer",
  },
  {
    logo: "/images/Partner-6.png",
    website: "https://lrbt.org.pk/",
  },
  {
    logo: "/images/Partner-7.png",
    website: "https://variantage.com/",
  },
  {
    logo: "/images/Partner-8.png",
    website: "https://nahstones.com/",
  },
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
    <section id="industries" className="w-full bg-[#e5fbff]">
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
          {PARTNER_LOGOS.map((client) => (
            <li
              key={client.logo}
              className="flex h-[160px] w-full flex-col overflow-hidden rounded-[8px] bg-white"
            >
              <div className="flex flex-1 items-center justify-center">
                <Image src={client.logo} alt="" width={241} height={124} />
              </div>
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-1 bg-[#F5F5F5] py-2 text-xs font-medium text-[#1C304B] transition-colors duration-300 hover:bg-[#C11F24] hover:text-white"
              >
                Visit Website
                <span className="transition-transform duration-300 group-hover:translate-x-[4px]">
                  ↗
                </span>
              </a>
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
