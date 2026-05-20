import {
  CakeSlice,
  Heart,
  Paintbrush,
  Scissors,
  Sparkles
} from "lucide-react";

export const siteContent = {
  name: "Stephanie Ponce",
  handle: "violentdelight.666",
  tagline: "Makeup Artist • DIY Creator • Clown • Fangirl",
  intro:
    "A gothic-cute creative portfolio blending makeup, handmade projects, baking, clown-inspired visuals, and soft chaos.",
  email: "stephanie.ponce17@gmail.com",
  instagram: "@violentdelight.666",
  tiktok: "@violentdelight.666"
};

export const navItems = [
  { label: "About", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export const moodPhrases = [
  "MAKEUP",
  "DIY",
  "BAKING",
  "CLOWN GLAM",
  "SOFT CHAOS",
  "SACRED HEARTS",
  "HANDMADE DETAILS"
];

export const categories = [
  {
    title: "Makeup Looks",
    description:
      "Dramatic faces, soft clown details, bold liner, blush-heavy looks, and theatrical glam.",
    Icon: Paintbrush,
    tone: "from-rose/35 via-blush to-white"
  },
  {
    title: "DIY Projects",
    description:
      "Handmade accessories, altered pieces, textures, chains, bows, charms, and experimental design.",
    Icon: Scissors,
    tone: "from-ink/90 via-cherry to-rose/70"
  },
  {
    title: "Baking",
    description:
      "Cute desserts, themed treats, pink frosting, dark details, and playful presentation.",
    Icon: CakeSlice,
    tone: "from-white via-blush to-rose/45"
  }
];

export const heroStats = [
  { label: "Makeup", Icon: Sparkles },
  { label: "Handmade", Icon: Heart },
  { label: "Baking", Icon: CakeSlice }
];
