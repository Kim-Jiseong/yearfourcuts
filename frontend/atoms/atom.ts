import { atom, RecoilRoot, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const frameAtom = atom<any>({
  key: "frame",
  default: null,
  // effects_UNSTABLE: [persistAtom],
});
export const colorAtom = atom<any>({
  key: "color",
  default: "#000000",
  // effects_UNSTABLE: [persistAtom],
});
export const file1Atom = atom<any>({
  key: "file1",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const file2Atom = atom<any>({
  key: "file2",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const file3Atom = atom<any>({
  key: "file3",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const file4Atom = atom<any>({
  key: "file4",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const letterAtom = atom<any>({
  key: "letterAtom",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const authorAtom = atom<any>({
  key: "authorAtom",
  default: "",
  // effects_UNSTABLE: [persistAtom],
});
export const pageAtom = atom<any>({
  key: "pageAtom",
  default: 1,
  // effects_UNSTABLE: [persistAtom],
});
export const modalAtom = atom<any>({
  key: "modalAtom",
  default: false,
  // effects_UNSTABLE: [persistAtom],
});
