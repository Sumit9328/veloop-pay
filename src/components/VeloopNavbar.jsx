import React, { useState } from "react";
import { Menu, X, Coins } from "lucide-react";

const VeloopNavbar = () => {

  const [open, setOpen] = useState(false);

  const links = [
    ["Earn", "#earn"],
    ["How It Works", "#how-it-works"],
    ["Why Veloop", "#why-veloop"],
    ["Rewards", "#rewards"],
    ["FAQ", "#faq"],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[.06] bg-[#050814]/85 backdrop-blur-2xl">

      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-7 lg:px-8">

        <a href="#" className="flex items-center gap-3">

          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#22d3ee] font-black shadow-[0_0_30px_rgba(124,58,237,.3)]">
            V
          </div>

          <div>
            <p className="text-sm font-black tracking-[2px]">
              VELOOP
            </p>

            <p className="text-[8px] font-bold tracking-[3px] text-[#747d97]">
              REWARDS
            </p>
          </div>

        </a>


        <nav className="hidden items-center gap-8 md:flex">

          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative text-sm font-bold text-[#a2a9bc] transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#8b5cf6] after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}

        </nav>


        <div className="hidden items-center gap-3 sm:flex">

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-black">
            <Coins
              size={14}
              className="text-[#a78bfa]"
            />
            6,000 VEs
          </div>

          <button className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-5 py-2.5 text-xs font-black transition hover:-translate-y-0.5">
            Start Earning
          </button>

        </div>


        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>


      {open && (
        <div className="border-t border-white/5 bg-[#070b17] px-5 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-bold text-[#a2a9bc]"
              >
                {label}
              </a>
            ))}

            <button className="mt-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] py-3 text-sm font-black">
              Start Earning
            </button>

          </div>

        </div>
      )}

    </header>
  );
};

export default VeloopNavbar;