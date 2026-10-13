export const planOptions = [
  "Working session",
  "Strategy sprint",
  "Advisory retainer",
  "Not sure yet",
] as const;

export type PlanOption = (typeof planOptions)[number];

export const site = {
  name: "Power Projects",
  year: "2026",
  title: "Power Projects — IT consultation and build",
  description:
    "Power Projects consults on the product, then builds the web, app, and cloud behind it. Book a priced consultation.",
  footerLine: "Consultation and build for web, app, and cloud.",
  skip: "Skip to content",
  menuOpen: "Menu",
  menuClose: "Close",
  bookCall: {
    label: "Book a call",
    href: "#contact",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "IT consultation and build",
    lines: ["Advice that", "ships."],
    subcopy:
      "Power Projects consults on the product, then builds the web, app, and cloud behind it.",
    primary: { label: "Book a consultation", href: "#contact" },
    secondary: { label: "See how we price advice", href: "#pricing" },
    note: "Typical first step is a 45-minute working session.",
    facts: [
      {
        index: "01",
        title: "Consult",
        body: "Architecture, product, and a plan you can act on.",
      },
      {
        index: "02",
        title: "Build",
        body: "Web, app, and cloud, shipped by the same team.",
      },
      {
        index: "03",
        title: "Stay",
        body: "A retainer when you want us in the room after launch.",
      },
    ],
  },
  paths: {
    eyebrow: "Two ways to work with us",
    items: [
      {
        label: "Priced",
        title: "Consult",
        body: "You need a clear technical call before anyone writes code. We review the product, the stack, and the risk, then leave you with a decision.",
        link: "View consultation pricing",
        href: "#pricing",
      },
      {
        label: "Scoped",
        title: "Build",
        body: "You already know what to make, or the consultation made it obvious. We design and ship the product with you.",
        link: "Start with a consultation",
        href: "#pricing",
      },
    ],
  },
  services: {
    eyebrow: "What we actually do",
    items: [
      {
        index: "01",
        name: "Product consultation",
        body: "We decide what to build, what to delay, and what the first release must prove.",
      },
      {
        index: "02",
        name: "Architecture",
        body: "We choose the stack, the data model, and the path to production.",
      },
      {
        index: "03",
        name: "Product build",
        body: "We design and ship web apps, mobile apps, and the APIs behind them.",
      },
      {
        index: "04",
        name: "Cloud and launch",
        body: "We put it on solid infrastructure, with the access, backups, and handover your team needs.",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
  },
  pricing: {
    eyebrow: "Consultation pricing",
    intro:
      "Advice has a price. Building is quoted after we understand the work.",
    recommended: "Recommended",
    includes: "Includes",
    build: "Product builds are quoted from the sprint. A typical first release starts once the scope is agreed. We do not publish a build price list, because the number depends on the product.",
    buildCta: "Ask about a build",
    buildHref: "#contact",
    plans: [
      {
        name: "Working session",
        price: "$0",
        time: "45 minutes",
        audience:
          "You want a straight read on an idea, a vendor, or a stuck build.",
        includes: [
          "One working session with a senior engineer",
          "A written note the same day: keep, change, or stop",
          "No slide deck",
        ],
        cta: "Book a session",
        href: "#contact",
        recommended: false,
      },
      {
        name: "Strategy sprint",
        price: "$2,800",
        time: "10 business days",
        audience:
          "You are about to spend real money on a build and need the plan first.",
        includes: [
          "Kickoff, two working sessions, and a readout",
          "Product scope for a first release",
          "Architecture outline and the risks that matter",
          "A build estimate you can take to us or to another team",
        ],
        cta: "Start a sprint",
        href: "#contact",
        recommended: true,
      },
      {
        name: "Advisory retainer",
        price: "$4,500",
        cadence: "per month",
        time: "month to month, cancel anytime",
        audience: "You want a senior technical partner on a live product.",
        includes: [
          "Two sessions a month",
          "Review of plans, pull requests, and vendor choices",
          "A private channel for the decisions that cannot wait",
        ],
        cta: "Request a retainer",
        href: "#contact",
        recommended: false,
      },
    ],
  },
  steps: {
    title: "How a project starts",
    items: [
      {
        index: "01",
        title: "Book",
        body: "Pick a session, a sprint, or a retainer.",
      },
      {
        index: "02",
        title: "Decide",
        body: "We tell you what to build and what to leave.",
      },
      {
        index: "03",
        title: "Ship",
        body: "If you want us to build it, the same people do the work.",
      },
    ],
  },
  contact: {
    eyebrow: "Book a consultation",
    line: "Tell us which plan you want. We reply within one business day.",
    success: "Received. We will write back within one business day.",
    submit: "Send",
    messageLabel: "Message",
    messagePlaceholder: "What are you trying to decide?",
    planLabel: "Plan",
    planPlaceholder: "Select a plan",
    plans: planOptions,
    fields: {
      name: "Name",
      email: "Work email",
      company: "Company",
    },
    errors: {
      name: "Enter your name.",
      email: "Enter a work email.",
      company: "Enter your company.",
      plan: "Choose a plan.",
      message: "Tell us what you are trying to decide.",
    },
  },
} as const;

export type SitePlan = (typeof site.pricing.plans)[number];
