import Image from "next/image";
import { Phone, CircleArrowRight } from "lucide-react";

const PHONE_NUMBER = "+1 647 250 7504";

export default function Header() {
  return (
    <header id="header" className="w-full">
      <div className="mx-auto flex h-[167px] max-w-[1440px] items-center justify-between">
        <Image
          src="/images/Variantage-logo-branding-page.svg"
          alt="Variantage"
          width={255}
          height={66}
          preload
        />

        <div className="flex items-center gap-12">
          <a
            href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-3 text-base font-semibold text-[#142539]"
          >
            <Phone className="h-6 w-6" strokeWidth={2} />
            {PHONE_NUMBER}
          </a>

          <a
            href="#branding-solutions"
            className="flex h-[66px] w-[200px] items-center justify-center gap-2 rounded-[10px] bg-[#C11F24] text-sm font-bold uppercase tracking-wide text-white hover:bg-[#A1181C]"
          >
            Discover More
            <CircleArrowRight className="h-5 w-5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </header>
  );
}
