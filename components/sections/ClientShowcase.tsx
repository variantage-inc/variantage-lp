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

export default function ClientShowcase() {
  return (
    <section id="client-showcase" className="w-full bg-[#e5fbff]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-10 sm:px-6 md:px-8 md:pt-12 lg:px-10 lg:pt-[61px]">
        <h2 className="font-[family-name:var(--font-poppins)] text-center text-[#1C304B] tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1.08px]">
          <span className="block text-[22px] font-normal leading-snug md:text-[28px] md:leading-normal lg:text-[36px] lg:leading-normal">
            Work we do
          </span>
          <span className="block text-[32px] font-bold leading-tight md:text-[44px] md:leading-[1.1] lg:text-[61px] lg:leading-[0.995]">
            Client in showcase
          </span>
        </h2>

        <ul className="mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-4 md:mt-10 md:grid-cols-3 lg:mt-[55px] lg:grid-cols-4 lg:gap-x-[17px] lg:gap-y-[14px]">
          {PARTNER_LOGOS.map((client) => (
            <li
              key={client.logo}
              className="flex h-[160px] w-full flex-col overflow-hidden rounded-[8px] bg-white"
            >
              <div className="flex flex-1 items-center justify-center px-4">
                <Image
                  src={client.logo}
                  alt=""
                  width={241}
                  height={124}
                  className="h-auto w-full max-w-[241px]"
                />
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
      </div>
    </section>
  );
}
