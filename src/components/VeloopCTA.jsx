import React from "react";
import { ArrowRight, Coins, Sparkles } from "lucide-react";

const VeloopCTA = () => {
  return (
    <section className="bg-[#050814] px-5 pb-20 pt-10 sm:px-7 sm:pb-24">

      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] border border-[#8b5cf6]/20 bg-gradient-to-br from-[#17132d] via-[#10172b] to-[#081822] px-6 py-14 text-center sm:px-10">

        <div className="absolute left-1/2 top-[-160px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#7c3aed]/20 blur-[100px]" />

        <div className="relative">

          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] shadow-[0_0_35px_rgba(124,58,237,.3)]">
            <Coins size={27} />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-black tracking-[2px] text-[#a78bfa]">
            <Sparkles size={13} />
            START YOUR REWARD JOURNEY
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Ready to start earning?
          </h2>

          <p className="mx-auto mt-4 max-w-[580px] text-sm leading-6 text-[#7b859e] sm:text-base">
            Join Veloop, discover new ways to earn VEs and turn your
            activity into rewards.
          </p>

          <button className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-8 py-4 text-sm font-black shadow-[0_15px_50px_rgba(124,58,237,.3)] transition hover:-translate-y-1">
            Start Earning Now

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>

        </div>

      </div>
    </section>
  );
};

export default VeloopCTA;