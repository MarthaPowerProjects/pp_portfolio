export type WorkTag = "Build" | "Integrate" | "Maintain";

export type WorkItem = {
  tag: WorkTag;
  title: string;
  outcome: string;
};

export const workTags: readonly WorkTag[] = ["Build", "Integrate", "Maintain"];

export const work: readonly WorkItem[] = [
  {
    tag: "Build",
    title: "Dispatch platform for a logistics team",
    outcome:
      "Replaced a spreadsheet workflow with a web app dispatchers use every morning.",
  },
  {
    tag: "Integrate",
    title: "Mobile money payments for a retailer",
    outcome:
      "Connected the shop's sales system to mobile money so payments reconcile on their own.",
  },
  {
    tag: "Maintain",
    title: "Rescue of a fragile internal tool",
    outcome:
      "Moved a single unstable server to a setup the client's own staff can run.",
  },
];
