export type BlogPost = {
  title: string;
  category: string;
  date: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Behind the Look: Porcelain Clown Glam",
    category: "Makeup Notes",
    date: "Apr 18, 2026",
    excerpt:
      "A process note on building a soft clown-inspired look with pale base tones, exaggerated blush, and glossy black cherry details."
  },
  {
    title: "DIY Notes: Turning Chains into Heart Shapes",
    category: "Studio Log",
    date: "Mar 29, 2026",
    excerpt:
      "Small material experiments with chain weight, ribbon softness, and heart silhouettes that still feel wearable."
  },
  {
    title: "Baking Moodboard: Pink Frosting, Black Bows",
    category: "Baking",
    date: "Mar 10, 2026",
    excerpt:
      "A dessert styling direction built around piped pink frosting, dark bow details, glossy cherries, and playful drama."
  },
  {
    title: "Inspiration Log: Sacred Hearts, Circus Stars, and Soft Horror",
    category: "Inspiration",
    date: "Feb 22, 2026",
    excerpt:
      "Collecting visual cues from devotional shapes, circus sparkle, handmade textures, and softer horror references."
  }
];
