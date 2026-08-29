export const payoutOptions = {
  upi: {
    id: "upi",
    name: "UPI Transfer",
    description: "Instant Bank Transfer",
    processingTime: "Processing within 24 hours",
    badge: "Instant",
    options: [
      {
        id: "upi-10",
        amount: 10,
        requiredVEs: 2400,
      },
      {
        id: "upi-25",
        amount: 25,
        requiredVEs: 5800,
      },
      {
        id: "upi-50",
        amount: 50,
        requiredVEs: 10000,
      },
      {
        id: "upi-100",
        amount: 100,
        requiredVEs: 19500,
      },
      {
        id: "upi-150",
        amount: 150,
        requiredVEs: 28500,
      },
      {
        id: "upi-300",
        amount: 300,
        requiredVEs: 52500,
      },
      {
        id: "upi-500",
        amount: 500,
        requiredVEs: 80500,
      },
      {
        id: "upi-1000",
        amount: 1000,
        requiredVEs: 150000,
      },
    ],
  },

  amazon: {
    id: "amazon",
    name: "Amazon Pay",
    description: "Gift Card Balance",
    processingTime: "Instant delivery",
    badge: "Popular",
    options: [
      {
        id: "amazon-10",
        amount: 10,
        requiredVEs: 2500,
      },
      {
        id: "amazon-25",
        amount: 25,
        requiredVEs: 5900,
      },
      {
        id: "amazon-50",
        amount: 50,
        requiredVEs: 10500,
      },
      {
        id: "amazon-100",
        amount: 100,
        requiredVEs: 19800,
      },
      {
        id: "amazon-250",
        amount: 250,
        requiredVEs: 47000,
      },
    ],
  },

  googlePlay: {
    id: "googlePlay",
    name: "Google Play",
    description: "App Store Credit",
    processingTime: "Global redemption",
    badge: "Fast",
    options: [
      {
        id: "google-10",
        amount: 10,
        requiredVEs: 2600,
      },
      {
        id: "google-25",
        amount: 25,
        requiredVEs: 6000,
      },
      {
        id: "google-50",
        amount: 50,
        requiredVEs: 11000,
      },
      {
        id: "google-100",
        amount: 100,
        requiredVEs: 20500,
      },
      {
        id: "google-150",
        amount: 150,
        requiredVEs: 30000,
      },
    ],
  },
};
