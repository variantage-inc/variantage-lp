"use client";

import { useState, type FormEvent } from "react";

const RADIO_CLASS =
  "size-[28px] shrink-0 appearance-none rounded-full border-2 border-black bg-white outline-none checked:border-[7px] checked:border-[#C01F25]";

type SubmitStatus = "idle" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const entries = Array.from(new FormData(form).entries()) as [
      string,
      string,
    ][];
    const data = new URLSearchParams(entries);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      if (!response.ok) {
        // 404 here means Netlify never registered the form, so it did not
        // intercept the POST and Next.js handled it as an unknown route.
        // Check that form detection is enabled, then redeploy.
        throw new Error(
          `Netlify form submission failed: ${response.status} ${response.statusText}`,
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="lead-form" className="w-full bg-[#FAFCFE]">
      {/*
        Below 1440px (the design's native canvas width) the form flows as a
        single fluid column. At 1440px+ it switches to the pixel-exact
        absolute layout of the original desktop design, unchanged.
      */}
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:gap-12 sm:px-6 sm:py-16 md:gap-14 md:px-8 md:py-20 lg:gap-16 lg:px-10 lg:py-24 min-[1440px]:block min-[1440px]:h-[1853px] min-[1440px]:px-0 min-[1440px]:py-0">
        <h2 className="font-[family-name:var(--font-poppins)] text-[30px] leading-[1.15] font-light tracking-[-0.6px] text-[#C01F25] sm:text-[34px] md:text-[44px] md:tracking-[-1px] lg:text-[52px] lg:leading-[1.1] lg:tracking-[-1.4px] min-[1440px]:absolute min-[1440px]:top-[84px] min-[1440px]:left-[108px] min-[1440px]:w-[827px] min-[1440px]:text-[61px] min-[1440px]:leading-[1.075] min-[1440px]:tracking-[-1.83px]">
          <span className="block">See What's Holding Your Business Back Online</span>
     
        </h2>

        <p className="font-[family-name:var(--font-poppins)] text-[16px] leading-[24px] font-normal tracking-[-0.3px] text-black sm:text-[18px] sm:leading-[27px] md:text-[22px] md:leading-[30px] lg:text-[26px] lg:leading-[34px] lg:tracking-[-0.6px] min-[1440px]:absolute min-[1440px]:top-[240px] min-[1440px]:left-[115px] min-[1440px]:w-[963px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
          <span className="block">
            Complete the form below to receive a personalized review of your branding, website, and digital marketing. We'll identify missed opportunities and show you practical ways to attract more customers.
          </span>
        </p>

        <form
          method="POST"
          name="Lead Form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contents"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="Lead Form" />

          {/*
            Honeypot. Hidden from people, so a real submission leaves it empty.
            Bots fill every field they find, and Netlify discards any submission
            where this one is non-empty. Kept identical to public/__forms.html —
            both files are detected as the form named "Lead Form", so their
            field definitions must match.
          */}
          <p className="hidden">
            <label>
              Do not fill this out if you are human:{" "}
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <h3 className="font-[family-name:var(--font-poppins)] text-[20px] leading-[26px] font-bold tracking-[-0.4px] text-[#C01F25] sm:text-[22px] md:text-[26px] lg:text-[28px] lg:tracking-[-0.7px] min-[1440px]:absolute min-[1440px]:top-[341px] min-[1440px]:left-[121px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
            Contact Details
          </h3>

          <label className="flex w-full flex-col gap-2 rounded-[16px] bg-white px-5 py-4 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] sm:px-6 sm:py-5 lg:gap-3 lg:px-8 lg:py-6 min-[1440px]:absolute min-[1440px]:top-[399px] min-[1440px]:left-[115px] min-[1440px]:h-[73px] min-[1440px]:w-[600px] min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:gap-[10px] min-[1440px]:px-0 min-[1440px]:py-0 min-[1440px]:pl-[29px] min-[1440px]:pr-[24px]">
            <span className="shrink-0 font-[family-name:var(--font-poppins)] text-[16px] leading-[22px] tracking-[-0.3px] text-black sm:text-[18px] md:text-[20px] lg:text-[24px] min-[1440px]:text-[27px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.81px]">
              Full Name<span className="text-[#C01F25]">*</span>
            </span>
            <input
              type="text"
              name="fullName"
              className="h-[52px] w-full min-w-0 rounded-[10px] border border-[#E3E3E3] bg-transparent px-4 font-[family-name:var(--font-poppins)] text-[16px] tracking-[-0.3px] text-black outline-none sm:h-[56px] sm:text-[18px] md:text-[20px] lg:h-[60px] lg:text-[24px] min-[1440px]:h-full min-[1440px]:flex-1 min-[1440px]:rounded-none min-[1440px]:border-0 min-[1440px]:px-0 min-[1440px]:text-[27px] min-[1440px]:tracking-[-0.81px]"
            />
          </label>

          <label className="flex w-full flex-col gap-2 rounded-[16px] bg-white px-5 py-4 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] sm:px-6 sm:py-5 lg:gap-3 lg:px-8 lg:py-6 min-[1440px]:absolute min-[1440px]:top-[399px] min-[1440px]:left-[732px] min-[1440px]:h-[73px] min-[1440px]:w-[600px] min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:gap-[10px] min-[1440px]:px-0 min-[1440px]:py-0 min-[1440px]:pl-[40px] min-[1440px]:pr-[24px]">
            <span className="shrink-0 font-[family-name:var(--font-poppins)] text-[16px] leading-[22px] tracking-[-0.3px] text-black sm:text-[18px] md:text-[20px] lg:text-[24px] min-[1440px]:text-[27px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.81px]">
              Contact No.<span className="text-[#C01F25]">*</span>{" "}
              <span className="text-[13px] text-[#A6A6A6] sm:text-[14px] lg:text-[18px] min-[1440px]:text-[21px]">
                (numbers only)
              </span>
            </span>
            <input
              type="tel"
              name="contactNumber"
              className="h-[52px] w-full min-w-0 rounded-[10px] border border-[#E3E3E3] bg-transparent px-4 font-[family-name:var(--font-poppins)] text-[16px] tracking-[-0.3px] text-black outline-none sm:h-[56px] sm:text-[18px] md:text-[20px] lg:h-[60px] lg:text-[24px] min-[1440px]:h-full min-[1440px]:flex-1 min-[1440px]:rounded-none min-[1440px]:border-0 min-[1440px]:px-0 min-[1440px]:text-[27px] min-[1440px]:tracking-[-0.81px]"
            />
          </label>

          <label className="flex w-full flex-col gap-2 rounded-[16px] bg-white px-5 py-4 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] sm:px-6 sm:py-5 lg:gap-3 lg:px-8 lg:py-6 min-[1440px]:absolute min-[1440px]:top-[499px] min-[1440px]:left-[115px] min-[1440px]:h-[73px] min-[1440px]:w-[1217px] min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:gap-[10px] min-[1440px]:px-0 min-[1440px]:py-0 min-[1440px]:pl-[29px] min-[1440px]:pr-[24px]">
            <span className="shrink-0 font-[family-name:var(--font-poppins)] text-[16px] leading-[22px] tracking-[-0.3px] text-black sm:text-[18px] md:text-[20px] lg:text-[24px] min-[1440px]:text-[27px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.81px]">
              Email Address<span className="text-[#C01F25]">*</span>
            </span>
            <input
              type="email"
              name="email"
              className="h-[52px] w-full min-w-0 rounded-[10px] border border-[#E3E3E3] bg-transparent px-4 font-[family-name:var(--font-poppins)] text-[16px] tracking-[-0.3px] text-black outline-none sm:h-[56px] sm:text-[18px] md:text-[20px] lg:h-[60px] lg:text-[24px] min-[1440px]:h-full min-[1440px]:flex-1 min-[1440px]:rounded-none min-[1440px]:border-0 min-[1440px]:px-0 min-[1440px]:text-[27px] min-[1440px]:tracking-[-0.81px]"
            />
          </label>

          <h3 className="font-[family-name:var(--font-poppins)] text-[20px] leading-[26px] font-bold tracking-[-0.4px] text-[#C01F25] sm:text-[22px] md:text-[26px] lg:text-[28px] lg:tracking-[-0.7px] min-[1440px]:absolute min-[1440px]:top-[613px] min-[1440px]:left-[121px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
            Business Information
          </h3>

          <label className="flex w-full flex-col gap-2 rounded-[16px] bg-white px-5 py-4 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] sm:px-6 sm:py-5 lg:gap-3 lg:px-8 lg:py-6 min-[1440px]:absolute min-[1440px]:top-[679px] min-[1440px]:left-[121px] min-[1440px]:h-[73px] min-[1440px]:w-[1211px] min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:gap-[10px] min-[1440px]:px-0 min-[1440px]:py-0 min-[1440px]:pl-[29px] min-[1440px]:pr-[24px]">
            <span className="shrink-0 font-[family-name:var(--font-poppins)] text-[16px] leading-[22px] tracking-[-0.3px] text-black sm:text-[18px] md:text-[20px] lg:text-[24px] min-[1440px]:text-[27px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.81px]">
              Business Name
            </span>
            <input
              type="text"
              name="businessName"
              className="h-[52px] w-full min-w-0 rounded-[10px] border border-[#E3E3E3] bg-transparent px-4 font-[family-name:var(--font-poppins)] text-[16px] tracking-[-0.3px] text-black outline-none sm:h-[56px] sm:text-[18px] md:text-[20px] lg:h-[60px] lg:text-[24px] min-[1440px]:h-full min-[1440px]:flex-1 min-[1440px]:rounded-none min-[1440px]:border-0 min-[1440px]:px-0 min-[1440px]:text-[27px] min-[1440px]:tracking-[-0.81px]"
            />
          </label>

          <p className="font-[family-name:var(--font-poppins)] text-[18px] leading-[26px] font-semibold tracking-[-0.4px] text-black sm:text-[20px] md:text-[24px] lg:text-[27px] min-[1440px]:absolute min-[1440px]:top-[787px] min-[1440px]:left-[121px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
            Do you currently have a website?{" "}
            <span className="text-[#C01F25]">*</span>
          </p>

          <label className="flex items-center gap-3 font-[family-name:var(--font-poppins)] text-[15px] leading-[20px] tracking-[-0.3px] text-black sm:text-[17px] lg:gap-4 lg:text-[24px] min-[1440px]:absolute min-[1440px]:top-[858px] min-[1440px]:left-[117px] min-[1440px]:gap-[19px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
            <input
              type="radio"
              name="hasWebsite"
              value="yes"
              className={RADIO_CLASS}
            />
            <span>
              <span className="font-bold">Yes,</span> Current Website Address :{" "}
              <span className="text-[13px] tracking-[-0.3px] font-normal sm:text-[14px] lg:text-[19px] min-[1440px]:text-[25px] min-[1440px]:tracking-[-0.75px]">
                (Optional )
              </span>
            </span>
          </label>

          <input
            type="url"
            name="websiteUrl"
            aria-label="Current website address"
            className="h-[52px] w-full rounded-[10px] border border-[#E3E3E3] bg-white px-4 font-[family-name:var(--font-poppins)] text-[16px] text-black shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] outline-none sm:h-[56px] sm:text-[18px] lg:h-[60px] min-[1440px]:absolute min-[1440px]:top-[838px] min-[1440px]:left-[818px] min-[1440px]:h-[73px] min-[1440px]:w-[514px] min-[1440px]:rounded-[16px] min-[1440px]:border-0 min-[1440px]:px-[24px] min-[1440px]:text-[27px]"
          />

          <label className="flex items-center gap-3 font-[family-name:var(--font-poppins)] text-[15px] leading-[20px] tracking-[-0.3px] text-black sm:text-[17px] lg:gap-4 lg:text-[24px] min-[1440px]:absolute min-[1440px]:top-[911px] min-[1440px]:left-[117px] min-[1440px]:gap-[19px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
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

          <div className="w-full min-[1440px]:absolute min-[1440px]:top-[989px] min-[1440px]:left-[121px] min-[1440px]:w-[763px]">
            <p className="font-[family-name:var(--font-poppins)] text-[18px] leading-[24px] font-semibold tracking-[-0.4px] text-black sm:text-[20px] md:text-[24px] lg:text-[27px] min-[1440px]:text-[30px] min-[1440px]:leading-[41px] min-[1440px]:tracking-[-0.9px]">
              What does your business do?{" "}
              <span className="text-[#C01F25]">*</span>
            </p>
            <p className="mt-1 font-[family-name:var(--font-poppins)] text-[14px] leading-[22px] font-normal tracking-[-0.3px] text-[#7B7B7B] sm:text-[15px] md:text-[18px] lg:text-[21px] min-[1440px]:mt-0 min-[1440px]:text-[24px] min-[1440px]:leading-[41px] min-[1440px]:tracking-[-0.9px]">
              Tell us about your business, services, products and ideal
              customers.
            </p>
          </div>

          <textarea
            name="businessDescription"
            aria-label="What does your business do?"
            className="h-[140px] w-full resize-none rounded-[16px] border border-[#E3E3E3] bg-white p-4 font-[family-name:var(--font-poppins)] text-[15px] text-black shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] outline-none sm:h-[160px] sm:p-5 sm:text-[16px] lg:h-[180px] lg:text-[18px] min-[1440px]:absolute min-[1440px]:top-[1096px] min-[1440px]:left-[123px] min-[1440px]:h-[154px] min-[1440px]:w-[1209px] min-[1440px]:border-0 min-[1440px]:p-[24px] min-[1440px]:text-[20px]"
          />

          <p className="font-[family-name:var(--font-poppins)] text-[18px] leading-[26px] font-semibold tracking-[-0.4px] text-black sm:text-[20px] md:text-[24px] lg:text-[27px] min-[1440px]:absolute min-[1440px]:top-[1320px] min-[1440px]:left-[121px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
            How would you like us to contact you?
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8 min-[1440px]:absolute min-[1440px]:top-[1383px] min-[1440px]:left-[121px] min-[1440px]:flex-row min-[1440px]:flex-nowrap min-[1440px]:items-center min-[1440px]:gap-[64px]">
            <label className="flex items-center gap-[10px] font-[family-name:var(--font-poppins)] text-[16px] leading-[22px] font-semibold tracking-[-0.4px] text-black sm:text-[18px] md:text-[22px] lg:text-[26px] min-[1440px]:gap-[16px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                className={RADIO_CLASS}
              />
              Phone Call
            </label>
            <label className="flex items-center gap-[10px] font-[family-name:var(--font-poppins)] text-[16px] leading-[22px] font-semibold tracking-[-0.4px] text-black sm:text-[18px] md:text-[22px] lg:text-[26px] min-[1440px]:gap-[16px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
              <input
                type="radio"
                name="contactMethod"
                value="whatsapp"
                className={RADIO_CLASS}
              />
              WhatsApp
            </label>
            <label className="flex items-center gap-[10px] font-[family-name:var(--font-poppins)] text-[16px] leading-[22px] font-semibold tracking-[-0.4px] text-black sm:text-[18px] md:text-[22px] lg:text-[26px] min-[1440px]:gap-[16px] min-[1440px]:text-[30px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.9px]">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                className={RADIO_CLASS}
              />
              Email
            </label>
          </div>

          <label className="flex items-start gap-3 min-[1440px]:absolute min-[1440px]:top-[1457px] min-[1440px]:left-[121px] min-[1440px]:items-center min-[1440px]:gap-[15px]">
            <input
              type="checkbox"
              name="newsletterOptIn"
              className="size-[35px] shrink-0 appearance-none rounded-[5px] border border-[#1A1A1A] bg-white outline-none checked:bg-[#C01F25]"
            />
            <span className="font-[family-name:var(--font-poppins)] text-[14px] leading-[20px] font-normal tracking-[-0.3px] text-black sm:text-[16px] md:text-[18px] lg:text-[21px] min-[1440px]:text-[25px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-0.75px]">
              Sign up for the monthly free of cost social media designs for
              your business.
            </span>
          </label>

          <button
            type="submit"
            className="flex h-[60px] w-full items-center justify-center rounded-[16px] bg-[#C01F25] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#A1181C] sm:h-[68px] md:h-[80px] lg:h-[92px] min-[1440px]:absolute min-[1440px]:top-[1580px] min-[1440px]:left-[121px] min-[1440px]:h-[111px] min-[1440px]:w-[1211px]"
          >
            <span className="font-[family-name:var(--font-poppins)] text-[18px] leading-[24px] font-bold tracking-[-0.5px] text-white sm:text-[20px] md:text-[26px] lg:text-[34px] min-[1440px]:text-[43px] min-[1440px]:leading-[32px] min-[1440px]:tracking-[-1.29px]">
              Let&apos;s Build Your Brand Together &gt;
            </span>
          </button>

          {status === "success" && (
            <p className="font-[family-name:var(--font-poppins)] text-[15px] text-green-600 sm:text-[16px] lg:text-[18px] min-[1440px]:absolute min-[1440px]:top-[1706px] min-[1440px]:left-[121px] min-[1440px]:text-[22px]">
              Thank you! Your request has been received.
            </p>
          )}

          {status === "error" && (
            <p className="font-[family-name:var(--font-poppins)] text-[15px] text-[#C01F25] sm:text-[16px] lg:text-[18px] min-[1440px]:absolute min-[1440px]:top-[1706px] min-[1440px]:left-[121px] min-[1440px]:text-[22px]">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
