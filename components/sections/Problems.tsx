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
      <div className="relative w-full bg-[linear-gradient(45deg,_#09182B_0%,_#112C4E_100%)]">
        <div className="relative z-10 mx-auto max-w-[1440px] pl-10">
          <div className="flex flex-col pt-[47px] pb-[110px]">
            <p className="w-[694px] font-[family-name:var(--font-poppins)] text-[39.411px] font-light leading-[47px] tracking-[-1.1823px] text-[#ADD6FF]">
              If you’ve ever felt lost or overwhelmed with social media and
              online marketing, you’re not alone, most small businesses feel
              the same.
            </p>

            <p className="mt-[44px] w-[596px] font-[family-name:var(--font-poppins)] text-[37.411px] font-medium leading-[47px] tracking-[-1.1223px] text-[#F9FBFD]">
              3 Problems
            </p>

            <ol className="mt-[14px] flex list-none flex-col gap-[14px]">
              {PROBLEMS.map((problem) => (
                <li
                  key={problem}
                  className="w-[694px] font-[family-name:var(--font-poppins)] text-[29.411px] font-light leading-[47px] tracking-[-0.8823px] text-[#F9FBFD]"
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
          className="absolute right-0 bottom-[-40px] z-0"
        />
      </div>

      <div className="w-full bg-[#071627]">
        <div className="relative z-10 mx-auto flex h-[146px] max-w-[1440px] items-center justify-between px-10">
          <p className="font-[family-name:var(--font-poppins)] text-[39.411px] font-light leading-[47px] tracking-[-1.1823px] text-[#ADD6FF]">
            At Variantage, we cover all of this for you
          </p>

          <a
            href="#contact"
            className="flex h-[88px] w-[366px] items-center justify-center gap-[10px] rounded-[8px] bg-[#C11F24] px-[31px] py-[12px] hover:bg-[#A1181C]"
          >
            <span className="font-[family-name:var(--font-poppins)] text-[20px] font-bold text-white">
              Book Free Consultation
            </span>
            <ChevronRight className="h-[30px] w-5 text-white" strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
}
