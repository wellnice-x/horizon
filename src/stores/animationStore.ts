import { create } from "zustand";
import { persist } from "zustand/middleware";

type AnimationStore = {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
  reset: () => void;
};

export const useAnimationStore = create<AnimationStore>()(
  persist(
    (set) => ({
      animationsEnabled: true,

      toggleAnimations: () =>
        set((state) => ({
          animationsEnabled: !state.animationsEnabled,
        })),

      reset: () =>
        set({
          animationsEnabled: true,
        }),
    }),
    {
      name: "animations",
    },
  ),
);
