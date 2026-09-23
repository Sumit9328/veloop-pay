import React from "react";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const VeloopTestimonials = () => {
  const testimonials = [
    {
      name: "Approved Customers valuable Review",
      role: "Customer",
      text: "Approved review content will be placed here.",
    },
    {
      name: "Approved Customer valuable Review",
      role: "Customer",
      text: "Approved review content will be placed here.",
    },
    {
      name: "Approved Customer valuable Review",
      role: "Customer",
      text: "Approved review content will be placed here.",
    },
  ];

  const TestimonialCard = ({ item }) => (
    <div className="rounded-[24px] border border-white/[.07] bg-[#0b1020] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/30">
      {/* Stars */}
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

      {/* Review */}
      <p className="mt-5 text-sm leading-6 text-[#8c95ab]">“{item.text}”</p>

      {/* User */}
      <div className="mt-6 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] text-xs font-black">
          V
        </div>

        <div>
          <p className="text-xs font-black">{item.name}</p>

          <p className="mt-0.5 text-[9px] text-[#697188]">{item.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#050814] py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="text-[10px] font-black tracking-[3px] text-[#8b5cf6]">
            COMMUNITY
          </span>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            What our <span className="text-[#22d3ee]">users say</span>
          </h2>
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="mt-12 md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            speed={700}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="testimonial-swiper !pb-11"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="px-1">
                  <TestimonialCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="mt-12 hidden gap-4 md:grid md:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Pagination Styling */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          bottom: 0;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          width: 22px;
          border-radius: 999px;
          background: #22d3ee;
        }
      `}</style>
    </section>
  );
};

export default VeloopTestimonials;
