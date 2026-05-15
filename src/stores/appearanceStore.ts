import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

type AppearanceStore = {
  theme: Theme;
  isParallax: boolean;
  toggleTheme: () => void;
  toggleParallax: () => void;
  reset: () => void;
};

const isMobileDefault = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

export const useAppearanceStore = create<AppearanceStore>()(
  persist(
    (set) => ({
      theme: "dark",
      isParallax: !isMobileDefault(),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      toggleParallax: () =>
        set((state) => ({
          isParallax: !state.isParallax,
        })),

      reset: () =>
        set({
          theme: "dark",
          isParallax: !isMobileDefault(),
        }),
    }),
    {
      name: "appearance",
    },
  ),
);
