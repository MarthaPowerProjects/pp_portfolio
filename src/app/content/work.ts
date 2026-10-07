export type WorkTag = "Consult" | "Build";

export type WorkItem = {
  label: "Sample";
  title: string;
  outcome: string;
  tags: readonly WorkTag[];
};

export const work: readonly WorkItem[] = [
  {
    label: "Sample",
    title: "Operations platform for a regional logistics team",
    outcome:
      "Replaced a spreadsheet workflow with a web app their dispatchers use every morning.",
    tags: ["Consult", "Build"],
  },
  {
    label: "Sample",
    title: "Membership product for a professional network",
    outcome:
      "Cut the launch plan from twelve features to four, then shipped the first version in eight weeks.",
    tags: ["Consult", "Build"],
  },
  {
    label: "Sample",
    title: "Cloud reset for an internal tool",
    outcome:
      "Moved a fragile single server onto a setup the client’s own developer can run.",
    tags: ["Consult"],
  },
];
