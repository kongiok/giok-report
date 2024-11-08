import type { Part, Section } from "~/utils/types/configs";

// Hai, Taiwanese pronunciation of "Sea".
const hai: Part = {
  50: "#ECF9FD",
  100: "#D5F2FC",
  200: "#A1E3F7",
  300: "#5ACEF1",
  400: "#13B2E2",
  500: "#0F8DB3",
  600: "#084C61",
  700: "#07465A",
  800: "#053442",
  900: "#052C39",
  950: "#031E26",
};
// Jit, Taiwanese pronunciation of "Sun".
const jit: Part = {
  50: "#FFF8EB",
  100: "#FFF3DB",
  200: "#FFE7B8",
  300: "#FFD88A",
  400: "#FFC857",
  500: "#FFB114",
  600: "#EB9C00",
  700: "#D18B00",
  800: "#AD7400",
  900: "#805500",
  950: "#573A00",
};
// Tsui, Taiwanese pronunciation of "Water".
const tsui: Part = {
  50: "#E9FAFB",
  100: "#CBF2F6",
  200: "#92E4ED",
  300: "#36CDDD",
  400: "#20ACBC",
  500: "#177E89",
  600: "#15747F",
  700: "#12646D",
  800: "#0F545C",
  900: "#0A3439",
  950: "#082C30",
};
// Ang, Taiwanese pronunciation of "Red".
const ang: Part = {
  50: "#FDF2F2",
  100: "#FBEAE9",
  200: "#F6CCCB",
  300: "#F0ABA8",
  400: "#E8817D",
  500: "#DB3A34",
  600: "#D02B25",
  700: "#B2241F",
  800: "#931E1A",
  900: "#711714",
  950: "#4E100E",
};
// Tsioh, Taiwanese pronunciation of "Stone".
const tsioh: Part = {
  50: "#F8F7F7",
  100: "#F3F2F2",
  200: "#E4E2E3",
  300: "#D2D0D1",
  400: "#C1BEBF",
  500: "#AAA7A8",
  600: "#918D8F",
  700: "#706B6E",
  800: "#323031",
  900: "#272526",
  950: "#1A191A",
};

const palettes: Section = {
  hai,
  jit,
  tsui,
  ang,
  tsioh,
};

export { hai, jit, tsui, tsioh, palettes };
