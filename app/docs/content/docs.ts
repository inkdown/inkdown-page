export interface DocMetadata {
  title: string;
  slug: string;
  order: number;
}

export interface DocItem {
  title: string;
  slug: string;
  order: number;
  component: React.ComponentType;
}

// Import all documentation MDX files
import GettingStarted from "./getting-started.mdx";
import EditorFeatures from "./editor-features.mdx";
import PluginDevelopment from "./plugin-development.mdx";
import Customization from "./customization.mdx";

export const docs: DocItem[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    order: 1,
    component: GettingStarted,
  },
  {
    title: "Editor Features",
    slug: "editor-features",
    order: 2,
    component: EditorFeatures,
  },
  {
    title: "Plugin Development",
    slug: "plugin-development",
    order: 3,
    component: PluginDevelopment,
  },
  {
    title: "Customization",
    slug: "customization",
    order: 4,
    component: Customization,
  },
].sort((a, b) => a.order - b.order);
