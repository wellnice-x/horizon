import { Toaster } from "react-hot-toast";
import { MotionConfig } from "motion/react";
import { useAnimationStore } from "@/stores/animationStore";
import useKeyboardFocus from "../hooks/useKeyboardFocus";
import darkBackground from "@/assets/images/bg-alt.webp";
import lightBackground from "@/assets/images/bg.webp";
import ThemeBackground from "../components/ThemeBackground";
import useThemeSync from "../hooks/useThemeSync";
import Home from "../pages/Home";

function App() {
  const animationsEnabled = useAnimationStore(
    (state) => state.animationsEnabled,
  );

  useKeyboardFocus();
  useThemeSync();

  return (
    <>
      <Toaster position="bottom-left" />

      <ThemeBackground
        lightThemeImageSrc={lightBackground}
        darkThemeImageSrc={darkBackground}
      />

      <MotionConfig reducedMotion={animationsEnabled ? "never" : "always"}>
        <Home />
      </MotionConfig>
    </>
  );
}

export default App;
