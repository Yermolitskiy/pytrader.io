// src/data/offers.ts
export const offers = [
    {
      slug: "masterclass",
      title: "Python Trading Masterclass",
      bg: "/background_1.png",
      price: 99,
    buyUrl: "https://buy.stripe.com/00waEXc465bn1qYc9UgQE00",
      syllabusMdx: "content/offers/masterclass.mdx",
    },
    {
      slug: "vip-setup",
      title: "VIP 1:1 Setup / Coaching",
      bg: "/background_2.png",
      price: 200,
      buyUrl: "https://buy.stripe.com/5kQ9AT5FI0V7glSfm6gQE01",
      syllabusMdx: "content/offers/vip-setup.mdx",
    },
  ] as const;