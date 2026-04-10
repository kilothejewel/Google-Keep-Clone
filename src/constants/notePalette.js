/** Keep-style note surface colors (light + dark). IDs stored on each note. */
export const NOTE_PALETTE = [
  {
    id: "default",
    label: "Default",
    swatchClass: "bg-white ring-1 ring-gray-300 dark:bg-[#5f6368] dark:ring-[#80868b]",
    className:
      "bg-white border-gray-200 dark:bg-[#303134] dark:border-[#5f6368]",
  },
  {
    id: "coral",
    label: "Coral",
    swatchClass: "bg-[#f28b82]",
    className:
      "bg-[#f28b82] border-transparent text-gray-900 dark:bg-[#5c2b29] dark:text-[#fce8e6] dark:border-[#8b3a36]",
  },
  {
    id: "peach",
    label: "Peach",
    swatchClass: "bg-[#fbbc04]",
    className:
      "bg-[#fbbc04] border-transparent text-gray-900 dark:bg-[#614a19] dark:text-[#fde293] dark:border-[#a47b00]",
  },
  {
    id: "sand",
    label: "Sand",
    swatchClass: "bg-[#fff475]",
    className:
      "bg-[#fff475] border-transparent text-gray-900 dark:bg-[#635d19] dark:text-[#fef7b0] dark:border-[#9e9400]",
  },
  {
    id: "mint",
    label: "Mint",
    swatchClass: "bg-[#ccff90]",
    className:
      "bg-[#ccff90] border-transparent text-gray-900 dark:bg-[#345920] dark:text-[#e3f7d0] dark:border-[#4a7a2d]",
  },
  {
    id: "teal",
    label: "Teal",
    swatchClass: "bg-[#a7ffeb]",
    className:
      "bg-[#a7ffeb] border-transparent text-gray-900 dark:bg-[#1e4b45] dark:text-[#d0fff7] dark:border-[#2d6b62]",
  },
  {
    id: "sky",
    label: "Sky",
    swatchClass: "bg-[#cbf0f8]",
    className:
      "bg-[#cbf0f8] border-transparent text-gray-900 dark:bg-[#1b3a4b] dark:text-[#d4eef8] dark:border-[#2a5670]",
  },
  {
    id: "periwinkle",
    label: "Periwinkle",
    swatchClass: "bg-[#aecbfa]",
    className:
      "bg-[#aecbfa] border-transparent text-gray-900 dark:bg-[#2c3552] dark:text-[#dee4fc] dark:border-[#3f4d7a]",
  },
  {
    id: "lilac",
    label: "Lilac",
    swatchClass: "bg-[#d7aefb]",
    className:
      "bg-[#d7aefb] border-transparent text-gray-900 dark:bg-[#4a2866] dark:text-[#f0e0fc] dark:border-[#6b3d8f]",
  },
  {
    id: "pink",
    label: "Pink",
    swatchClass: "bg-[#fdcfe8]",
    className:
      "bg-[#fdcfe8] border-transparent text-gray-900 dark:bg-[#66264d] dark:text-[#fde7f3] dark:border-[#8f3a6c]",
  },
  {
    id: "gray",
    label: "Gray",
    swatchClass: "bg-[#e8eaed]",
    className:
      "bg-[#e8eaed] border-transparent text-gray-900 dark:bg-[#3c4043] dark:text-[#e8eaed] dark:border-[#5f6368]",
  },
];

export function surfaceClassForNoteColor(colorId) {
  const row = NOTE_PALETTE.find((p) => p.id === colorId);
  return row ? row.className : NOTE_PALETTE[0].className;
}
