export const needOptions = [
  "Build new software",
  "Integrate systems",
  "Maintain or fix software",
  "Technical consultancy",
  "Not sure yet",
] as const;

export type NeedOption = (typeof needOptions)[number];

export type ServiceIconName = "build" | "integrate" | "maintain" | "consult";

export const site = {
  name: "Power Projects",
  year: "2026",
  email: "hello@yourdomain.com",
  title: "Power Projects | Software built, connected and kept running",
  description:
    "Power Projects builds custom software, integrates your systems, maintains what you already run, and advises on technology decisions.",
  footerLine: "Software built, connected and kept running.",
  skip: "Skip to content",
  menuOpen: "Menu",
  menuClose: "Close",
  bookCall: {
    label: "Talk to us",
    href: "#contact",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "How we work", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Working together", href: "#engage" },
  ],
  hero: {
    eyebrow: "Taking on projects",
    headline: [
      { text: "Software built, " },
      { text: "connected", accent: true },
      { text: " and kept running." },
    ],
    subcopy:
      "Power Projects is a team of software developers. We build custom systems, link the tools you already use, look after live software, and advise on technology decisions.",
    primary: { label: "Book a free working session", href: "#contact" },
    secondary: { label: "See what we do", href: "#services" },
    orbitCenter: ["Your", "business"],
    trust: [
      { title: "45 minutes", body: "Free working session with a senior developer" },
      { title: "In writing", body: "Prices agreed before work begins" },
      { title: "1 business day", body: "Typical time to hear back from us" },
      { title: "One team", body: "Same developers from first call to long after launch" },
    ],
  },
  services: {
    title: "Four ways we help",
    lead: "Use us for one thing or all four. The same developers handle your project from the first conversation to long after launch.",
    cta: "Talk about this",
    scrollHint: "Swipe or use the arrows",
    prev: "Previous services",
    next: "Next services",
    items: [
      {
        index: "01",
        icon: "build",
        verb: "Build",
        hook: "Built",
        name: "Custom software development",
        body: "Web apps, mobile apps, internal tools and the APIs behind them, built around how your business actually works.",
        points: [
          "Business systems and dashboards",
          "Customer portals and mobile apps",
          "Replacing spreadsheets and manual work",
        ],
      },
      {
        index: "02",
        icon: "integrate",
        verb: "Integrate",
        hook: "Connected",
        name: "System integration",
        body: "We make separate tools share data so your team stops retyping it.",
        points: [
          "Mobile money and payment gateways",
          "Accounting, CRM and ERP connections",
          "Third-party APIs and data migration",
        ],
      },
      {
        index: "03",
        icon: "maintain",
        verb: "Maintain",
        hook: "Kept running",
        name: "Maintenance and support",
        body: "We take care of live software, including systems we did not build.",
        points: [
          "Bug fixes, updates and security patches",
          "Hosting, backups and monitoring",
          "Rescuing and modernising old systems",
        ],
      },
      {
        index: "04",
        icon: "consult",
        verb: "Advise",
        hook: "Advised",
        name: "Technology consultancy",
        body: "Clear, independent advice before you spend money on software.",
        points: [
          "What to build first and what to leave out",
          "Choosing a stack, vendor or platform",
          "Reviewing a stuck project or another team's work",
        ],
      },
    ],
  },
  process: {
    title: "How a project runs",
    lead: "The same four steps whether it is a small fix or a full product.",
    items: [
      {
        title: "Talk",
        body: "A free working session to understand the problem, the people and the budget.",
      },
      {
        title: "Plan",
        body: "A written scope, timeline and fixed price or clear estimate.",
      },
      {
        title: "Build",
        body: "Short cycles with regular demos, so you see progress and can steer.",
      },
      {
        title: "Support",
        body: "Launch, handover, training and ongoing care when you want it.",
      },
    ],
  },
  work: {
    title: "Selected work",
    lead: "The kinds of problems we solve.",
    note: "Examples shown for illustration. Case studies with client results are being added.",
    all: "All",
    filterLabel: "Filter work by type",
    empty: "Nothing here yet.",
  },
  engage: {
    title: "Working together",
    lead: "Start small, grow as trust grows. Prices are agreed in writing before work begins.",
    featured: "Start here",
    items: [
      {
        title: "Free working session",
        body: "45 minutes with a senior developer. You leave with a straight opinion on your idea, a vendor or a stuck project.",
        cta: "Book a session",
        featured: true,
      },
      {
        title: "Project",
        body: "Fixed scope and price for a build or integration, delivered in stages with demos along the way.",
        cta: "Plan a project",
        featured: false,
      },
      {
        title: "Support plan",
        body: "A monthly arrangement for maintenance, updates and advice, with a response time you can rely on.",
        cta: "Ask about support",
        featured: false,
      },
    ],
  },
  contact: {
    title: "Tell us what you need",
    lead: "We reply within one business day.",
    success: "Received. We will write back within one business day.",
    submit: "Send message",
    optional: "optional",
    sticky: "Free 45-minute working session",
    fields: {
      name: "Name",
      contact: "Email or WhatsApp number",
      company: "Company",
      need: "What do you need?",
      message: "Short description",
    },
    errors: {
      name: "Enter your name.",
      contact: "Enter an email or a WhatsApp number we can reach.",
      need: "Choose what you need.",
    },
  },
} as const;
