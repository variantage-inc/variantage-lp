import Image from "next/image";
import type { SVGProps } from "react";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Branding Solutions", href: "#branding-solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#lead-form" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/variantage.inc/",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Variantage.inc",
    Icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/variantage-official/",
    Icon: LinkedinIcon,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#112A4B]">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-8 sm:px-6 sm:pt-15 md:px-8 md:pt-24 lg:px-10 lg:pt-15">
        <div className="flex flex-col items-center gap-16 text-center md:gap-20 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:text-left">
          {/* Left column */}
          <div className="flex flex-col items-center gap-8 lg:w-[280px] lg:items-start">
            <Image
              src="/images/va-logo-light.svg"
              alt="Variantage"
              width={168}
              height={42}
            />

            <div className="flex flex-col items-center gap-5 lg:items-start">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                Quick Links
              </h3>
              <ul className="flex flex-col items-center gap-3 lg:items-start">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium tracking-[-0.3px] text-white/75 transition-colors duration-300 ease-out hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://variantage.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-white"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_1px]">
                Visit variantage.com
              </span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>

          {/* Center column */}
          <div className="flex flex-col items-center gap-5 lg:flex-1 lg:pt-1">
            <p className="font-[family-name:var(--font-poppins)] text-[24px] font-semibold tracking-[-0.5px] text-white sm:text-[28px]">
              Whitby, Ajax, Pickering, Markham
            </p>

            <div className="flex flex-col items-center gap-1.5">
              <span className="text-xs font-medium tracking-[0.15em] text-white/50 uppercase">
                Call or WhatsApp
              </span>
              <a
                href="tel:+16472507504"
                className="text-[21px] font-bold tracking-[-0.4px] text-white transition-colors duration-300 ease-out hover:text-white/80 sm:text-[23px]"
              >
                +1 (647) 250-7504
              </a>
            </div>

            <a
              href="mailto:support@variantage.com"
              className="text-[21px] font-bold tracking-[-0.4px] text-white transition-colors duration-300 ease-out hover:text-white/80 sm:text-[23px]"
            >
              support@variantage.com
            </a>

            <div className="mt-3 flex flex-col items-center gap-0.5 text-[12px] font-medium tracking-[0.15em] text-white/40 uppercase">
              <span>Mon to Fri</span>
              <span>9:00 AM to 6:00 PM EST</span>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-center gap-5 lg:w-[280px] lg:items-end">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              Follow Us
            </h3>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 ease-out hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 md:mt-5 lg:mt-5">
          <p className="text-center text-[13px] font-normal tracking-[-0.2px] text-white/45 lg:text-left">
            &copy; 2026 Variantage Incorporation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.3c0-1.5 1-2.4 2.3-2.4 1.3 0 2.2.9 2.2 2.4V17" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="17" />
    </svg>
  );
}
