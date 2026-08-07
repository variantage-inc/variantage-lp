import Image from "next/image";
import { ChevronRight } from "lucide-react";

const PROBLEMS = [
  "1. I don’t know what to post.",
  "2. My online pages aren’t bringing customers.",
  "3. I don’t have time to manage all this.",
];

export default function Problems() {
  return (
    <section id="problems" className="w-full">
      <div className="relative flex w-full flex-col bg-[linear-gradient(45deg,_#09182B_0%,_#112C4E_100%)] lg:block lg:min-h-[970px]">
        <div className="relative z-10 order-2 mx-auto max-w-[1440px] px-5 sm:px-6 md:px-8 lg:order-none lg:pl-10 lg:pr-0">
          <div className="flex flex-col pt-8 pb-8 sm:pt-9 sm:pb-9 md:pt-10 md:pb-10 lg:pt-[47px] lg:pb-[110px]">
            <p className="max-w-full font-[family-name:var(--font-poppins)] text-[22px] font-light leading-[30px] tracking-[-0.5px] text-[#ADD6FF] sm:text-[25px] sm:leading-[33px] md:text-[28px] md:leading-[36px] md:tracking-[-0.8px] lg:w-[694px] lg:max-w-none lg:text-[39.411px] lg:leading-[47px] lg:tracking-[-1.1823px]">
              If you’ve ever felt lost or overwhelmed with social media and
              online marketing, you’re not alone, most small businesses feel
              the same.
            </p>

            <p className="mt-6 max-w-full font-[family-name:var(--font-poppins)] text-[24px] font-medium leading-[32px] tracking-[-0.5px] text-[#F9FBFD] sm:text-[28px] sm:leading-[36px] md:mt-8 md:text-[30px] md:leading-[38px] lg:mt-[44px] lg:w-[596px] lg:max-w-none lg:text-[37.411px] lg:leading-[47px] lg:tracking-[-1.1223px]">
              3 Problems
            </p>

            <ol className="mt-4 flex list-none flex-col gap-3 md:gap-4 lg:mt-[14px] lg:gap-[14px]">
              {PROBLEMS.map((problem) => (
                <li
                  key={problem}
                  className="max-w-full font-[family-name:var(--font-poppins)] text-[17px] font-light leading-[26px] tracking-[-0.4px] text-[#F9FBFD] sm:text-[19px] sm:leading-[28px] md:text-[22px] md:leading-[32px] lg:w-[694px] lg:max-w-none lg:text-[29.411px] lg:leading-[47px] lg:tracking-[-0.8823px]"
                >
                  {problem}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Image
          src="/images/demofile1.webp"
          alt="happy man with variantage"
          width={950}
          height={970}
          className="order-1 mx-auto h-auto w-[65vw] max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:order-none lg:absolute lg:right-0 lg:bottom-[-40px] lg:z-0 lg:mx-0 lg:h-auto lg:w-[950px] lg:max-w-none"
        />
      </div>

      <div className="w-full bg-[#071627]">
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-5 px-5 py-8 sm:px-6 md:gap-6 md:px-8 md:py-10 lg:h-[146px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-10 lg:py-0">
          <p className="font-[family-name:var(--font-poppins)] text-[22px] font-light leading-[30px] tracking-[-0.5px] text-[#ADD6FF] sm:text-[25px] sm:leading-[33px] md:text-[28px] md:leading-[36px] lg:text-[39.411px] lg:leading-[47px] lg:tracking-[-1.1823px]">
            At Variantage, we cover all of this for you
          </p>

          <a
            href="#lead-form"
            className="flex h-[56px] w-full items-center justify-center gap-[10px] rounded-[8px] bg-[#C11F24] px-6 py-3 hover:bg-[#A1181C] sm:h-[60px] md:h-[64px] md:w-auto md:px-8 lg:h-[88px] lg:w-[366px] lg:px-[31px] lg:py-[12px]"
          >
            <span className="font-[family-name:var(--font-poppins)] text-[16px] font-bold text-white sm:text-[18px] lg:text-[20px]">
              Book a Free Consultation
            </span>
            <ChevronRight className="h-[22px] w-4 text-white lg:h-[30px] lg:w-5" strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
}
