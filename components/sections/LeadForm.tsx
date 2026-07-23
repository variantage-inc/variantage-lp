const RADIO_CLASS =
  "size-[28px] shrink-0 appearance-none rounded-full border-2 border-black bg-white outline-none checked:border-[7px] checked:border-[#C01F25]";

export default function LeadForm() {
  return (
    <section id="lead-form" className="w-full bg-[#FAFCFE]">
      <div className="relative mx-auto h-[1853px] max-w-[1440px]">
        <h2 className="absolute top-[84px] left-[108px] w-[827px] font-[family-name:var(--font-poppins)] text-[61px] leading-[1.075] font-light tracking-[-1.83px] text-[#C01F25]">
          <span className="block">Unlock a personalized brand </span>
          <span className="block">evaluation from Variantage.</span>
        </h2>

        <p className="absolute top-[240px] left-[115px] w-[963px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] font-normal tracking-[-0.9px] text-black">
          <span className="block">
            We&apos;ll analyze your digital footprint and provide a clear,
            expert-driven{" "}
          </span>
          <span className="block">
            plan to strengthen your branding and marketing performance.
          </span>
        </p>

        <form className="contents">
          <h3 className="absolute top-[341px] left-[121px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] font-bold tracking-[-0.9px] text-[#C01F25]">
            Contact Details
          </h3>

          <label className="absolute top-[399px] left-[115px] flex h-[73px] w-[600px] items-center gap-[10px] rounded-[16px] bg-white pl-[29px] pr-[24px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
            <span className="shrink-0 font-[family-name:var(--font-poppins)] text-[27px] leading-[32px] tracking-[-0.81px] text-black">
              Full Name<span className="text-[#C01F25]">*</span>
            </span>
            <input
              type="text"
              name="fullName"
              className="h-full min-w-0 flex-1 bg-transparent font-[family-name:var(--font-poppins)] text-[27px] tracking-[-0.81px] text-black outline-none"
            />
          </label>

          <label className="absolute top-[399px] left-[732px] flex h-[73px] w-[600px] items-center gap-[10px] rounded-[16px] bg-white pl-[40px] pr-[24px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
            <span className="shrink-0 font-[family-name:var(--font-poppins)] text-[27px] leading-[32px] tracking-[-0.81px] text-black">
              Contact No.<span className="text-[#C01F25]">*</span>{" "}
              <span className="text-[21px] text-[#A6A6A6]">(numbers only)</span>
            </span>
            <input
              type="tel"
              name="contactNumber"
              className="h-full min-w-0 flex-1 bg-transparent font-[family-name:var(--font-poppins)] text-[27px] tracking-[-0.81px] text-black outline-none"
            />
          </label>

          <label className="absolute top-[499px] left-[115px] flex h-[73px] w-[1217px] items-center gap-[10px] rounded-[16px] bg-white pl-[29px] pr-[24px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
            <span className="shrink-0 font-[family-name:var(--font-poppins)] text-[27px] leading-[32px] tracking-[-0.81px] text-black">
              Email Address<span className="text-[#C01F25]">*</span>
            </span>
            <input
              type="email"
              name="email"
              className="h-full min-w-0 flex-1 bg-transparent font-[family-name:var(--font-poppins)] text-[27px] tracking-[-0.81px] text-black outline-none"
            />
          </label>

          <h3 className="absolute top-[613px] left-[121px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] font-bold tracking-[-0.9px] text-[#C01F25]">
            Business Information
          </h3>

          <label className="absolute top-[679px] left-[121px] flex h-[73px] w-[1211px] items-center gap-[10px] rounded-[16px] bg-white pl-[29px] pr-[24px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]">
            <span className="shrink-0 font-[family-name:var(--font-poppins)] text-[27px] leading-[32px] tracking-[-0.81px] text-black">
              Business Name
            </span>
            <input
              type="text"
              name="businessName"
              className="h-full min-w-0 flex-1 bg-transparent font-[family-name:var(--font-poppins)] text-[27px] tracking-[-0.81px] text-black outline-none"
            />
          </label>

          <p className="absolute top-[787px] left-[121px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] font-semibold tracking-[-0.9px] text-black">
            Do you currently have a website?{" "}
            <span className="text-[#C01F25]">*</span>
          </p>

          <label className="absolute top-[858px] left-[117px] flex items-center gap-[19px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] tracking-[-0.9px] text-black">
            <input
              type="radio"
              name="hasWebsite"
              value="yes"
              className={RADIO_CLASS}
            />
            <span>
              <span className="font-bold">Yes,</span> Current Website Address :{" "}
              <span className="text-[25px] tracking-[-0.75px] font-normal">
                (Optional )
              </span>
            </span>
          </label>

          <input
            type="url"
            name="websiteUrl"
            aria-label="Current website address"
            className="absolute top-[838px] left-[818px] h-[73px] w-[514px] rounded-[16px] bg-white px-[24px] font-[family-name:var(--font-poppins)] text-[27px] text-black shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] outline-none"
          />

          <label className="absolute top-[911px] left-[117px] flex items-center gap-[19px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] tracking-[-0.9px] text-black">
            <input
              type="radio"
              name="hasWebsite"
              value="no"
              className={RADIO_CLASS}
            />
            <span>
              <span className="font-bold">No</span> , I do need a website
            </span>
          </label>

          <div className="absolute top-[989px] left-[121px] w-[763px]">
            <p className="font-[family-name:var(--font-poppins)] text-[30px] leading-[41px] font-semibold tracking-[-0.9px] text-black">
              What does your business do?{" "}
              <span className="text-[#C01F25]">*</span>
            </p>
            <p className="font-[family-name:var(--font-poppins)] text-[24px] leading-[41px] font-normal tracking-[-0.9px] text-[#7B7B7B]">
              Tell us about your business, services, products and ideal
              customers.
            </p>
          </div>

          <textarea
            name="businessDescription"
            aria-label="What does your business do?"
            className="absolute top-[1096px] left-[123px] h-[154px] w-[1209px] resize-none rounded-[16px] bg-white p-[24px] font-[family-name:var(--font-poppins)] text-[20px] text-black shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] outline-none"
          />

          <p className="absolute top-[1320px] left-[121px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] font-semibold tracking-[-0.9px] text-black">
            How would you like us to contact you?
          </p>

          <div className="absolute top-[1383px] left-[121px] flex items-center gap-[64px]">
            <label className="flex items-center gap-[16px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] font-semibold tracking-[-0.9px] text-black">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                className={RADIO_CLASS}
              />
              Phone Call
            </label>
            <label className="flex items-center gap-[16px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] font-semibold tracking-[-0.9px] text-black">
              <input
                type="radio"
                name="contactMethod"
                value="whatsapp"
                className={RADIO_CLASS}
              />
              WhatsApp
            </label>
            <label className="flex items-center gap-[16px] font-[family-name:var(--font-poppins)] text-[30px] leading-[32px] font-semibold tracking-[-0.9px] text-black">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                className={RADIO_CLASS}
              />
              Email
            </label>
          </div>

          <label className="absolute top-[1457px] left-[121px] flex items-center gap-[15px]">
            <input
              type="checkbox"
              name="newsletterOptIn"
              className="size-[35px] shrink-0 appearance-none rounded-[5px] border border-[#1A1A1A] bg-white outline-none checked:bg-[#C01F25]"
            />
            <span className="font-[family-name:var(--font-poppins)] text-[25px] leading-[32px] font-normal tracking-[-0.75px] text-black">
              Sign up for the monthly free of cost social media designs for
              your business.
            </span>
          </label>

          <button
            type="submit"
            className="absolute top-[1580px] left-[121px] flex h-[111px] w-[1211px] items-center justify-center rounded-[16px] bg-[#C01F25] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#A1181C]"
          >
            <span className="font-[family-name:var(--font-poppins)] text-[43px] leading-[32px] font-bold tracking-[-1.29px] text-white">
              Let&apos;s Build Your Brand Together &gt;
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
