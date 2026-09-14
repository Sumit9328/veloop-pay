import React from "react";
import { Star } from "lucide-react";

const VeloopTestimonials = () => {

  const testimonials = [
    {
      name: "Approved Customer Review",
      role: "Customer",
      text: "Approved review content will be placed here.",
    },
    {
      name: "Approved Customer Review",
      role: "Customer",
      text: "Approved review content will be placed here.",
    },
    {
      name: "Approved Customer Review",
      role: "Customer",
      text: "Approved review content will be placed here.",
    },
  ];

  return (
    <section className="bg-[#050814] py-20 sm:py-24">

      <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-8">

        <div className="text-center">

          <span className="text-[10px] font-black tracking-[3px] text-[#8b5cf6]">
            COMMUNITY
          </span>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            What our{" "}
            <span className="text-[#22d3ee]">
              users say
            </span>
          </h2>

        </div>


        <div className="mt-12 grid gap-4 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="rounded-[24px] border border-white/[.07] bg-[#0b1020] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/30"
            >

              <div className="flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={13}
                    fill="currentColor"
                    className="text-[#f59e0b]"
                  />
                ))}

              </div>

              <p className="mt-5 text-sm leading-6 text-[#8c95ab]">
                “{item.text}”
              </p>

              <div className="mt-6 flex items-center gap-3">

                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] text-xs font-black">
                  V
                </div>

                <div>
                  <p className="text-xs font-black">
                    {item.name}
                  </p>

                  <p className="mt-0.5 text-[9px] text-[#697188]">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default VeloopTestimonials;