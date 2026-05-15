export type GalleryItem = {
  title: string;
  category: "Makeup" | "DIY" | "Baking";
  caption: string;
  palette: string;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Porcelain Clown Glam",
    category: "Makeup",
    caption:
      "Soft clown-inspired makeup with exaggerated blush, delicate linework, and a glossy black cherry lip.",
    palette: "from-powder via-blush to-ink"
  },
  {
    title: "Black Cherry Tears",
    category: "Makeup",
    caption:
      "Dramatic liner, stained cherry tones, and tiny teardrop details with a porcelain finish.",
    palette: "from-rose via-cherry to-ink"
  },
  {
    title: "Sacred Heart Soft Goth",
    category: "Makeup",
    caption:
      "A romantic face chart direction with radiant heart shapes, silver accents, and smoky edges.",
    palette: "from-blush via-rose to-chrome"
  },
  {
    title: "Doll Face Experiment",
    category: "Makeup",
    caption:
      "Rounded blush placement, sharp lashes, glossy texture, and playful theatrical symmetry.",
    palette: "from-white via-blush to-cherry"
  },
  {
    title: "Chain Heart Accessory",
    category: "DIY",
    caption:
      "Handmade accessory concept mixing chain texture, heart shapes, and soft ribbon details.",
    palette: "from-ink via-chrome to-rose"
  },
  {
    title: "Ribbon & Metal Charm Set",
    category: "DIY",
    caption:
      "A small collection of altered charms balancing cute ribbon shapes with cool silver hardware.",
    palette: "from-chrome via-powder to-ink"
  },
  {
    title: "Spiked Bow Concept",
    category: "DIY",
    caption:
      "A gothic-cute bow sketch with structured spikes, glossy black trim, and pale pink satin energy.",
    palette: "from-blush via-ink to-chrome"
  },
  {
    title: "Birthday Cake Ritual",
    category: "Baking",
    caption:
      "A theatrical dessert concept with candlelight drama, soft frosting, and heart-shaped details.",
    palette: "from-white via-rose to-cherry"
  },
  {
    title: "Pink Frosting, Black Bows",
    category: "Baking",
    caption:
      "A playful dessert concept with pink frosting, black bow details, and dramatic presentation.",
    palette: "from-blush via-powder to-ink"
  },
  {
    title: "Cherry Clown Cupcakes",
    category: "Baking",
    caption:
      "Cupcake styling with cherry-red accents, piped ruffles, and circus-inspired finishing touches.",
    palette: "from-rose via-white to-cherry"
  }
];
