import React, { useRef } from "react";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Smartphone,
  BadgeCheck,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const WhyVeloop = () => {
  const sliderRef = useRef(null);

  const features = [
    {
      icon: Zap,
      title: "Instant Rewards",
      text: "Earn VEs instantly after completing eligible activities.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      text: "Your account, rewards and redemption details stay protected.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Balance",
      text: "Multiple earning methods give you more ways to grow.",
    },
    {
      icon: Wallet,
      title: "Easy Redemption",
      text: "Redeem available rewards through a simple process.",
    },
    {
      icon: Smartphone,
      title: "Made For Mobile",
      text: "A smooth experience designed for everyday mobile users.",
    },
    {
      icon: BadgeCheck,
      title: "Transparent Rewards",
      text: "Clear reward values and straightforward redemption.",
    },
  ];

  const slide = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.clientWidth * 0.82;

    sliderRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="why-veloop"
      className="bg-[#050814] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <span className="text-[10px] font-black tracking-[3px] text-[#22d3ee]">
              WHY VELOOP
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Built around{" "}
              <span className="text-[#a78bfa]">
                your rewards.
              </span>
            </h2>
          </div>

          <p className="max-w-[420px] text-sm leading-6 text-[#747d96]">
            Everything you need to earn, track and redeem rewards in one
            simple experience.
          </p>

        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="relative mt-12 sm:hidden">

          {/* Left Button */}
          <button
            onClick={() => slide(-1)}
            className="absolute left-1 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#11172a]/90 text-white backdrop-blur-md"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group min-w-[82%] snap-center rounded-[24px] border border-white/[.07] bg-[#0b1020] p-6 transition duration-500 active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between">

                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7c3aed]/15 to-[#06b6d4]/10">
                      <Icon
                        size={22}
                        className="text-[#a78bfa]"
                      />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-white/15"
                    />

                  </div>

                  <h3 className="mt-6 text-base font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#737d95]">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={() => slide(1)}
            className="absolute right-1 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#11172a]/90 text-white backdrop-blur-md"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`h-1.5 rounded-full ${
                  index === 0
                    ? "w-5 bg-[#a78bfa]"
                    : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="mt-12 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[24px] border border-white/[.07] bg-[#0b1020] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/30"
              >

                <div className="flex items-center justify-between">

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7c3aed]/15 to-[#06b6d4]/10">
                    <Icon
                      size={22}
                      className="text-[#a78bfa]"
                    />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/15 transition group-hover:text-[#22d3ee]"
                  />

                </div>

                <h3 className="mt-6 text-base font-black">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#737d95]">
                  {feature.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyVeloop;