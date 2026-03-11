export interface DesignEntry {
  id: number;
  name: string;
  category: "signature" | "essentials";
  imagePath: string;
}

export interface GalleryEntry {
  id: number;
  name: string;
  imagePath: string;
}

export const SIGNATURE_DESIGNS: DesignEntry[] = [
  { id: 101, name: "Design 101", category: "signature", imagePath: "/designs/signature/101.png" },
  { id: 102, name: "Design 102", category: "signature", imagePath: "/designs/signature/102.png" },
  { id: 103, name: "Design 103", category: "signature", imagePath: "/designs/signature/103.png" },
  { id: 104, name: "Design 104", category: "signature", imagePath: "/designs/signature/104.png" },
  { id: 105, name: "Design 105", category: "signature", imagePath: "/designs/signature/105.png" },
  { id: 106, name: "Design 106", category: "signature", imagePath: "/designs/signature/106.png" },
  { id: 107, name: "Design 107", category: "signature", imagePath: "/designs/signature/107.png" },
  { id: 108, name: "Design 108", category: "signature", imagePath: "/designs/signature/108.png" },
  { id: 109, name: "Design 109", category: "signature", imagePath: "/designs/signature/109.png" },
  { id: 110, name: "Design 110", category: "signature", imagePath: "/designs/signature/110.png" },
  { id: 111, name: "Design 111", category: "signature", imagePath: "/designs/signature/111.png" },
  { id: 112, name: "Design 112", category: "signature", imagePath: "/designs/signature/112.png" },
  { id: 113, name: "Design 113", category: "signature", imagePath: "/designs/signature/113.png" },
  { id: 114, name: "Design 114", category: "signature", imagePath: "/designs/signature/114.png" },
  { id: 115, name: "Design 115", category: "signature", imagePath: "/designs/signature/115.png" },
  { id: 116, name: "Design 116", category: "signature", imagePath: "/designs/signature/116.png" },
  { id: 117, name: "Design 117", category: "signature", imagePath: "/designs/signature/117.png" },
  { id: 118, name: "Design 118", category: "signature", imagePath: "/designs/signature/118.png" },
];

export const ESSENTIALS_DESIGNS: DesignEntry[] = [
  { id: 201, name: "Design 101", category: "essentials", imagePath: "/designs/essentials/101.png" },
  { id: 202, name: "Design 102", category: "essentials", imagePath: "/designs/essentials/102.png" },
  { id: 203, name: "Design 103", category: "essentials", imagePath: "/designs/essentials/103.png" },
  { id: 204, name: "Design 104", category: "essentials", imagePath: "/designs/essentials/104.png" },
  { id: 205, name: "Design 105", category: "essentials", imagePath: "/designs/essentials/105.png" },
  { id: 206, name: "Design 106", category: "essentials", imagePath: "/designs/essentials/106.png" },
  { id: 207, name: "Design 107", category: "essentials", imagePath: "/designs/essentials/107.png" },
  { id: 208, name: "Design 108", category: "essentials", imagePath: "/designs/essentials/108.png" },
  { id: 209, name: "Design 109", category: "essentials", imagePath: "/designs/essentials/109.png" },
  { id: 210, name: "Design 110", category: "essentials", imagePath: "/designs/essentials/110.png" },
  { id: 211, name: "Design 111", category: "essentials", imagePath: "/designs/essentials/111.png" },
  { id: 212, name: "Design 112", category: "essentials", imagePath: "/designs/essentials/112.png" },
  { id: 213, name: "Design 113", category: "essentials", imagePath: "/designs/essentials/113.png" },
  { id: 214, name: "Design 114", category: "essentials", imagePath: "/designs/essentials/114.png" },
  { id: 215, name: "Design 115", category: "essentials", imagePath: "/designs/essentials/115.png" },
  { id: 216, name: "Design 116", category: "essentials", imagePath: "/designs/essentials/116.png" },
  { id: 217, name: "Design 117", category: "essentials", imagePath: "/designs/essentials/117.png" },
  { id: 218, name: "Design 118", category: "essentials", imagePath: "/designs/essentials/118.png" },
];

export const GALLERY_IMAGES: Record<"signature" | "essentials", GalleryEntry[]> = {
  signature: [
    { id: 1, name: "18x8 Cedar Door with X-Trim", imagePath: "/gallery/Signature/18x8-cedar-garage-door-with-x-trim.webp" },
    { id: 2, name: "Black 101 - 16x7", imagePath: "/gallery/Signature/black 101 - 16x7.jpg" },
    { id: 3, name: "Wood Door Installation", imagePath: "/gallery/Signature/wood garage door installation mansfield tx.jpg" },
    { id: 4, name: "Horizontal Plank Doors", imagePath: "/gallery/Signature/horizontal-plank-doors.webp" },
  ],
  essentials: [
    { id: 5, name: "8x7 Essentials Door", imagePath: "/gallery/Essentials/2-8x7.jpeg" },
    { id: 6, name: "16x8 MDO Door with Colonial Grids", imagePath: "/gallery/Essentials/16x8 mdo garage door with colonial grids Large.jpeg" },
    { id: 7, name: "Painted MDO DF Garage Door", imagePath: "/gallery/Essentials/painted mdo df garage door.jpeg" },
    { id: 8, name: "Painted MDO with Smart Trim", imagePath: "/gallery/Essentials/painted mdo garage door with smart trim Large.jpeg" },
  ],
};
