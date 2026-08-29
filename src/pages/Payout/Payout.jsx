import { useState } from "react";
import { payoutOptions } from "../../data/payoutOptions";

function Payout() {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [selectedReward, setSelectedReward] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payoutDetails, setPayoutDetails] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const currentMethod = payoutOptions[selectedMethod];

  // Testing ke liye abhi 6000 VEs
  const [balance, setBalance] = useState(6000);

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
      setBalance((prev) => prev - selectedReward.requiredVEs);
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#0f1220] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <header className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-2.5 text-[13px] font-bold tracking-[2px] text-[#8f96ff]">
              VELOOP REWARDS
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[52px]">
              Redeem your rewards
            </h1>

            <p className="mt-3.5 text-base text-[#aeb4ca] sm:text-[17px]">
              Choose a payout method and redeem your VEs.
            </p>
          </div>

          {/* Balance */}
          <div className="w-full rounded-[20px] border border-[#2d3351] bg-[#191d31] p-[22px] sm:w-auto sm:min-w-[230px]">
            <span className="mb-2 block text-sm text-[#9da5c0]">
              Available Balance
            </span>

            <strong className="text-[28px]">
              {balance.toLocaleString()} VEs
            </strong>
          </div>
        </header>

        {/* Payout Methods */}
        <section className="mb-12">
          <div className="mb-[22px]">
            <h2 className="text-[25px] font-semibold">Choose payout method</h2>

            <p className="mt-1.5 text-[#929ab5]">
              Select how you want to receive your reward.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
            {Object.values(payoutOptions).map((method) => (
              <button
                key={method.id}
                type="button"
                className={`rounded-[20px] border p-[22px] text-left text-white transition duration-200 hover:-translate-y-[3px] hover:border-[#7077ff] ${
                  selectedMethod === method.id
                    ? "border-[#7077ff] bg-[#202542]"
                    : "border-[#2d3351] bg-[#191d31]"
                }`}
                onClick={() => {
                  setSelectedMethod(method.id);
                  setSelectedReward(null);
                  setPayoutDetails("");
                }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="grid h-[55px] w-[55px] place-items-center rounded-[15px] bg-[#2b3153] font-extrabold">
                    {method.id === "upi" && "UPI"}
                    {method.id === "amazon" && "A"}
                    {method.id === "googlePlay" && "▶"}
                  </span>

                  <span className="rounded-full bg-[#292e58] px-3 py-1.5 text-xs font-bold text-[#9da4ff]">
                    {method.badge}
                  </span>
                </div>

                <h3 className="mb-1.5 text-xl font-semibold">{method.name}</h3>

                <p className="mb-[18px] text-[#9da5c0]">{method.description}</p>

                <small className="text-[#7e87a6]">
                  {method.processingTime}
                </small>
              </button>
            ))}
          </div>
        </section>

        {/* Rewards */}
        <section className="mb-12">
          <div className="mb-[22px] flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-[25px] font-semibold">
                {currentMethod.name} rewards
              </h2>

              <p className="mt-1.5 text-[#929ab5]">
                Choose an available reward option below.
              </p>
            </div>

            <span className="font-semibold text-[#8f96ff]">
              {currentMethod.options.length} options
            </span>
          </div>

          {/* Reward Cards */}
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {currentMethod.options.map((option) => {
              const isEligible = balance >= option.requiredVEs;

              const remainingVEs = Math.max(option.requiredVEs - balance, 0);

              const isSelected = selectedReward?.id === option.id;

              const progress = Math.min(
                (balance / option.requiredVEs) * 100,
                100,
              );

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={!isEligible}
                  onClick={() => setSelectedReward(option)}
                  className={`w-full rounded-[20px] border p-6 text-left transition duration-200 ${
                    isSelected
                      ? "border-[#7379ff] bg-[#222847] shadow-[0_10px_30px_rgba(80,90,255,0.15)]"
                      : isEligible
                        ? "border-[#2d3351] bg-[#191d31] hover:-translate-y-[3px] hover:border-[#7379ff]"
                        : "cursor-not-allowed border-[#2d3351] bg-[#191d31] opacity-80"
                  }`}
                >
                  <div className="mb-[15px] text-[30px] font-extrabold">
                    ₹{option.amount}
                  </div>

                  <p className="mb-4 text-sm text-[#929ab5]">
                    {option.requiredVEs.toLocaleString()} VEs required
                  </p>

                  {/* Progress */}
                  <div className="h-[7px] overflow-hidden rounded-full bg-[#30364f]">
                    <div
                      className="h-full rounded-full bg-[#7379ff] transition-all duration-300"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>

                  {/* Eligibility */}
                  {isEligible ? (
                    <div className="mt-3 text-sm font-semibold text-[#4ade80]">
                      ✓ Eligible to redeem
                    </div>
                  ) : (
                    <div className="mt-3 text-sm font-semibold text-[#a8b0c5]">
                      🔒 Need {remainingVEs.toLocaleString()} more VEs
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Continue Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              disabled={!selectedReward || balance < selectedReward.requiredVEs}
              onClick={() => setIsModalOpen(true)}
              className="rounded-[14px] border-0 bg-gradient-to-br from-[#656cff] to-[#833cff] px-[30px] py-[15px] text-base font-bold text-white transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45"
            >
              {selectedReward ? "Continue to Redeem →" : "Select a Reward"}
            </button>
          </div>
        </section>
      </div>

      {/* ================================================= */}
      {/* REDEMPTION MODAL */}
      {/* ================================================= */}

      {isModalOpen && selectedReward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-[#34395d] bg-[#1b1f36] p-6 shadow-2xl sm:p-8">
            {!isSuccess ? (
              <>
                {/* Close */}
                <button
                  type="button"
                  onClick={() => {
                    if (!isProcessing) {
                      setIsModalOpen(false);
                    }
                  }}
                  disabled={isProcessing}
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#292e4b] text-2xl text-white transition hover:bg-[#353b5c] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  ×
                </button>

                {/* Heading */}
                <p className="mb-2 text-[13px] font-bold tracking-[2px] text-[#8f96ff]">
                  REVIEW REDEMPTION
                </p>

                <h2 className="text-2xl font-bold sm:text-[28px]">
                  Review Your Redemption
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#9da6c5]">
                  Please verify your reward and payout details before
                  continuing.
                </p>

                {/* Summary */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-[#303652]">
                  <div className="flex items-center justify-between border-b border-[#303652] px-4 py-4">
                    <span className="text-[#9da6c5]">Method</span>
                    <strong>{currentMethod.name}</strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#303652] px-4 py-4">
                    <span className="text-[#9da6c5]">Reward</span>
                    <strong>₹{selectedReward.amount}</strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#303652] px-4 py-4">
                    <span className="text-[#9da6c5]">Required VEs</span>
                    <strong>
                      {selectedReward.requiredVEs.toLocaleString()} VEs
                    </strong>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#303652] px-4 py-4">
                    <span className="text-[#9da6c5]">Available VEs</span>
                    <strong>{balance.toLocaleString()} VEs</strong>
                  </div>

                  <div className="flex items-center justify-between bg-[#222743] px-4 py-4">
                    <span className="text-[#9da6c5]">
                      Remaining after redemption
                    </span>

                    <strong>
                      {(balance - selectedReward.requiredVEs).toLocaleString()}{" "}
                      VEs
                    </strong>
                  </div>
                </div>

                {/* Payout Details */}
                <div className="mt-6">
                  <label
                    htmlFor="payout-details"
                    className="mb-2 block text-sm font-semibold text-white"
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
                        ? "Enter your UPI ID"
                        : "Enter your email address"
                    }
                    className="w-full rounded-xl border border-[#3b4164] bg-[#15182b] px-4 py-3.5 text-white outline-none placeholder:text-[#68718f] focus:border-[#7379ff]"
                  />

                  {validationError && (
                    <p className="mt-2 text-sm font-semibold text-red-400">
                      {validationError}
                    </p>
                  )}

                  <p className="mt-2 text-xs text-[#8f98b8]">
                    {selectedMethod === "upi"
                      ? "Example: username@upi"
                      : "Example: user@example.com"}
                  </p>
                </div>

                {/* Warning */}
                <div className="mt-5 rounded-xl border border-[#48445e] bg-[#222238] px-4 py-3.5 text-xs leading-5 text-[#b9bfd4]">
                  Please make sure your payout details are correct. Rewards may
                  be delivered to the information provided during redemption.
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    disabled={isProcessing}
                    className="flex-1 rounded-xl border border-[#3b4164] bg-transparent px-5 py-3.5 font-bold text-white transition hover:bg-[#252a45] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmRedemption}
                    disabled={isProcessing}
                    className="flex-1 rounded-xl bg-gradient-to-br from-[#656cff] to-[#833cff] px-5 py-3.5 font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isProcessing ? "Processing..." : "Confirm Redemption"}
                  </button>
                </div>
              </>
            ) : (
              /* SUCCESS */
              <div className="flex flex-col items-center px-2 py-8 text-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-[#183d31] text-4xl text-[#4ade80]">
                  ✓
                </div>

                <p className="mt-6 text-[13px] font-bold tracking-[2px] text-[#4ade80]">
                  REDEMPTION SUCCESSFUL
                </p>

                <h2 className="mt-2 text-3xl font-bold">Reward Redeemed!</h2>

                <p className="mt-3 max-w-md text-[#9da6c5]">
                  Your ₹{selectedReward.amount} reward request has been
                  successfully submitted.
                </p>

                <div className="mt-6 w-full rounded-2xl border border-[#303652] bg-[#222743] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[#9da6c5]">Payout Method</span>

                    <strong>{currentMethod.name}</strong>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[#9da6c5]">Reward</span>

                    <strong>₹{selectedReward.amount}</strong>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[#9da6c5]">VEs Used</span>

                    <strong>
                      {selectedReward.requiredVEs.toLocaleString()}
                    </strong>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[#303652] bg-[#15182b] px-5 py-4 text-sm text-[#aeb6d0]">
                  Remaining balance:{" "}
                  <span className="font-bold text-white">
                    {balance.toLocaleString()} VEs
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsSuccess(false);
                    setSelectedReward(null);
                    setPayoutDetails("");
                  }}
                  className="mt-7 rounded-xl bg-gradient-to-br from-[#656cff] to-[#833cff] px-8 py-3.5 font-bold text-white transition hover:-translate-y-0.5"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Payout;
