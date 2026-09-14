import React from "react";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Smartphone,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const WhyVeloop = () => {

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

  return (
    <section
      id="why-veloop"
      className="bg-[#050814] py-20 sm:py-24"
    >

      <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-8">

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


        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

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