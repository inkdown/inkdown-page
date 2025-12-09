export interface Release {
  version: string;
  date: string;
  platforms: ("Desktop" | "Mobile")[];
  title: string;
  component: React.ComponentType;
}

import Release010 from "./0.1.0.mdx";

export const releases: Release[] = [
  {
    version: "0.1.0",
    date: "Dec 7, 2025",
    platforms: ["Desktop"],
    title: "Initial Release - Desktop Editor",
    component: Release010,
  },
];
