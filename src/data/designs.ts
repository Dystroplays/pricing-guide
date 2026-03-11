export interface DesignEntry {
  id: number;
  name: string;
  category: "signature" | "essentials";
  imagePath: string;
}

export const SIGNATURE_DESIGNS: DesignEntry[] = [
  {
    id: 1,
    name: "Cedar Garage Door with X-Trim",
    category: "signature",
    imagePath: "/gallery/Signature/18x8-cedar-garage-door-with-x-trim.webp",
  },
  {
    id: 2,
    name: "White Oak Horizontal Plank",
    category: "signature",
    imagePath: "/gallery/Signature/20x9-white-oak-garage-door-horizontal-plank-design.webp",
  },
  {
    id: 3,
    name: "Chevron Door with Glass",
    category: "signature",
    imagePath: "/gallery/Signature/9x8-and-16x8-chevron-garage-door-with-glass.jpeg",
  },
  {
    id: 4,
    name: "Horizontal Plank Doors",
    category: "signature",
    imagePath: "/gallery/Signature/horizontal-plank-doors.webp",
  },
];

export const ESSENTIALS_DESIGNS: DesignEntry[] = [
  {
    id: 5,
    name: "8x7 Essentials Door",
    category: "essentials",
    imagePath: "/gallery/Essentials/2-8x7.jpeg",
  },
  {
    id: 6,
    name: "Essentials Design",
    category: "essentials",
    imagePath: "/gallery/Essentials/IMG_0215.jpeg",
  },
  {
    id: 7,
    name: "Essentials Panel Door",
    category: "essentials",
    imagePath: "/gallery/Essentials/eyJidWNrZXQiOiJqb2JiZXIiLCJrZXkiOiJub3RlX2ZpbGVfYXR0YWNobWVudHMvZDA3Ni0xMjM4NDIyNDEvb3JpZ2luYWwvNzlEMzZCQUUtMkUxOC00RkE5LUFEMTUtNjA1NjRDMzY2MTBCLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsfX0=.jpeg",
  },
  {
    id: 8,
    name: "Painted MDO with Smart Trim",
    category: "essentials",
    imagePath: "/gallery/Essentials/painted mdo garage door with smart trim Large.jpeg",
  },
];
