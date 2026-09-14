import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const VeloopFAQ = () => {

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What are VEs?",
      answer:
        "VEs are Veloop reward units that can be earned through eligible activities and used towards available rewards.",
    },
    {
      question: "How can I earn VEs?",
      answer:
        "You can earn VEs through activities such as Watch Ads, Tap & Earn, Stake & Earn, referrals, daily bonuses and other eligible opportunities.",
    },
    {
      question: "Can I redeem my VEs?",
      answer:
        "Yes. Once you have enough VEs for an available reward, you can select the reward and continue through the redemption process.",
    },
    {
      question: "How does referral earning work?",
      answer:
        "Share your referral invitation with friends. Eligible referral activity can add VEs to your account according to the applicable reward rules.",
    },
    {
      question: "Is Veloop mobile friendly?",
      answer:
        "Yes. Veloop is designed to provide a smooth experience across mobile, tablet and desktop devices.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#080c18] py-20 sm:py-24"
    >

      <div className="mx-auto max-w-[850px] px-5 sm:px-7">

        <div className="text-center">

          <span className="text-[10px] font-black tracking-[3px] text-[#22d3ee]">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Frequently asked{" "}
            <span className="text-[#a78bfa]">
              questions
            </span>
          </h2>

        </div>


        <div className="mt-10 space-y-3">

          {faqs.map((faq, index) => {

            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-[#8b5cf6]/30 bg-[#0d1325]"
                    : "border-white/[.07] bg-[#0b1020]"
                }`}
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >

                  <span className="text-sm font-black">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#8b5cf6] transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>


                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-5 pb-5 text-xs leading-6 text-[#747d96] sm:px-6">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default VeloopFAQ;
