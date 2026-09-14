import React from "react";
import {
  Eye,
  MousePointerClick,
  Coins,
  UsersRound,
  Gift,
  ArrowUpRight,
} from "lucide-react";

const WaysToEarn = () => {

  const ways = [
    {
      icon: Eye,
      title: "Watch Ads",
      text: "Watch short engaging ads and earn VEs instantly.",
      reward: "+50 VEs",
      color: "#8b5cf6",
    },
    {
      icon: MousePointerClick,
      title: "Tap & Earn",
      text: "Complete simple actions and collect rewards with every tap.",
      reward: "+25 VEs",
      color: "#06b6d4",
    },
    {
      icon: Coins,
      title: "Stake & Earn",
      text: "Put your VEs to work and grow your reward balance.",
      reward: "Up to 12%",
      color: "#f59e0b",
    },
    {
      icon: UsersRound,
      title: "Refer & Earn",
      text: "Invite friends to Veloop and earn rewards together.",
      reward: "+500 VEs",
      color: "#ec4899",
    },
    {
      icon: Gift,
      title: "Daily Bonus",
      text: "Return every day and claim your daily VEs bonus.",
      reward: "Daily Reward",
      color: "#10b981",
    },
  ];

  return (
    <section id="earn" className="relative bg-[#050814] py-20 sm:py-24">

      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-7 lg:px-8">

        <div className="mx-auto max-w-[680px] text-center">

          <span className="text-[10px] font-black tracking-[3px] text-[#8b5cf6]">
            WAYS TO EARN
          </span>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            More ways to{" "}
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
              earn VEs
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#747d96] sm:text-base">
            Pick the activities you enjoy and keep growing your reward
            balance.
          </p>

        </div>


        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {ways.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[24px] border border-white/[.08] bg-[#0b1020] p-5 transition duration-500 hover:-translate-y-2 hover:border-white/20"
              >

                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-[45px] transition group-hover:opacity-40"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <div
                  className="relative grid h-14 w-14 place-items-center rounded-2xl border bg-[#080c17]"
                  style={{
                    borderColor: `${item.color}40`,
                  }}
                >
                  <Icon
                    size={25}
                    style={{ color: item.color }}
                  />
                </div>

                <h3 className="relative mt-6 text-base font-black">
                  {item.title}
                </h3>

                <p className="relative mt-2 min-h-[65px] text-xs leading-5 text-[#7d869e]">
                  {item.text}
                </p>

                <div
                  className="relative mt-5 inline-flex rounded-full border px-3 py-1.5 text-[9px] font-black"
                  style={{
                    color: item.color,
                    borderColor: `${item.color}45`,
                    backgroundColor: `${item.color}12`,
                  }}
                >
                  {item.reward}
                </div>

                <ArrowUpRight
                  size={18}
                  className="absolute bottom-5 right-5 text-white/15 transition group-hover:text-white"
                />

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WaysToEarn;