import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Coins,
  Eye,
  Gift,
  UsersRound,
  Sparkles,
} from "lucide-react";

const VeloopHero = () => {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#050814] pt-[72px] text-white">

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-[-180px] top-[100px] h-[400px] w-[400px] rounded-full bg-[#7c3aed]/20 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#06b6d4]/15 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#7c3aed]/5 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[648px] max-w-[1200px] items-center px-5 py-16 sm:px-7 lg:px-8">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

          {/* ================= LEFT ================= */}

          <div className="text-center lg:text-left">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 text-[10px] font-black tracking-[1.5px] text-[#b79cff]">
              <Sparkles size={13} />
              TURN YOUR TIME INTO REWARDS
            </div>

            <h1 className="text-[42px] font-black leading-[1.03] tracking-[-1.5px] sm:text-[58px] lg:text-[70px]">
              Earn More.
              <br />

              <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#22d3ee] bg-clip-text text-transparent">
                Redeem Better.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-[#858da6] sm:text-base lg:mx-0">
              Discover simple ways to earn VEs, grow your reward balance
              and unlock exciting rewards with Veloop.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

              <button className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-7 py-4 text-sm font-black shadow-[0_15px_50px_rgba(124,58,237,.3)] transition duration-300 hover:-translate-y-1">
                Start Earning Free

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-black text-[#aeb5c7] transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                See How It Works
              </a>

            </div>

            {/* Trust */}

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-[10px] font-bold text-[#697188] lg:justify-start">

              <span>✓ No joining fee</span>
              <span>✓ Multiple earning methods</span>
              <span>✓ Easy redemption</span>

            </div>

          </div>


          {/* ================= WALLET ================= */}

          <div className="relative mx-auto w-full max-w-[470px]">

            {/* Floating Coin */}

            <div className="absolute -left-5 top-16 z-20 hidden animate-bounce sm:block">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-[#fbbf24]/40 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-2xl shadow-[0_0_40px_rgba(245,158,11,.35)]">
                🪙
              </div>
            </div>

            <div className="absolute -right-2 top-5 z-20 animate-pulse">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10">
                <Coins className="text-[#22d3ee]" size={22} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#11172a] to-[#080c18] p-5 shadow-[0_30px_100px_rgba(0,0,0,.55)] sm:p-7">

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#7c3aed]/20 blur-[80px]" />

              {/* Wallet Header */}

              <div className="relative flex items-center justify-between">

                <div>
                  <p className="text-[9px] font-black tracking-[2px] text-[#697188]">
                    YOUR REWARD BALANCE
                  </p>

                  <p className="mt-2 text-4xl font-black">
                    6,000
                    <span className="ml-2 text-sm text-[#8b5cf6]">
                      VEs
                    </span>
                  </p>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#22d3ee]">
                  <Coins size={23} />
                </div>

              </div>


              {/* Conversion */}

              <div className="relative mt-7 rounded-2xl border border-white/10 bg-white/[.035] p-4">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[9px] font-black tracking-[1.5px] text-[#697188]">
                      ESTIMATED VALUE
                    </p>

                    <p className="mt-1 text-2xl font-black">
                      ₹60
                    </p>
                  </div>

                  <div className="rounded-full bg-[#35d399]/10 px-3 py-1.5 text-[9px] font-black text-[#35d399]">
                    VEs → ₹
                  </div>

                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#22d3ee]" />
                </div>

              </div>


              {/* Activity */}

              <div className="relative mt-5">

                <div className="mb-3 flex justify-between">
                  <p className="text-xs font-black">
                    Recent Earnings
                  </p>

                  <span className="text-[9px] font-bold text-[#697188]">
                    TODAY
                  </span>
                </div>


                {[
                  ["Watch Ads", "+50 VEs", Eye],
                  ["Daily Bonus", "+100 VEs", Gift],
                  ["Referral", "+500 VEs", UsersRound],
                ].map(([name, amount, Icon]) => (

                  <div
                    key={name}
                    className="mb-2 flex items-center justify-between rounded-xl border border-white/[.06] bg-white/[.025] p-3 transition hover:bg-white/[.07]"
                  >

                    <div className="flex items-center gap-3">

                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#8b5cf6]/10">
                        <Icon
                          size={16}
                          className="text-[#a78bfa]"
                        />
                      </div>

                      <span className="text-xs font-bold text-[#aeb5c7]">
                        {name}
                      </span>

                    </div>

                    <span className="text-xs font-black text-[#35d399]">
                      {amount}
                    </span>

                  </div>

                ))}

              </div>


              <button className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-black text-[#080c17] transition hover:bg-[#e9eaff]">
                Explore Rewards
                <ArrowUpRight size={15} />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VeloopHero;