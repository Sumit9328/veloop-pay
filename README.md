# VELOOP Rewards – Payout Experience

A modern, responsive frontend redesign for the VELOOP Rewards payout and redemption experience.

The application provides a simple and polished flow for users to select a payout method, choose an available reward, check eligibility, enter payout details, review the redemption, and complete the redemption flow.

---

## 🚀 Project Overview

VELOOP Rewards is a frontend payout experience supporting multiple redemption methods:

- UPI Transfer
- Amazon Pay
- Google Play

The interface has been redesigned with a focus on:

- Clear reward discovery
- Easy payout method switching
- Eligibility visibility
- Simple reward selection
- Secure-looking redemption experience
- Form validation
- Processing and success states
- Responsive design across desktop and mobile
- Accessible and touch-friendly controls

The redemption flow is implemented entirely on the frontend using React state and local storage for demonstration purposes.

> Note: This project does not include a backend payout service. Redemption, validation, processing, success, and balance deduction are simulated locally for the frontend assignment.

---

## 💳 Supported Payout Methods

### UPI Transfer

- Instant payout experience
- UPI ID validation
- UPI-specific visual identity
- Available reward denominations
- VE requirement and eligibility display

### Amazon Pay

- Amazon Pay reward vouchers
- Email-based delivery
- Email validation
- Amazon-specific visual identity
- Available reward denominations
- VE requirement and eligibility display

### Google Play

- Google Play reward vouchers
- Email-based delivery
- Email validation
- Google Play-specific visual identity
- Available reward denominations
- VE requirement and eligibility display

---

## ✨ Features

- Three payout methods
- Dynamic payout method selection
- URL-based payout method routing
- Reward selection
- Available VE balance display
- Reward eligibility checking
- Insufficient VE handling
- UPI ID validation
- Email validation
- Missing details validation
- Redemption confirmation modal
- Processing state
- Success state
- Local VE balance deduction
- Remaining VE balance display
- Responsive desktop and mobile layouts
- Accessible form controls
- Keyboard-friendly interaction
- Focus states
- Method-specific themes
- Reusable UI structure
- Local storage persistence for demo balance

---

## 🔄 Redemption Flow

The application follows the following redemption journey:

```text
Choose Method
      ↓
Check Balance
      ↓
Select Reward
      ↓
Check Eligibility
      ↓
Enter Details
      ↓
Review Redemption
      ↓
Confirm Redemption
      ↓
Processing
      ↓
Success
```
## 🌐 Live Demo

[View Live Demo](YOUR_VERCEL_URL)

## 💻 GitHub Repository

[View Source Code](YOUR_GITHUB_REPO_URL)