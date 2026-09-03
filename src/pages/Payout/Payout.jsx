import { useEffect, useState } from "react";
import { payoutOptions } from "../../data/payoutOptions";

const themes = {
  upi: {
    accent: "#8b5cf6",
    accentLight: "#a78bfa",
    soft: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.42)",
    badge: "INSTANT",
    banner: "Secure & Hassle-Free",
    action: "Instant Transfer",
    logo: "/images/upi-logo.png",
  },

  amazon: {
    accent: "#f59e0b",
    accentLight: "#fbbf24",
    soft: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.42)",
    badge: "POPULAR",
    banner: "Instant & Secure Delivery",
    action: "Instant Delivery",
    logo: "/images/amazon-logo.png",
  },

  googlePlay: {
    accent: "#06b6d4",
    accentLight: "#22d3ee",
    soft: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.42)",
    badge: "FAST",
    banner: "Instant & Hassle-Free",
    action: "Instant Delivery",
    logo: "/images/google-play-logo.png",
  },
};

function Payout() {
  const getMethodFromUrl = () => {
    const method = new URLSearchParams(window.location.search).get("method");

    return payoutOptions[method] ? method : "upi";
  };

  const [selectedMethod, setSelectedMethod] = useState(getMethodFromUrl);

  const [selectedReward, setSelectedReward] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [payoutDetails, setPayoutDetails] = useState("");

  const [isProcessing, setIsProcessing] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const [validationError, setValidationError] = useState("");

  // Demo balance
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("veloop-demo-balance");

    return savedBalance ? Number(savedBalance) : 6000;
  });

  const currentMethod = payoutOptions[selectedMethod];
  const theme = themes[selectedMethod];

  useEffect(() => {
    const method = getMethodFromUrl();

    if (method !== selectedMethod) {
      setSelectedMethod(method);
      setSelectedReward(null);
    }
  }, []);

  const selectMethod = (methodId) => {
    setSelectedMethod(methodId);
    setSelectedReward(null);
    setPayoutDetails("");
    setValidationError("");
    setIsModalOpen(false);
    setIsSuccess(false);

    const url = new URL(window.location.href);

    url.searchParams.set("method", methodId);

    window.history.replaceState({}, "", url);
  };

  const openModal = () => {
    if (!selectedReward || balance < selectedReward.requiredVEs) {
      return;
    }

    setPayoutDetails("");
    setValidationError("");
    setIsSuccess(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isProcessing) return;

    setIsModalOpen(false);
    setValidationError("");
    setPayoutDetails("");
  };

  const handleConfirmRedemption = () => {
    setValidationError("");

    const value = payoutDetails.trim();

    if (!value) {
      setValidationError(
        selectedMethod === "upi"
          ? "Please enter your UPI ID."
          : "Please enter your email address.",
      );

      return;
    }

    if (selectedMethod === "upi") {
      const upiRegex = /^[\w.-]+@[\w.-]+$/;

      if (!upiRegex.test(value)) {
        setValidationError("Please enter a valid UPI ID.");
        return;
      }
    }

    if (selectedMethod !== "upi") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        setValidationError("Please enter a valid email address.");

        return;
      }
    }

    setIsProcessing(true);

    setTimeout(() => {
      const newBalance = balance - selectedReward.requiredVEs;

      setBalance(newBalance);

      localStorage.setItem("veloop-demo-balance", String(newBalance));

      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050814] text-white">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="border-b border-white/5 bg-[#070b17]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#22d3ee] text-sm font-black text-white shadow-lg">
              VR
            </div>

            <div>
              <p className="text-sm font-black tracking-wide">VELOOP</p>

              <p className="text-[10px] font-bold tracking-[2px] text-[#7f879e]">
                REWARDS
              </p>
            </div>
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-white">
            {balance.toLocaleString()} VEs
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1200px] px-4 py-7 sm:px-6 lg:px-8">
        {/* Back */}

        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-6 flex items-center gap-2 text-sm font-bold text-[#8991aa] transition hover:text-white"
        >
          <span className="text-xl">←</span>
          Back to Rewards
        </button>

        {/* =================================================
            HERO
        ================================================== */}

        <section
          className="relative overflow-hidden rounded-[28px] border p-6 shadow-2xl sm:p-8 lg:p-9"
          style={{
            background: `linear-gradient(135deg, ${theme.soft}, rgba(10,14,28,0.98) 70%)`,
            borderColor: theme.border,
            boxShadow: `0 20px 70px ${theme.soft}`,
          }}
        >
          {/* Glow */}

          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              backgroundColor: theme.accent,
              opacity: 0.13,
            }}
          />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full border px-3 py-1.5 text-[11px] font-black tracking-wider"
                  style={{
                    color: theme.accentLight,
                    borderColor: theme.border,
                    backgroundColor: theme.soft,
                  }}
                >
                  {theme.badge === "INSTANT" && "⚡ "}
                  {theme.badge === "POPULAR" && "★ "}
                  {theme.badge === "FAST" && "ϟ "}
                  {theme.badge}
                </span>

                <span className="text-xs font-semibold text-[#858da5]">
                  Instant redemption
                </span>
              </div>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[46px]">
                {currentMethod.name}
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#8c94ad] sm:text-base">
                Redeem your VEs for {currentMethod.name} vouchers quickly,
                securely and hassle-free.
              </p>
            </div>

            {/* Actual logo */}

            <div
              className="grid h-32 w-32 shrink-0 place-items-center rounded-[28px] border bg-white p-3 shadow-2xl"
              style={{
                borderColor: theme.border,
                boxShadow: `0 15px 50px ${theme.soft}`,
              }}
            >
              <img
                src={theme.logo}
                alt={`${currentMethod.name} logo`}
                className="h-full w-full scale-110 object-contain"
              />
            </div>
          </div>
        </section>

        {/* =================================================
            SECURITY BANNER
        ================================================== */}

        <section
          className="mt-6 flex items-center gap-4 rounded-[20px] border px-5 py-4"
          style={{
            backgroundColor: theme.soft,
            borderColor: theme.border,
          }}
        >
          <div
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border bg-[#090d1b] text-xl"
            style={{
              color: theme.accentLight,
              borderColor: theme.border,
            }}
          >
            🛡
          </div>

          <div>
            <p className="font-black" style={{ color: theme.accentLight }}>
              {theme.banner}
            </p>

            <p className="mt-1 text-xs leading-5 text-[#858da6] sm:text-sm">
              Your reward will be processed securely after confirmation.
            </p>
          </div>
        </section>

        {/* =================================================
            PAYOUT METHODS
        ================================================== */}

        <section className="mt-10">
          <div className="mb-5">
            <p className="text-[10px] font-black tracking-[2px] text-[#747d98]">
              PAYOUT METHOD
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Choose your preferred method
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {Object.values(payoutOptions).map((method) => {
              const methodTheme = themes[method.id];

              const active = selectedMethod === method.id;

              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => selectMethod(method.id)}
                  className="flex items-center gap-4 rounded-2xl border bg-[#0c1020] p-4 text-left transition duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: active
                      ? methodTheme.accent
                      : "rgba(255,255,255,0.07)",
                    boxShadow: active
                      ? `0 10px 35px ${methodTheme.soft}`
                      : "none",
                  }}
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white p-2">
                    <img
                      src={methodTheme.logo}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-black">{method.name}</p>

                    <p className="mt-1 text-xs text-[#747d97]">
                      {method.processingTime}
                    </p>
                  </div>

                  {active && (
                    <div
                      className="ml-auto grid h-7 w-7 place-items-center rounded-full text-xs font-black text-white"
                      style={{
                        backgroundColor: methodTheme.accent,
                      }}
                    >
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* =================================================
            AVAILABLE VOUCHERS
        ================================================== */}

        <section className="mt-10">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p
                className="text-[10px] font-black tracking-[2px]"
                style={{
                  color: theme.accentLight,
                }}
              >
                AVAILABLE VOUCHERS
              </p>

              <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                Choose your reward
              </h2>

              <p className="mt-1.5 text-sm text-[#7f879f]">
                Select a voucher you are eligible to redeem.
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black text-[#aeb5c8]">
              Balance: {balance.toLocaleString()} VEs
            </div>
          </div>

          {/* =================================================
              4 COLUMN VOUCHER GRID
          ================================================== */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {currentMethod.options.map((option) => {
              const eligible = balance >= option.requiredVEs;

              const selected = selectedReward?.id === option.id;

              const progress = Math.min(
                (balance / option.requiredVEs) * 100,
                100,
              );

              const remaining = Math.max(option.requiredVEs - balance, 0);

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={!eligible}
                  onClick={() => setSelectedReward(option)}
                  className={`group relative min-h-[390px] overflow-hidden rounded-[20px] border p-4 text-left transition duration-300 ${
                    eligible
                      ? "hover:-translate-y-1"
                      : "cursor-not-allowed opacity-55"
                  }`}
                  style={{
                    borderColor: selected ? theme.accent : theme.border,

                    background: `linear-gradient(145deg, ${theme.soft}, rgba(8,12,25,0.98) 65%)`,

                    boxShadow: selected ? `0 15px 45px ${theme.soft}` : "none",
                  }}
                >
                  {/* Decorative dots */}

                  <div
                    className="pointer-events-none absolute right-0 top-0 h-28 w-28 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(${theme.accent} 1px, transparent 1px)`,
                      backgroundSize: "8px 8px",
                      maskImage:
                        "linear-gradient(to bottom left, black, transparent)",
                    }}
                  />

                  {/* Selected */}

                  {selected && (
                    <div
                      className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full text-xs font-black text-white shadow-lg"
                      style={{
                        backgroundColor: theme.accent,
                      }}
                    >
                      ✓
                    </div>
                  )}

                  {/* Logo */}

                  <div className="relative flex justify-center pt-1">
                    <div className="grid h-[88px] w-[88px] place-items-center rounded-[17px] bg-white p-2 shadow-xl">
                      <img
                        src={theme.logo}
                        alt={`${currentMethod.name} voucher`}
                        className="h-full w-full scale-110 object-contain"
                      />
                    </div>
                  </div>

                  {/* Voucher content */}

                  <div className="relative mt-4">
                    <p className="text-xs font-semibold text-[#9da5bb]">
                      {currentMethod.name} Voucher
                    </p>

                    <p className="mt-1 text-[31px] font-black leading-none">
                      ₹{option.amount}
                    </p>

                    <span
                      className="mt-3 inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] font-black"
                      style={{
                        color: theme.accentLight,
                        borderColor: theme.border,
                        backgroundColor: theme.soft,
                      }}
                    >
                      ⚡ {theme.action}
                    </span>
                  </div>

                  {/* Divider */}

                  <div className="my-5 h-px bg-white/10" />

                  {/* Required VEs */}

                  <div className="relative">
                    <p className="text-[11px] font-semibold text-[#7e879f]">
                      Required VEs
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <img
                        src="/images/coin.png"
                        alt=""
                        className="h-7 w-7 object-contain"
                      />

                      <p className="text-base font-black">
                        {option.requiredVEs.toLocaleString()}
                      </p>

                      <span className="text-xs text-[#7e879f]">VEs</span>
                    </div>
                  </div>

                  {/* Progress */}

                  <div className="relative mt-5">
                    <div className="flex items-center gap-1.5">
                      <img
                        src="/images/coins.png"
                        alt=""
                        className="h-6 w-7 object-contain"
                      />

                      <span className="text-xs font-black text-[#35d399]">
                        {Math.min(balance, option.requiredVEs).toLocaleString()}
                      </span>

                      <span className="text-xs text-[#747e97]">Of</span>

                      <span
                        className="text-xs font-black"
                        style={{
                          color: theme.accentLight,
                        }}
                      >
                        {option.requiredVEs.toLocaleString()}
                      </span>

                      <span className="text-[10px] text-[#747e97]">VEs</span>
                    </div>

                    <div className="mt-2 h-[6px] overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${progress}%`,
                          background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight})`,
                        }}
                      />
                    </div>

                    {eligible ? (
                      <p
                        className="mt-2 text-[10px] font-black"
                        style={{
                          color: theme.accentLight,
                        }}
                      >
                        ✓ Eligible to redeem
                      </p>
                    ) : (
                      <p className="mt-2 text-[10px] font-semibold text-[#747d95]">
                        🔒 Need {remaining.toLocaleString()} more VEs
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* =================================================
            SECURITY CARD
        ================================================== */}

        <section
          className="mt-7 rounded-[20px] border p-5 sm:p-6"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            background:
              "linear-gradient(135deg, rgba(18,23,42,0.95), rgba(8,12,25,0.98))",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border text-xl"
              style={{
                color: theme.accentLight,
                borderColor: theme.border,
                backgroundColor: theme.soft,
              }}
            >
              🛡
            </div>

            <div>
              <h3 className="font-black">100% Secure Redemption</h3>

              <p className="mt-1 text-sm leading-6 text-[#747e96]">
                Your data and transactions are always protected.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            REDEEM BUTTON
        ================================================== */}

        <div className="flex justify-center py-8">
          <button
            type="button"
            disabled={!selectedReward || balance < selectedReward.requiredVEs}
            onClick={openModal}
            className="w-full max-w-[380px] rounded-2xl px-8 py-4 text-base font-black text-white shadow-2xl transition duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-35"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`,
              boxShadow: `0 15px 40px ${theme.soft}`,
            }}
          >
            {selectedReward
              ? `Redeem ₹${selectedReward.amount} →`
              : "Select a Voucher"}
          </button>
        </div>
      </div>

      {/* =====================================================
          REDEMPTION MODAL
      ====================================================== */}

      {isModalOpen && selectedReward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
          <div className="relative max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-[28px] border border-white/10 bg-[#0d1221] shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
            {!isSuccess ? (
              <>
                {/* Accent */}

                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight})`,
                  }}
                />

                {/* Close */}

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isProcessing}
                  className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white/5 text-xl text-[#929ab0] transition hover:bg-white/10 disabled:opacity-50"
                >
                  ×
                </button>

                <div className="p-6 sm:p-8">
                  <div className="pr-10">
                    <p
                      className="text-[10px] font-black tracking-[2px]"
                      style={{
                        color: theme.accentLight,
                      }}
                    >
                      REVIEW REDEMPTION
                    </p>

                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                      Review your reward
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#818aa2]">
                      Please verify your details before confirming the
                      redemption.
                    </p>
                  </div>

                  {/* Selected reward */}

                  <div
                    className="mt-6 flex items-center justify-between rounded-2xl border p-4"
                    style={{
                      backgroundColor: theme.soft,
                      borderColor: theme.border,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-14 w-14 place-items-center rounded-xl bg-white p-2">
                        <img
                          src={theme.logo}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-[10px] font-black text-[#7c859d]">
                          SELECTED VOUCHER
                        </p>

                        <p className="mt-1 text-2xl font-black">
                          ₹{selectedReward.amount}
                        </p>
                      </div>
                    </div>

                    <img
                      src="/images/coin.png"
                      alt=""
                      className="h-9 w-9 object-contain"
                    />
                  </div>

                  {/* Summary */}

                  <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <div className="flex justify-between border-b border-white/10 p-4">
                      <span className="text-sm text-[#818aa2]">
                        Payout Method
                      </span>

                      <span className="text-sm font-black">
                        {currentMethod.name}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 p-4">
                      <span className="text-sm text-[#818aa2]">
                        Required VEs
                      </span>

                      <span className="text-sm font-black">
                        {selectedReward.requiredVEs.toLocaleString()} VEs
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 p-4">
                      <span className="text-sm text-[#818aa2]">
                        Available VEs
                      </span>

                      <span className="text-sm font-black">
                        {balance.toLocaleString()} VEs
                      </span>
                    </div>

                    <div className="flex justify-between bg-[#35d399]/5 p-4">
                      <span className="text-sm font-bold text-[#7f879e]">
                        Remaining Balance
                      </span>

                      <span className="text-sm font-black text-[#35d399]">
                        {(
                          balance - selectedReward.requiredVEs
                        ).toLocaleString()}{" "}
                        VEs
                      </span>
                    </div>
                  </div>

                  {/* Input */}

                  <div className="mt-6">
                    <label
                      htmlFor="payout-details"
                      className="mb-2 block text-sm font-black"
                    >
                      {selectedMethod === "upi" ? "UPI ID" : "Delivery Email"}
                    </label>

                    <input
                      id="payout-details"
                      type={selectedMethod === "upi" ? "text" : "email"}
                      value={payoutDetails}
                      onChange={(event) => {
                        setPayoutDetails(event.target.value);

                        setValidationError("");
                      }}
                      placeholder={
                        selectedMethod === "upi"
                          ? "username@upi"
                          : "you@example.com"
                      }
                      className={`w-full rounded-xl border bg-[#080c17] px-4 py-3.5 text-sm font-medium text-white outline-none transition placeholder:text-[#555d72] ${
                        validationError
                          ? "border-red-500"
                          : "border-white/10 focus:border-[#8b5cf6]"
                      }`}
                    />

                    {validationError && (
                      <p className="mt-2 text-xs font-bold text-red-400">
                        {validationError}
                      </p>
                    )}
                  </div>

                  {/* Security */}

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex gap-3">
                      <span>🔒</span>

                      <p className="text-xs leading-5 text-[#7c859c]">
                        Please make sure your payout details are correct. Once
                        submitted, the redemption request cannot be changed.
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}

                  <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={closeModal}
                      disabled={isProcessing}
                      className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-black text-[#a1a8ba] transition hover:bg-white/10 disabled:opacity-50"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={handleConfirmRedemption}
                      disabled={isProcessing}
                      className="flex-1 rounded-xl px-5 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 disabled:opacity-60"
                      style={{
                        background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`,
                      }}
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Processing...
                        </span>
                      ) : (
                        "Confirm Redemption →"
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* =================================================
                 SUCCESS
              ================================================== */

              <div>
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight})`,
                  }}
                />

                <div className="flex flex-col items-center px-6 py-10 text-center sm:px-10">
                  {/* Animated success */}

                  <div className="relative grid h-32 w-32 place-items-center">
                    <div className="absolute inset-0 animate-ping rounded-full bg-[#35d399]/10" />

                    <div className="absolute inset-2 rounded-full border border-[#35d399]/30" />

                    <div className="relative grid h-24 w-24 place-items-center rounded-full bg-[#35d399]/10 text-5xl font-black text-[#35d399] shadow-[0_0_50px_rgba(53,211,153,0.2)]">
                      ✓
                    </div>
                  </div>

                  <p className="mt-6 text-[10px] font-black tracking-[2px] text-[#35d399]">
                    REDEMPTION SUCCESSFUL
                  </p>

                  <h2 className="mt-2 text-3xl font-black">Reward Redeemed!</h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-[#7d869e]">
                    Your ₹{selectedReward.amount} reward request has been
                    successfully submitted.
                  </p>

                  {/* Status */}

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#35d399]/20 bg-[#35d399]/10 px-4 py-2 text-xs font-black text-[#35d399]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#35d399]" />
                    Redemption Request Submitted
                  </div>

                  {/* Success Summary */}

                  <div className="mt-7 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <div className="flex items-center gap-4 border-b border-white/10 p-5 text-left">
                      <div className="grid h-14 w-14 place-items-center rounded-xl bg-white p-2">
                        <img
                          src={theme.logo}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[#747e97]">
                          {currentMethod.name}
                        </p>

                        <p className="mt-1 text-2xl font-black">
                          ₹{selectedReward.amount}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between border-b border-white/10 p-4">
                      <span className="text-sm text-[#7d869e]">
                        Payout Method
                      </span>

                      <span className="text-sm font-black">
                        {currentMethod.name}
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 p-4">
                      <span className="text-sm text-[#7d869e]">VEs Used</span>

                      <span className="text-sm font-black">
                        {selectedReward.requiredVEs.toLocaleString()} VEs
                      </span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 p-4">
                      <span className="text-sm text-[#7d869e]">Status</span>

                      <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-black text-amber-400">
                        Processing
                      </span>
                    </div>

                    <div className="flex justify-between p-4">
                      <span className="text-sm text-[#7d869e]">Reference</span>

                      <span className="text-xs font-black text-[#aab1c3]">
                        VLR-DEMO
                      </span>
                    </div>
                  </div>

                  {/* Remaining balance */}

                  <div className="mt-5 w-full rounded-2xl border border-[#35d399]/20 bg-[#35d399]/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#7d869e]">
                        Remaining Balance
                      </span>

                      <span className="text-xl font-black text-[#35d399]">
                        {balance.toLocaleString()} VEs
                      </span>
                    </div>

                    <p className="mt-1 text-left text-[11px] text-[#657087]">
                      {selectedReward.requiredVEs.toLocaleString()} VEs have
                      been deducted from your balance.
                    </p>
                  </div>

                  {/* Done */}

                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSuccess(false);
                      setSelectedReward(null);
                      setPayoutDetails("");
                    }}
                    className="mt-7 w-full max-w-[280px] rounded-xl px-6 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`,
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Payout;
