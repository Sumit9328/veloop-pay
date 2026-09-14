import React from "react";
import {
  UserPlus,
  Coins,
  TrendingUp,
  Wallet,
} from "lucide-react";

const RewardJourney = () => {

  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Join",
      text: "Create your Veloop account and begin your rewards journey.",
    },
    {
      number: "02",
      icon: Coins,
      title: "Earn",
      text: "Complete activities and collect VEs from multiple sources.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Grow",
      text: "Keep earning and build your reward balance.",
    },
    {
      number: "04",
      icon: Wallet,
      title: "Redeem",
      text: "Use your VEs to unlock available rewards.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#080c18] py-20 sm:py-24"
    >

      <div className="mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-8">

        <div className="mx-auto max-w-[700px] text-center">

          <span className="text-[10px] font-black tracking-[3px] text-[#8b5cf6]">
            HOW IT WORKS
          </span>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Join. Earn. Grow.{" "}
            <span className="text-[#22d3ee]">
              Redeem.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#747d96] sm:text-base">
            A simple journey from your first activity to your first reward.
          </p>

        </div>


        <div className="relative mt-14 grid gap-8 md:grid-cols-4">

          {/* Desktop Connector */}

          <div className="absolute left-[12%] right-[12%] top-[42px] hidden h-px bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#22d3ee] md:block" />

          {steps.map((step) => {

            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative text-center"
              >

                <div className="relative mx-auto grid h-[84px] w-[84px] place-items-center rounded-full border border-[#8b5cf6]/30 bg-[#0b1020] transition duration-500 group-hover:scale-110 group-hover:border-[#22d3ee]/50">

                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4]">
                    <Icon size={24} />
                  </div>

                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-[#11172a] text-[9px] font-black">
                    {step.number}
                  </span>

                </div>

                <h3 className="mt-6 text-lg font-black">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-[#747d96]">
                  {step.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default RewardJourney;