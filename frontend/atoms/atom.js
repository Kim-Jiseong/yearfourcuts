import { atom, RecoilRoot, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const frameAtom = atom({
  key: "frame",
  default: null,
  // effects_UNSTABLE: [persistAtom],
});
export const colorAtom = atom({
  key: "color",
  default: "#FFD275",
  // effects_UNSTABLE: [persistAtom],
});
export const file1Atom = atom({
  key: "file1",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const file2Atom = atom({
  key: "file2",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const file3Atom = atom({
  key: "file3",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const file4Atom = atom({
  key: "file4",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const letterAtom = atom({
  key: "letterAtom",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const authorAtom = atom({
  key: "authorAtom",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const pageAtom = atom({
  key: "pageAtom",
  default: 1,
  // effects_UNSTABLE: [persistAtom],
});
export const modalAtom = atom({
  key: "modalAtom",
  default: false,
  // effects_UNSTABLE: [persistAtom],
});
